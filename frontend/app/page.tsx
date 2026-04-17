import Link from "next/link";
import Hero from "./(components)/(home)/HeroComponent";
import AboutSection from "./(components)/(home)/AboutSection";
import SolimouvSection from "./(components)/(home)/SolimouvSection";
import ContactSection from "./(components)/(home)/ContactSection";

export default function Home() {
  return (
    <main>
      <Hero/>
      <AboutSection/>
      <SolimouvSection/>
      <ContactSection/>
    </main>
  );
}