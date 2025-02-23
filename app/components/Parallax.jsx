import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const images = [
    '/images/1.jpg',
    '/images/2.jpg',
    '/images/3.jpg',
    '/images/4.jpg',
    '/images/5.jpg',
    '/images/6.jpg',
    '/images/7.jpg',
    '/images/8.jpg',
    '/images/9.jpg',
    '/images/10.jpg',
    '/images/11.jpg',
    '/images/5.jpg',
];

export default function Parallax() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    // Adjusting the values so that the first column moves up and second down, and so on
    const y1 = useTransform(scrollYProgress, [0, 1], [0, 1000]); // First column moves up
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 2000]); // Second column moves down
    const y3 = useTransform(scrollYProgress, [0, 1], [0, 1200]); // Third column moves up
    const y4 = useTransform(scrollYProgress, [0, 1], [0, 2000]); // Fourth column moves down

    return (
        <div ref={ref} className='h-[175vh] flex gap-4 p-4 overflow-hidden'>
            <Column images={[images[0], images[1], images[2]]} y={y1} height={'-20%'} />
            <Column images={[images[3], images[4], images[5]]} y={y2} height={'-50%'} />
            <Column images={[images[6], images[7], images[8]]} y={y3} height={'-20%'} />
            <Column images={[images[9], images[10], images[11]]} y={y4} height={'-65%'} />
        </div>
    );
}

function Column({ images, y, height }) {
    return (
        <motion.div
            className='w-1/4 min-w-[250px] h-full flex flex-col gap-4 overflow-hidden relative'
            style={{
                top: height,
                y,
            }}>
            {images.map((image, index) => {
                return (
                    <div className='bg-red-400 h-full w-full relative rounded-4xl overflow-hidden' key={index}>
                        <Image
                            src={image}
                            alt={`Image ${index}`}
                            fill
                            className='object-cover'
                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        />
                    </div>
                );
            })}
        </motion.div>
    );
}
