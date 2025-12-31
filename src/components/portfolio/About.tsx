import { useEffect, useRef, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-background" id="about">
      <div className="container-narrow">
        <div 
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 text-center">
            À propos
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-12 rounded-full" />
        </div>

        <div 
          className={`card-warm transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
            <p>
              <span className="font-semibold text-primary">Community Manager, UGC, créatrice et formatrice de contenus lifestyle</span>, 
              je conçois et pilote des stratégies de contenus engageantes pour les réseaux sociaux.
            </p>
            
            <p>
              Je crée des <span className="text-accent-foreground font-medium">visuels impactants</span>, 
              des <span className="text-accent-foreground font-medium">vidéos authentiques</span> et 
              des formats adaptés aux tendances digitales afin de renforcer la visibilité et l'image de marque 
              des entreprises et des créateurs.
            </p>
            
            <p>
              Passionnée par le digital, la communication et les médias sociaux, j'accompagne les marques dans 
              le développement de <span className="font-medium">communautés actives</span>, la création de 
              contenus performants et la mise en place de stratégies d'engagement durables.
            </p>
            
            <p className="border-l-4 border-accent pl-6 italic text-muted-foreground">
              Étudiante en finances, j'allie créativité et sens de l'analyse pour proposer des actions 
              de communication orientées résultats et performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
