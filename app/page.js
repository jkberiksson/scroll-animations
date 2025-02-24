'use client';

import Header from './components/Header';
import Description from './components/Description';
import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';
import Carousel from './components/Carousel';
import Parallax from './components/Parallax';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Zoom from './components/Zoom';

export default function Home() {
    useEffect(() => {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    return (
        <div>
            <Navbar />
            <div className='overflow-hidden'>
                <Header />
                <Description />
                <Carousel />
            </div>
            <Zoom />
            <Parallax />
            <Footer />
        </div>
    );
}
