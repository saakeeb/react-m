import { useState } from 'react';
import './App.css';
// import Counter from './Component/Counter';
import Counters from './Component/Counters';
import NavbarMenu from './Component/NavbarMenu';

function App() {
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
    <div className="App">
      {/* <Counter /> */}
      <NavbarMenu
        counters={counters.filter(count=> count.value > 0).length}
      />
      <main className='container-fluid'>
        <Counters
          counters={counters}
          onReset={handleReset}
          onDelete={handleDelete}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
        />
      </main>
    </div>
  );
}

export default App;
