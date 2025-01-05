import React from 'react'
import { useState } from 'react'

export const FAQQuestion = ({question, answer}) => {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div>
                <div className={`max-w-4xl w-full mx-auto p-4 rounded-lg shadow-md bg-gray-100 hover:bg-gray-200 ${isOpen ? 'border-2 border-gray-500' : 'border border-gray-300'}`}>
                    <div className="flex justify-between items-center cursor-pointer font-mono" onClick={() => setIsOpen(!isOpen)}>
                        <div className="text-black break-normal"> {question}</div>
                        <span>{isOpen ? "▲" : "▼"}</span>
                    </div>
                </div>
                {isOpen && <div className=" text-black max-w-2xl md:max-w-4xl w-full mx-auto p-4 border border-gray-300 rounded-lg shadow-md">{answer}</div>}
        </div>
    )
}