import { delay } from 'motion';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export default function Description() {
    const ref = useRef(null);
    const isInView = useInView(ref);

    const phrase1 =
        'Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.';

    const slideUp = {
        initial: {
            y: '100%',
        },
        open: (i) => ({
            y: '0%',
            transition: { duration: 0.5, delay: 0.01 * i },
        }),
        closed: {
            y: '100%',
        },
    };

    const opacity = {
        initial: {
            opacity: 0,
        },
        open: {
            opacity: 1,
            transition: { duration: 0.5 },
        },
        closed: {
            opacity: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <div className='h-[70vh] w-[75vw] mx-auto flex items-center'>
            <div className='flex flex-col lg:flex-row justify-between gap-20'>
                <div ref={ref} className='text-4xl flex-2'>
                    <p>
                        {phrase1.split(' ').map((letter, index) => {
                            return (
                                <span className='inline-block overflow-hidden' key={index}>
                                    <motion.span
                                        className='inline-block mr-[5px]'
                                        variants={slideUp}
                                        custom={index}
                                        animate={isInView ? 'open' : 'closed'}>
                                        {letter}
                                    </motion.span>
                                </span>
                            );
                        })}
                    </p>
                </div>
                <motion.p className='text-lg flex-1' variants={opacity} animate={isInView ? 'open' : 'closed'}>
                    The combination of my passion for design, code & interaction positions me in a unique place in the web design world.
                </motion.p>
            </div>
        </div>
    );
}
