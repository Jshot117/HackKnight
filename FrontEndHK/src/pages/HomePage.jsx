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
                <div className="flex flex-col  mt-10">
                    <div className="min-h-screen items-center md:mt-32 ">
                        <div className="flex flex-col md:flex-row mt-10 mb-10 justify-between items-center">
                            <Banner />
                            <img
                                src={SwordLogo}
                                alt="SwordLogo"
                                className="w-1/3 h-auto max-w-full md:w-1/6 p-2"
                            />
                            <CountDownTimer />
                        </div>
                        <Register />
                    </div>
                    <div className="flex flex-col md:flex-row items-center ">
                        <div className="justify-items-center md:flex ">
                            <div className="flex gap-4">
                                <img className="object-fill max-w-32 md:max-w-none md:w-2/6 rounded-3xl" src={logo} alt="Logo" />
                                <img className="object-fill max-w-32 md:max-w-none md:w-2/6  rounded-3xl" src={CodeForAll} alt="CodeForAll" />
                            </div>
                            <div className="text-center max-w-xs md:max-w-xl">
                                <h1 className="mb-2 text-center text-3xl md:text-5xl">
                                    Welcome To our Spring Hack Knight 
                                </h1>
                                <p className="text-sm md:text-xl text-clip overflow-hidden">
                                    Hack Knight is a 48-hour hackathon where students from all over the world come together to create innovative projects. This year, we are excited to announce that we are partnering with Code For All to bring you an even bigger and better event. Join us for a weekend of coding, learning, and fun!
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}