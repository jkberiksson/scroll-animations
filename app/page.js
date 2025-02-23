'use client';

import Header from './components/Header';
import Description from './components/Description';
import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';
import Carousel from './components/Carousel';
import Parallax from './components/Parallax';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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
        <div className='overflow-x-hidden'>
            <Navbar />
            <Header />
            <Description />
            <Carousel />
            <div className='h-screen bg-black flex items-center justify-center text-white'>Some more info</div>
            <Parallax />
            <Footer />
        </div>
    );
}
