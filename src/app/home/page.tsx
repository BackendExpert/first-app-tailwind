import CallAction from "./CallAction";
import Community from "./Community";
import FAS from "./FAS";
import Feature from "./Features";
import HeroSection from "./HeroSection";
import SuccessStories from "./SuccessStories";
import Works from "./Works";

export default function HomePage() {
    return (
        <div className="">
            <HeroSection />
            <Feature />
            <SuccessStories />
            <Community />
            <Works />
            <CallAction />
            <FAS />
        </div>
    )
}