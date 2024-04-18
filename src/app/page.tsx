import { About, Footer, Header } from "@/components/organisms";

import { SolutionOrganisms } from "@/components/organisms";
import Intro from "@/components/organisms/intro";

export default function Home() {
  return (
    <>
      <Header />
      <Intro />
      <SolutionOrganisms />
      <About />
      <Footer />
    </>
  );
}
