"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function PilotStats() {
    const cards = [
        { value: 50, title: "Acres Under Pilot" },
        { value: 200, title: "Farmers Onboarded" },
        { value: 85, title: "Advisory Accuracy" },
    ];
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <div
            ref={ref}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-4 md:px-16 py-6"
        >
            {cards.map((card, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="flex flex-col items-center gap-4  p-4 "
                >
                    <AnimatedCounter
                        value={card.value}
                        isInView={isInView}
                        suffix={card.value === 200 ? "+" : card.value === 85 ? "%" : ""}
                    />
                    <h3 className="text-sm sm:text-xl font-bold text-center">
                        {card.title}
                    </h3>
                </motion.div>
            ))}
        </div>
    );
}

function AnimatedCounter({ value, isInView, suffix }) {
    const [count, setCount] = useState(0);
    const start = useRef(null);

    useEffect(() => {
        if (!isInView) return;

        let animationFrame;
        const duration = 1500; // 1.5s
        const startTime = performance.now();

        const animate = (time) => {
            const progress = Math.min((time - startTime) / duration, 1);
            setCount(Math.floor(progress * value));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [isInView, value]);

    return (
        <div className="rounded-full bg-[#2AB673] flex items-center justify-center w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] text-white text-2xl sm:text-4xl font-bold">
            {count}
            {progressComplete(count, value) ? suffix : ""}
        </div>
    );
}

function progressComplete(count, value) {
    return count >= value;
}

export default PilotStats;
