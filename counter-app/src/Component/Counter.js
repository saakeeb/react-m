import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Counter = (props) => {

    const activeClasses = () => {
        let countClass = 'badge m-2 px-2 bg-';
        props.counter.value <= 0 ? countClass += 'warning' : countClass += 'primary';
        return countClass;
    }

    return (
        <div>
            <Container className='w-25'>
                <h3 className='mt-3'>{props.children}</h3>
                <Row xs={2}>
                    <Col>
                        <span className={activeClasses()}>
                            {props.counter.value === 0 ? 'Zero' : props.counter.value}
                        </span>
                    </Col>
                    <Col >
                        <button onClick={() => props.onIncrease(props.counter)} className='btn btn-secondary btn-sm'>+</button>
                        <button
                            onClick={() => props.onDecrease(props.counter)}
                            className='btn btn-secondary btn-sm ms-2'
                            disabled={props.counter.value <= 0 ? 'disabled' : ''}
                        >
                            -
                        </button>
                        <button onClick={() => props.onDelete(props.counter._id)} className='btn btn-danger btn-sm m-2'>X</button>
                    </Col>
                </Row>
            </Container>
            
            
        </div>
    );
};

export default Counter;

/**
 * If any component all vcalue dependes on props value from its parents than it is a 
 * controlled component of parent components.
 * */