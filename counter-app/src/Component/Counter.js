import React from 'react';

const Counter = (props) => {

    const activeClasses = () => {
        let countClass = 'badge m-2 px-2 bg-';
        props.counter.value <= 0 ? countClass += 'warning' : countClass += 'primary';
        return countClass;
    }
    
    return (
        <div>
            <h3 className='mt-3'>{props.children}</h3>
            <button onClick={()=> props.onDecrease(props.counter)} className='btn btn-secondary btn-sm'>Decrement</button>
            <span className={activeClasses()}>{props.counter.value === 0 ? 'Zero' : props.counter.value}</span>
            <button onClick={() => props.onIncrease(props.counter)} className='btn btn-secondary btn-sm'>Increment</button>
            <button onClick={() => props.onDelete(props.counter._id)} className='btn btn-danger btn-sm m-2'>Delete</button>
        </div>
    );
};

export default Counter;

/**
 * If any component all vcalue dependes on props value from its parents than it is a 
 * controlled component of parent components.
 * */