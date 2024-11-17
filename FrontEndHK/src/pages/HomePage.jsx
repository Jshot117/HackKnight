import { Header } from '../components/Header.jsx';
import HypnosisSwirl from '../components/HypnosisSwirl.jsx';

export function HomePage() {
    return (
        <div >
            <Header />
            <h1>Welcome to the Home Page</h1>
            <p>This is the Home Page of the FrontEndHK application.</p>
            <div className = "flex-col ">
                <h1 className = "text-5xl">You Think I am COOL</h1>
                <HypnosisSwirl />
            </div>
        </div>
    )
}