'use client'

import WebSiteLayout from "@/layouts/WebsiteLayout"
import StepsCreateAccount from "./StepsCreateAccount"

export default function CreateAccount() {
    return (
        <WebSiteLayout>
            <section className="relative min-h-screen flex items-center justify-center bg-black/40 px-4 text-white overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage:
                            "url('https://wallpapercave.com/wp/wp11949847.jpg')",
                    }}
                />
                {/* Overlay for better contrast */}
                <div className="absolute inset-0 bg-black/0" />


                <StepsCreateAccount />
                

            </section>
        </WebSiteLayout>
    )
}