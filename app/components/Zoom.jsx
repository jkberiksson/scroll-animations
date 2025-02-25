import Image from 'next/image';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { useRef } from 'react';

export default function Zoom() {
    const ref = useRef(null);
    const slideRef = useRef(null);
    const isInView = useInView(slideRef);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end end'],
    });

    const height = useTransform(scrollYProgress, [0, 1], ['40vh', '100vh']);
    const width = useTransform(scrollYProgress, [0, 1], ['40vw', '100vw']);

    return (
        <div ref={ref} className='h-[200vh] relative'>
            <div className='h-screen w-full sticky top-0 flex items-center justify-center text-black'>
                <div ref={slideRef} className='absolute top-24 overflow-hidden w-[80%]'>
                    <motion.h1
                        animate={{ y: isInView ? 0 : '100%' }}
                        transition={{ duration: 0.8 }}
                        className='text-center text-xl md:text-4xl'>
                        Blending creativity, code, and interaction to craft engaging digital experiences.
                    </motion.h1>
                </div>

                <motion.div className='h-[40dvh] w-[40dvw] relative' style={{ height, width }}>
                    <Image
                        src='/images/11.jpg'
                        fill
                        alt='Zoom'
                        className='object-cover'
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    />
                </motion.div>
            </div>
        </div>
    );
}
