import React from 'react'
import { useState } from 'react'
import {motion, AnimatePresence} from 'framer-motion'

export const FAQQuestion = ({question, answer}) => {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className = "mb-4">
                <div className={`max-w-4xl w-full mx-auto p-4 rounded-lg shadow-md bg-gray-100 hover:bg-gray-200 ${isOpen ? 'border-2 border-gray-500' : 'border border-gray-300'}`}>
                    <div className="flex justify-between items-center cursor-pointer font-mono" onClick={() => setIsOpen(!isOpen)}>
                        <div className="text-black break-normal"> {question}</div>
                        <span>{isOpen ? "▲" : "▼"}</span>
                    </div>
                </div>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ maxHeight: 0, opacity: 0 }}
                            animate={{ maxHeight: 500, opacity: 1 }}
                            transition={{
                            maxHeight: { duration: 0.3, ease: 'easeInOut' },
                            opacity: { duration: 0.3, ease: 'easeInOut' },
                            }}
                            className="overflow-hidden bg-gray-100 p-4 rounded-md"
                        >
                            <p>{answer}</p>
                        </motion.div>
                    )}
                </AnimatePresence>
        </div>
    )
}