import React from 'react';

export function EventGallery({ images }) {
    return (
        <div className="w-full py-8 px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Previous Event Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        <img
                            src={image.src} 
                            alt={image.caption || `Event image ${index + 1}`}
                            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        {image.caption && (
                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <p className="text-sm">{image.caption}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

