import { Feature } from "./components/feature";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { Topbar } from "./components/topbar";

export default function LandingPage() {
    return (
        <div>
            <div className="container-wrapper">
                <Topbar />
                <Hero />
                <Feature />
            </div>
            <Footer />
        </div>
    );
}
