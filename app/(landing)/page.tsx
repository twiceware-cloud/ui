import { Topbar } from "@/components/docs/layouts";
import { Newsletter } from "@/components/docs/newsletter";

import { Demo } from "./components/demo";
import { Feature } from "./components/feature";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";

export default function LandingPage() {
    return (
        <div>
            <div className="container-wrapper max-2xl:!px-4">
                <Topbar showLogo />
                <Hero />
                <Feature />
                <Demo />
                <div className="my-8 flex justify-center lg:my-16 2xl:my-24">
                    <Newsletter />
                </div>
            </div>
            <Footer />
        </div>
    );
}
