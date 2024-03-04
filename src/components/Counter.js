import React from 'react'
import { IMAGES } from '../constants/theme'
import CountUp from 'react-countup'





const counterBox = [
    { title: 'Nuestros', title2: 'Socios',number:'4' },
    { title: 'Paises', title2: 'Latinoamericanos',number:'4' },
    { title: 'Planes', title2: 'Alimenticios' ,number:'50'},
]
const Counter = () => {
    return (

        <div className="container">
            <div className="row align-items-start">
                <div className="col-lg-8 col-md-10">
                    <div className="row counter-inner-3 wow fadeInUp" data-wow-delay="0.6s">
                        {counterBox.map((item, ind) => (
                            <div className="col-4 text-center" key={ind}>
                                <div className="counter-box">
                                    <h3 className="title counter"><CountUp start={0} end={item.number} duration={10}/> </h3>
                                    <p>{item.title}<br />{item.title2}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
                <div className="col-lg-4 col-md-2 pt-2 d-md-block d-none">
                    <div className="counter-media move-1">
                        <img src={IMAGES.counterPattern} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter