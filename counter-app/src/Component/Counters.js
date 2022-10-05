import React, { useState } from 'react';
import Counter from './Counter';

const Counters = () => {
    const [counters, setCounters] = useState([
        { _id: 1, value: 0 },
        { _id: 2, value: 0 },
        { _id: 3, value: 2 },
        { _id: 4, value: 0 },
    ]);

    const handleReset = () => {
        const counterReset = counters.map(count => {
            count.value = 0;
            return count;
        });
        setCounters(counterReset);
    };

    const handleDelete = (count) => {
        const newCounter = counters.filter(cnt => cnt._id !== count);
        setCounters(newCounter);
    };

    const handleIncrease = (counter) => {
        const increaseCounters = [...counters];
        const newCounter = increaseCounters.find(count => count._id === counter._id);
        newCounter.value += 1;
        setCounters(increaseCounters);
    }
    const handleDecrease = (counter) => {
        const decreaseCounters = [...counters];
        const newCounter = decreaseCounters.find(count => count._id === counter._id);
        newCounter.value -= 1;
        setCounters(decreaseCounters);
    }

    return (
        <div>
            <button onClick={() => handleReset()} className="btn btn-primary btn-sm m-2">Reset</button>
            {
                counters.map(counter =>
                    <Counter
                        key={counter._id}
                        counter={counter}
                        onDelete={handleDelete}
                        onIncrease={handleIncrease}
                        onDecrease={handleDecrease}
                    >
                        Counter: #{counter._id}
                    </Counter>
                )
            }
        </div>
    );
};

export default Counters;