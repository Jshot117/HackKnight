import { Header } from '../components/Header.jsx';
import { Banner } from '../components/Banner.jsx';
import { Footer } from '../components/Footer.jsx';
import { Register } from '../components/Register.jsx';
import { CountDownTimer } from '../components/CountDownTimer.jsx';
import { EventGallery } from '../components/EventGallery.jsx';
import SwordLogo from "../assets/sword_hack_knight_transparentBG.png";
import logo from "../assets/logo.png";
import CodeForAll from "../assets/codeforall.png";
import image1 from "../assets/Hackathon Gallery/DaniandSophia.jpg";
import image2 from "../assets/Hackathon Gallery/JustinHandingSomething.jpg";
import image3 from "../assets/Hackathon Gallery/WideShotManyPeople.jpg";

export function HomePage() {
    return (
        <>
            <Header />
            <div className="min-h-screen bg-gradient-to-br from-blue-100 to-yellow-200 flex flex-col items-center justify-center">
                <div className="flex flex-col">
                    <div className="min-h-fit items-center mt-32 py-14 md:mt-16 md:py-20 ">
                        <div className="flex flex-col md:flex-col mt-10 mb-10 justify-between items-center md:space-y-10">
                            <Banner />
                            {/* <img
                                src={SwordLogo}
                                alt="SwordLogo"
                                className="w-1/3 h-auto max-w-full md:w-1/6 p-2"
                            /> */}
                            <CountDownTimer />
                            <Register />
                        </div>
                        
                    </div>
                    <div className="flex-row my-10 md:my-32 md:flex-row items-center md:space-y-10 ">
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
                        <EventGallery
                        images={[
                            {
                                src : image1,
                                caption: "Students working on their project"
                            },
                            {
                                src : image2,
                                caption: "Justin Espinal handing over an award"
                            },
                            {
                                src : image3,
                                caption: "Wide shot of event at lunch time"
                            }
                        ]} />
                    </div>
                    
                </div>
            </div>
            <Footer />
        </>
    )
}