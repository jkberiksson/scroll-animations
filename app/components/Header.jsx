'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Header() {
    const container = useRef(null);

    // Scroll progress
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end start'],
    });

    // Parallax transforms
    const textX = useTransform(scrollYProgress, [0, 1], [-750, -1500]);
    const imageY = useTransform(scrollYProgress, [0, 1], [0, 300]); // Parallax effect for image

    return (
        <header ref={container} className='relative h-screen w-screen flex items-end overflow-hidden'>
            <motion.div style={{ y: imageY }} className='absolute h-screen w-screen'>
                <Image src='/images/1.jpg' fill alt='Picture of the author' className='object-cover' />
            </motion.div>

            {/* Moving Text */}
            <motion.div style={{ x: textX }} className='flex gap-14'>
                <p className='text-white text-8xl lg:text-[200px]'>Freelance</p>
                <p className='text-white text-8xl lg:text-[200px]'>Developer</p>
                <p className='text-white text-8xl lg:text-[200px]'>-</p>
                <p className='text-white text-8xl lg:text-[200px]'>Freelance</p>
                <p className='text-white text-8xl lg:text-[200px]'>Developer</p>
            </motion.div>
        </header>
    );
}
