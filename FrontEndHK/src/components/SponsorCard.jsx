import React from "react";

export function SponsorCard({
  image_url,
  description,
  sponsor_link,
  name,
  tier,
}) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
      <a href={sponsor_link || "#"} target="_blank" rel="noopener noreferrer">
        <div className="h-[12rem] overflow-hidden flex items-center justify-center mb-4">
          <img
            src={image_url}
            // alt={`${name} Logo`}
            className="object-contain h-full w-full"
          />
        </div>
      </a>
      <h3 className="text-xl font-extrabold text-gray-800">{name}</h3>
      {tier > 1 && description && (
        <p className="text-gray-600 mt-2 w-[70%]">{description}</p>
      )}
    </div>
  );
}
