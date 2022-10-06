import React  from 'react';
import Counter from './Counter';

const Counters = (props) => {
    const { onReset, counters, onDelete, onIncrease, onDecrease } = props;

    return (
        <div>
            <button onClick={() => onReset()} className="btn btn-primary btn-sm m-2">Reset</button>
            {
                counters.map(counter =>
                    <Counter
                        key={counter._id}
                        counter={counter}
                        onDelete={onDelete}
                        onIncrease={onIncrease}
                        onDecrease={onDecrease}
                    >
                        Counter: #{counter._id}
                    </Counter>
                )
            }
        </div>
    );
};

export default Counters;