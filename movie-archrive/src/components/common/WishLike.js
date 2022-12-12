
import React from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const WishLike = (props) => {
    // console.log('props', props);
    return (
        <div
            onClick={() => props.onClick(props.movie)}
            className="clickable"
            
        >
            {
                props.movie.loveIcon ? <AiFillHeart /> : <AiOutlineHeart />
            }
        </div>
    );
};

export default WishLike;