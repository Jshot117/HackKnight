import { Header } from "../components/Header.jsx";
import SponsorImage from "../assets/Hackathon Sponsor image.png";
import { Footer } from "../components/Footer.jsx";

export function SponsorsPage() {
  return (
    <div>
      <Header />
      <div className="min-h-screen flex flex-col items-center justify-center ">
        <h1 className="font-bold text-center text-4xl">
          Current Sponsors & Partners
        </h1>
        {/* <img src={SponsorImage} alt="SponsorImage" className=" p-2"></img> */}
      </div>
      <Footer />
    </div>
  );
}
