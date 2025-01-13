import React from "react";
import { SponsorCard } from "./SponsorCard";

export function SponsorTable({ sponsors }) {
  const tierGroups = {
    1: [],
    2: [],
    3: [],
    4: [],
  };

  // Group sponsors by tier
  sponsors.forEach((sponsor) => {
    tierGroups[sponsor.tier].push(sponsor);
  });

  return (
    <section id="sponsors" className="py-10 bg-gray-50 rounded-xl">
      <div className="container mx-auto px-6">
        <div className="space-y-12">
          {tierGroups[4].length > 0 && (
            <div>
              <div className="grid grid-cols-1 gap-6">
                {tierGroups[4].map((sponsor, index) => (
                  <SponsorCard key={`tier-4-${index}`} {...sponsor} />
                ))}
              </div>
            </div>
          )}

          {tierGroups[3].length > 0 && (
            <div>
              <div className="grid grid-cols-1 gap-6">
                {tierGroups[3].map((sponsor, index) => (
                  <SponsorCard key={`tier-3-${index}`} {...sponsor} />
                ))}
              </div>
            </div>
          )}

          {tierGroups[2].length > 0 && (
            <div>
              <div className="grid grid-cols-2 gap-6">
                {tierGroups[2].map((sponsor, index) => (
                  <SponsorCard key={`tier-2-${index}`} {...sponsor} />
                ))}
              </div>
            </div>
          )}

          {tierGroups[1].length > 0 && (
            <div>
              <div className="grid grid-cols-3 gap-6">
                {tierGroups[1].map((sponsor, index) => (
                  <SponsorCard key={`tier-1-${index}`} {...sponsor} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
