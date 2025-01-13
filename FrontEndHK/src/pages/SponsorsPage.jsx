import { Header } from "../components/Header.jsx";
// import SponsorImage from "../assets/Hackathon Sponsor image.png";
import { Footer } from "../components/Footer.jsx";
// import { Sponsor } from "../components/Sponsor.jsx";
import sponsorData from "../assets/sponsors.json";
import { SponsorTable } from "../components/SponsorTable.jsx";

export function SponsorsPage() {
  return (
    <div>
      <Header />
      <div className="py-10 px-4 bg-gradient-to-b from-zinc-200 to-sky-200">
        <div className="text-center mb-10 mt-20">
          <p className="text-lg font-extrabold text-gray-600">Our</p>
          <h2 className="text-3xl font-extrabold text-gray-800">
            Hack Knight Sponsors
          </h2>
        </div>
        <div className="flex items-center justify-center">
          <SponsorTable sponsors={sponsorData.sponsors} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
