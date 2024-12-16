import { Header } from '../components/Header.jsx';
import { Banner } from '../components/Banner.jsx';
import { Footer } from '../components/Footer.jsx';
import { Register } from '../components/Register.jsx';
import { CountDownTimer } from '../components/CountDownTimer.jsx';
import SwordLogo from "../assets/sword_hack_knight_transparentBG.png";
import logo from "../assets/logo.png";
import CodeForAll from "../assets/codeforall.png";

export function HomePage() {
    return (
        <>
            <Header />
            <div className="min-h-screen bg-gradient-to-br from-blue-100 to-yellow-200 flex flex-col items-center justify-center">
                <div className="flex flex-col gap-10 justify-center">
                    <div className="flex flex-col md:flex-row md:pt-10 justify-between items-center">
                        <Banner />
                        <img
                            src={SwordLogo}
                            alt="SwordLogo"
                            className="w-1/3 h-auto max-w-full md:w-1/6 p-2"
                        />
                        <CountDownTimer />
                    </div>
                    <Register />
                    <div className="flex">
                        <div className="flex rounded-full">
                            <img className="object-fill w-1/2 sm:w-1/4" src={logo} alt="Logo" />
                            <img className="object-fill w-1/2 sm:w-1/4" src={CodeForAll} alt="CodeForAll" />
                        </div>
                        <div>
                            <h1 className="text-4xl">
                                Welcome To Hack Knight 2025
                            </h1>
                            Our Hackathon is 
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}