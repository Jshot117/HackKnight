import { Header } from '../components/Header.jsx';
import HypnosisSwirl from '../components/HypnosisSwirl.jsx';
export function AboutPage() {
    return (
        <div>
            <Header />
            <div className="flex-col mt-32 py-14 md:mt-16 md:py-5">
                <h1 className="text-5xl text-center">You want to Join this hackathon very badly o_0</h1>
                <div className="md:ml-6 border-black border-5 bg-black m-2 p-5 text-white rounded-lg">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSf2nm5CsF0Q69T21WG_OPl274hn3-ghCfkebsCxoStX7h_zkA/viewform">
                        <button className="md:text-xl w-full text-center"> REGISTER NOW </button>
                    </a>
                </div>
                <HypnosisSwirl />
            </div>
        </div>
    )
}