import { useEffect, useRef, useState } from "react";

const languages = [
  { code: "🇫🇷", name: "Français", level: "Langue maternelle", percentage: 100 },
  { code: "🇬🇧", name: "Anglais", level: "Débutant", percentage: 25 },
];

const Languages = () => {
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
    <section ref={sectionRef} className="section-padding bg-background" id="languages">
      <div className="container-narrow">
        <div 
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 text-center">
            Langues
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-12 rounded-full" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 max-w-2xl mx-auto">
          {languages.map((lang, index) => (
            <div
              key={lang.name}
              className={`card-warm transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl">{lang.code}</span>
                <div>
                  <h3 className="font-semibold text-foreground">{lang.name}</h3>
                  <p className="text-sm text-muted-foreground">{lang.level}</p>
                </div>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-accent to-rose-gold rounded-full transition-all duration-1000 ease-out"
                  style={{ 
                    width: isVisible ? `${lang.percentage}%` : '0%',
                    transitionDelay: `${(index + 1) * 150 + 300}ms`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
