import React, { useState } from 'react'
import '../styles/slider.css'
import "../styles/App.css"
import BtnSlider from './BtnSlider'
import dataSlider from '../data/data.json'
import Component from './Component'

export default function Slider() {
    // const videos = [video1, video2, video3, video4, video5];

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if (slideIndex !== dataSlider.scrolldata.length) {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === dataSlider.scrolldata.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            console.log(dataSlider.scrolldata.length)
            setSlideIndex(dataSlider.scrolldata.length)
        }
    }

    return (
        <div className="container-slider">
            {dataSlider.scrolldata.map((obj, index) => {
                return (
                    <div
                        key={index}
                        className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <Component allData={obj}/>
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />
        </div>
    )
}