import { Header } from '../components/Header.jsx';
import HypnosisSwirl from '../components/HypnosisSwirl.jsx';
export function AboutPage() {
    return (
        <div>
            <Header />
            <div className="flex-col mt-32 py-14 md:mt-16 md:py-5">
                <h1 className="text-5xl text-center">You want to Join this hackathon very badly o_0</h1>
                <div className="md:ml-6 border-black border-5 bg-black m-2 p-5 text-white rounded-lg">
                    {/* <a href="https://docs.google.com/forms/d/e/1FAIpQLSfQ6cIO6YuTWfyfUZHcJx7c3UiRbZrRPaRJYRRusfFSgCDSVQ/viewform?usp=header">
                        <button className="md:text-xl"> REGISTER NOW </button>
                    </a> */}
                    Registration is coming soon!
                </div>
                <HypnosisSwirl />
            </div>
        </div>
    )
}