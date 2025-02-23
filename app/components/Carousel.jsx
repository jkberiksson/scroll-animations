import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const firstImages = ['/images/1.jpg', '/images/2.jpg', '/images/3.jpg', '/images/4.jpg'];
const secondImages = ['/images/5.jpg', '/images/6.jpg', '/images/7.jpg', '/images/8.jpg'];

export default function Carousel() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

    return (
        <div ref={ref} className='h-[80vh] w-[120vw] flex gap-10 flex-col justify-center'>
            <div className='left-[-10vw] relative'>
                <Slider images={firstImages} x={x1} />
            </div>
            <div className='left-[-10vw] relative'>
                <Slider images={secondImages} x={x2} />
            </div>
        </div>
    );
}

function Slider({ images, x }) {
    return (
        <motion.div style={{ x }} className='flex justify-between gap-4 w-full'>
            {images.map((image, index) => (
                <div key={index} className='relative flex justify-center items-center w-full min-w-[250px] h-[300px] bg-gray-200'>
                    <div className='relative w-[80%] h-[80%]'>
                        <Image
                            src={image}
                            alt={`Image ${index}`}
                            fill
                            objectFit='cover'
                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        />
                    </div>
                </div>
            ))}
        </motion.div>
    );
}
