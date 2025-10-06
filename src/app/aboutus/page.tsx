import WebSiteLayout from "@/layouts/WebsiteLayout";
import HeroSection from "./herosection";

export default function Page() {
    return (
        <WebSiteLayout >
            <div className="">
                About us
                <HeroSection />
            </div>
        </WebSiteLayout>
    )
}