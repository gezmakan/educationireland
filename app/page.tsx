import {
  Hero,
  WhyIreland,
  SpecialOffer,
  SuccessStories,
  Stats,
  Testimonials,
  FAQ,
  ContactFormSection,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyIreland />
      <SpecialOffer />
      <SuccessStories />
      <Stats />
      <Testimonials />
      <FAQ />
      <ContactFormSection />
      <Footer />
    </main>
  );
}
