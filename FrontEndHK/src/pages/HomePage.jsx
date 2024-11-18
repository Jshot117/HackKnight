import { Header } from '../components/Header.jsx';
import { Banner } from '../components/Banner.jsx';
import { CountDownTimer } from '../components/CountDownTimer.jsx';
import SwordLogo from "../assets/sword_hack_knight_transparentBG.png";

export function HomePage() {
    return (
        <>
            <Header />
            <div className="min-h-screen bg-gradient-to-br from-blue-100 to-yellow-200 flex flex-col items-center justify-center">
                <img
                    src={SwordLogo}
                    alt="SwordLogo"
                    className="w-1/3 md:w-1/6 p-2"
                />
                <div className="flex flex-col md:flex-row gap-5">
                    <Banner />
                    <CountDownTimer />
                </div>
            </div>
        </>
    )
}