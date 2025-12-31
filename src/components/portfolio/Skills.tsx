import { useEffect, useRef, useState } from "react";
import { 
  Users, 
  Image, 
  Video, 
  Sparkles, 
  Target, 
  BarChart3, 
  BookOpen, 
  Palette, 
  Scissors, 
  TrendingUp, 
  Award, 
  Calendar 
} from "lucide-react";

const skills = [
  { name: "Community management", icon: Users },
  { name: "Création de contenu social media", icon: Image },
  { name: "Montage vidéo professionnel", icon: Video },
  { name: "UGC (User Generated Content)", icon: Sparkles },
  { name: "Stratégie de contenu", icon: Target },
  { name: "Analyse de performances", icon: BarChart3 },
  { name: "Storytelling digital", icon: BookOpen },
  { name: "Canva (expert)", icon: Palette },
  { name: "CapCut (expert)", icon: Scissors },
  { name: "Tendances TikTok & Instagram", icon: TrendingUp },
  { name: "Branding & image de marque", icon: Award },
  { name: "Planification éditoriale", icon: Calendar },
];

const Skills = () => {
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
    <section ref={sectionRef} className="section-padding bg-secondary/30" id="skills">
      <div className="container-wide">
        <div 
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 text-center">
            Compétences
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-12 rounded-full" />
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className={`skill-tag transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <Icon className="w-4 h-4" />
                <span>{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
