import React, { useState } from 'react'
import Card from './Card'
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const Testimonial = (props) => {
    let reviews=props.reviews;
    const [index, setIndex]=useState(0);
    function leftShiftHandler(){
        if(index-1<0){
            setIndex(reviews.length-1);
        }
        else{
            setIndex(index-1);
        }
    }
    function rightShiftHandler(){
        if(index+1>=reviews.length){
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }
    }
    function surpriceMeHandler(){
        let randomIndex = Math.floor(Math.random()*reviews.length);
        setIndex(randomIndex);
    }
    return (
    <div className='w-[85vw] h-[80vh] rounded-md md:w-[700px] bg-white flex flex-col
    justify-center items-center mt-10 p-10 mx-auto transition-all duration-700 hover:shadow-xl'>
        <Card review={reviews[index]}/>

        <div className='flex text-3xl mt-5 gap-5 text-violet-400 font-bold mx-auto'>
            <button 
            onClick={leftShiftHandler}
            className='cursor-pointer hover:text-violet-500'>
                <FaAngleDoubleLeft />
            </button>

            <button 
            onClick={rightShiftHandler}
            className='cursor-pointer hover:text-violet-500'>
                <FaAngleDoubleRight />
            </button>

        </div>

        <div className='mt-1'>
            <button 
            onClick={surpriceMeHandler}
            className='bg-violet-500 hover:bg-violet-500 transition-all duration-200
            cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'>
                Surprice Me
            </button>
        </div>
    </div>
    )
}

export default Testimonial
