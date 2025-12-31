import { useEffect, useRef, useState } from "react";
import { Eye, Users, Heart, MessageCircle, Share2, Clock, Diamond, Gift } from "lucide-react";
import stats1 from "@/assets/stats-1.jpeg";
import stats2 from "@/assets/stats-2.jpeg";
import stats3 from "@/assets/stats-3.jpeg";
import stats4 from "@/assets/stats-4.jpeg";

const tiktokWeekStats = [
  { label: "Vues", value: "116K", change: "+29%", icon: Eye },
  { label: "Followers", value: "551", change: "+6%", icon: Users },
  { label: "Likes", value: "4 077", change: "+41%", icon: Heart },
];

const periodStats = [
  { label: "Vues de publication", value: "84K", icon: Eye },
  { label: "Vues de profil", value: "1 604", icon: Users },
  { label: "Likes", value: "2 962", icon: Heart },
  { label: "Commentaires", value: "73", icon: MessageCircle },
  { label: "Partages", value: "206", icon: Share2 },
];

const liveStats = [
  { label: "Vues totales", value: "25,4K", icon: Eye },
  { label: "Durée de live", value: "5h", icon: Clock },
  { label: "Nouveaux followers", value: "632", icon: Users },
  { label: "Commentaires", value: "2,1K", icon: MessageCircle },
  { label: "Diamants", value: "3", icon: Diamond },
  { label: "Donateurs", value: "2", icon: Gift },
];

const Performance = () => {
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
    <section ref={sectionRef} className="section-padding bg-secondary/30" id="performance">
      <div className="container-wide">
        <div 
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 text-center">
            Résultats & Impact
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-4 rounded-full" />
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            Des performances mesurables qui démontrent l'efficacité de mes stratégies de contenu
          </p>
        </div>

        {/* TikTok 1ère semaine */}
        <div className="mb-12">
          <h3 
            className={`font-serif text-xl md:text-2xl text-foreground mb-6 text-center transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            TikTok — 1ère semaine
          </h3>
          <div className="grid gap-4 md:grid-cols-3 max-w-3xl mx-auto">
            {tiktokWeekStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className={`stat-card transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
                  <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
                    {stat.change} en 7 jours
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Indicateurs clés */}
        <div className="mb-12">
          <h3 
            className={`font-serif text-xl md:text-2xl text-foreground mb-2 text-center transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Indicateurs clés
          </h3>
          <p className="text-sm text-muted-foreground text-center mb-6">18 – 24 octobre</p>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-5 max-w-4xl mx-auto">
            {periodStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className={`stat-card transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${300 + (index + 1) * 80}ms` }}
                >
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-2">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-serif text-2xl font-semibold text-foreground mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Live TikTok */}
        <div className="mb-12">
          <h3 
            className={`font-serif text-xl md:text-2xl text-foreground mb-6 text-center transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Live TikTok
          </h3>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 max-w-5xl mx-auto">
            {liveStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className={`stat-card transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${500 + (index + 1) * 80}ms` }}
                >
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-2">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-serif text-xl font-semibold text-foreground mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Preuves statistiques */}
        <div 
          className={`max-w-5xl mx-auto transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="font-serif text-xl md:text-2xl text-foreground mb-6 text-center">
            Captures statistiques
          </h3>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
            {[stats1, stats2, stats3, stats4].map((stat, i) => (
              <div 
                key={i}
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img 
                  src={stat} 
                  alt={`Statistiques TikTok ${i + 1}`} 
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performance;
