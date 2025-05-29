import { Newsletter } from "@/components/docs/newsletter";

import { Demo } from "./components/demo";
import { Feature } from "./components/feature";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { Topbar } from "./components/topbar";

export default function LandingPage() {
    return (
        <div>
            <div className="container-wrapper max-md:!px-4">
                <Topbar />
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
