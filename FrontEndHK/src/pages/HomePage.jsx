import { Header } from '../components/Header.jsx';
import { Banner } from '../components/Banner.jsx';
import { CountDownTimer } from '../components/CountDownTimer.jsx';

export function HomePage() {
    return (
        <>
            <Header />
            <div className="min-h-screen bg-gradient-to-br from-blue-100 to-yellow-200 flex flex-col items-center justify-center">
                <div className="flex flex-col md:flex-row gap-5">
                    <Banner />
                    <CountDownTimer />
                </div>
            </div>
        </>
    )
}