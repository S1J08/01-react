import Header from "./components/Header/Header.jsx";
import TeachingSecton from "./components/TeachingSection.jsx";
import DifferencesSection from "./components/DifferencesSection.jsx";
import IntroSection from "./components/IntroSection.jsx";
import TubSection from "./components/TubSection.jsx";
import FeedBackSection from "./components/FeedBackSection.jsx";
import { useState } from "react";

export default function App() {
    const [tab, setTab] = useState("main");

    return (
        <>
            <Header />
            <main>
                <IntroSection />
                <TubSection active={tab} xui={setTab} />

                {tab === "main" && (
                    <>
                        <TeachingSecton />
                        <DifferencesSection />
                    </>
                )}

                {tab === "feedback" && <FeedBackSection />}
            </main>
        </>
    );
}
