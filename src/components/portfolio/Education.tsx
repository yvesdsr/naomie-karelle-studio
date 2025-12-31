import { useEffect, useRef, useState } from "react";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Licence 3 Finances",
    institution: "Université Félix Houphouët-Boigny (UFHB)",
    location: "Abidjan",
    year: "En cours",
  },
  {
    degree: "Baccalauréat Série D",
    institution: "Collège Les Phalènes 1",
    location: "Yopougon",
    year: "2022",
  },
];

const Education = () => {
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
    <section ref={sectionRef} className="section-padding bg-secondary/30" id="education">
      <div className="container-narrow">
        <div 
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 text-center">
            Formation
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-12 rounded-full" />
        </div>

        <div className="space-y-6 max-w-2xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={edu.degree}
              className={`card-warm flex gap-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                  <span className="text-sm text-accent-foreground bg-accent/30 px-3 py-1 rounded-full">
                    {edu.year}
                  </span>
                </div>
                <p className="text-muted-foreground mt-1">{edu.institution}</p>
                <p className="text-sm text-muted-foreground">{edu.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
