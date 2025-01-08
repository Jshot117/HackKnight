import { Header } from '../components/Header.jsx';
import SponsorImage from '../assets/Hackathon Sponsor image.png';
import { Footer } from '../components/Footer.jsx';

export function SponsorsPage() {
    return (
        <div>
            <Header />
            <div className='flex flex-col items-center justify-center mt-32 py-14 md:mt-16 md:py-20'>
                <h1 className="py-2 font-bold text-center text-4xl">Current Sponsors & Partners</h1>
                <img
                    src={SponsorImage}
                    alt="SponsorImage"
                    className=" p-2">
                </img>
            </div>
            <Footer />
        </div>
    )
}