import { Helmet } from "react-helmet-async";
import Navigation from "@/components/portfolio/Navigation";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import ContactInfo from "@/components/portfolio/Contact";
import SocialLinks from "@/components/portfolio/SocialLinks";
import Skills from "@/components/portfolio/Skills";
import Languages from "@/components/portfolio/Languages";
import Education from "@/components/portfolio/Education";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import Performance from "@/components/portfolio/Performance";
import ContactForm from "@/components/portfolio/ContactForm";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Naomie Karelle Agnissan | Community Manager & UGC Creator</title>
        <meta 
          name="description" 
          content="Community Manager, UGC Creator et formatrice de contenus lifestyle basée à Abidjan. Stratégies de contenu engageantes, montage vidéo professionnel et gestion des réseaux sociaux." 
        />
        <meta 
          name="keywords" 
          content="Community Manager, UGC Creator, Content Creator, Social Media, TikTok, Instagram, Abidjan, Côte d'Ivoire" 
        />
        <meta property="og:title" content="Naomie Karelle Agnissan | Community Manager & UGC Creator" />
        <meta 
          property="og:description" 
          content="Community Manager, UGC Creator et formatrice de contenus lifestyle. Stratégies de contenu engageantes pour les réseaux sociaux." 
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <Hero />
          <About />
          <ContactInfo />
          <SocialLinks />
          <Skills />
          <Languages />
          <Education />
          <Experience />
          <Projects />
          <Performance />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
