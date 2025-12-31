import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-secondary via-cream to-background">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-nude/40 blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-rose-gold/20 blur-2xl animate-float" />
      
      <div className="container-narrow text-center px-6 py-20">
        {/* Photo frame placeholder */}
        <div 
          className={`mx-auto mb-10 w-48 h-48 md:w-64 md:h-64 photo-frame transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          <div className="w-full h-full bg-gradient-to-br from-accent/40 to-nude flex items-center justify-center">
            <span className="text-muted-foreground text-sm font-medium">Photo de Naomie</span>
          </div>
        </div>

        {/* Professional title */}
        <p 
          className={`text-sm md:text-base tracking-[0.2em] uppercase text-muted-foreground mb-4 font-medium transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Community Manager, UGC, créatrice et formatrice de contenus lifestyle
        </p>

        {/* Name */}
        <h1 
          className={`font-serif text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-6 leading-tight transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Naomie Karelle
          <br />
          <span className="text-primary">Agnissan</span>
        </h1>

        {/* Subtitle */}
        <p 
          className={`text-lg md:text-xl text-muted-foreground font-light transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Étudiante en finances
        </p>

        {/* Scroll indicator */}
        <div 
          className={`mt-16 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full mx-auto flex justify-center">
            <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
