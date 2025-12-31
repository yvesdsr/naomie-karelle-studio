import { useEffect, useRef, useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Téléphone",
    value: "+225 01 72 03 80 56",
    href: "tel:+2250172038056",
  },
  {
    icon: Mail,
    label: "Email",
    value: "Karelleagnissan49@gmail.com",
    href: "mailto:Karelleagnissan49@gmail.com",
  },
  {
    icon: MapPin,
    label: "Localisation",
    value: "Cocody, Abidjan – Côte d'Ivoire",
    href: null,
  },
];

const ContactInfo = () => {
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
    <section ref={sectionRef} className="section-padding bg-secondary/30" id="contact-info">
      <div className="container-narrow">
        <div 
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 text-center">
            Coordonnées
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-12 rounded-full" />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            const content = (
              <div 
                className={`card-warm text-center group cursor-pointer transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/40 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground mb-2">{item.label}</p>
                <p className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                  {item.value}
                </p>
              </div>
            );

            return item.href ? (
              <a key={item.label} href={item.href} className="block">
                {content}
              </a>
            ) : (
              <div key={item.label}>{content}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
