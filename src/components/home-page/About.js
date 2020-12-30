import React from 'react'
import '../../styles/about-content.css'

export const About = () => {
    return (
        <div className="about-content">
            <div className="left">
                <img
                    src="https://image.freepik.com/foto-gratis/grupo-empresarios-mirando-plan-negocios-oficina_23-2147899904.jpg"
                    alt=""
                    className="image"
                />

            </div>

            <div className="right">
                <p className="title-about">ABOUT BUSINET</p>
                <h1>A Few Words About Us</h1>
                <p className="p">
                    Our consulting company is a leading firm of business
                <br /> managers and advisors with offices across the USA. <br /> We aim to provide you:
                </p>
                <div className="list">

                    <p className="item">Quality research & analysis</p>
                    <p className="item">Business advisory experience</p>
                    <p className="item"> Reliable company management</p>

                </div>
                <button className="button-about-home" >Read more</button>
            </div>
        </div>
    )
}
