import Community from "./Community";
import Feature from "./Features";
import HeroSection from "./HeroSection";
import SuccessStories from "./SuccessStories";

export default function HomePage() {
    return (
        <div className="">
            <HeroSection />
            <Feature />
            <SuccessStories />
            <Community />
        </div>
    )
}