import React, { useState } from 'react'

import "./Carousel.css"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
export const Carousel = ({ data }) => {
    const [slide, setSlide] = useState(0)

    return (
        <div className='carousel'>
            <BsArrowLeftCircleFill className='arrow arrow-left' />
            {
                data.map((item, idx) => {
                    return <img src={item.src} alt={item.src} key={idx} className={slide === idx ? "slide" : "slide-hidden"} />
                })
            }
            <BsArrowRightCircleFill className='arrow arrow-right' />
            <span className='indicators'>
                {data.map((_, idx) => {
                    return <button key={idx} onClick={null} className={slide === idx ? "indicator" : "indicator indicator-inactive"} ></button>
                })}
            </span>
        </div>
    )
}