import { StickyBackground } from "@/components/molecures";
import {
  About,
  FAQ,
  Footer,
  Header,
  Intro,
  Partners,
  Portfolio,
  SolutionOrganisms,
  Teams,
} from "@/components/organisms";

export default function Home() {
  return (
    <>
      <StickyBackground url="/images/stock_bg_2.jpg" />
      <div className="z-10">
        <Header />
        <Intro />
        <SolutionOrganisms />
        <About />
        <Portfolio />
        <Teams />
        <FAQ />
        <Partners />
        <Footer />
      </div>
    </>
  );
}
