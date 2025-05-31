import FeaturesSection from "@/components/home-sections/features-section/features-section";
import HeroSection from "@/components/home-sections/hero-section/hero-section";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <HeroSection />
      <FeaturesSection />
    </Fragment>
  );
}
