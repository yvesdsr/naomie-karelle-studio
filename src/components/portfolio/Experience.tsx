import { useEffect, useRef, useState } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Community Manager",
    company: "Celik Hotel",
    period: "Août 2025 → Décembre 2025",
    description: "Gestion des réseaux sociaux et création de contenu pour l'hôtel.",
  },
  {
    title: "Commercial digital",
    company: "Revvo Africa",
    period: "Juillet 2025 → Décembre 2025",
    description: "Développement commercial et stratégie digitale.",
  },
  {
    title: "UGC Creator",
    company: "Tuzzo Africa",
    period: "Octobre 2024 → Août 2025",
    description: "Création de contenus authentiques et engageants pour la marque.",
  },
];

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-background" id="experience">
      <div className="container-narrow">
        <div 
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 text-center">
            Expériences professionnelles
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-12 rounded-full" />
        </div>

        <div className="max-w-2xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={`${exp.company}-${exp.title}`}
              className={`timeline-item transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="card-warm ml-4">
                <div className="flex items-start gap-3 mb-2">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                </div>
                <p className="text-sm text-accent-foreground bg-accent/30 inline-block px-3 py-1 rounded-full mb-3">
                  {exp.period}
                </p>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
