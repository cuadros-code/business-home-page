import React from 'react'
import { InitialBanner } from './InitialBanner'
import { NavBar } from './NavBar'
import { Services } from './Services'
import { About } from './About'
import { Footer } from '../Footer'
import '../../styles/nav-bar.css'

export const HomeScreen = () => {

    return (
        <div>
            <NavBar />
            <InitialBanner />
            <Services />
            <About />
            <Footer />
        </div>
    )
}
