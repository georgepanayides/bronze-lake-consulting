"use client";

import { motion } from "framer-motion";

export const FloatingShape = () => {
    return (
        <motion.div
            className="w-64 h-64 bg-bl-bronze-gradient rounded-full blur-3xl opacity-30"
            animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
                x: [0, 50, 0],
            }}
            transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
            }}
        />
    );
};
