import { useEffect, useRef, useState } from "react";
import { Video, Sparkles, Building2, Camera, GraduationCap } from "lucide-react";

import hotelVaisseauVideo from "@/assets/videos/hotel-vaisseau.mp4";
import chapchapVideo from "@/assets/videos/chapchap-express.mp4";
import yangoVideo from "@/assets/videos/yango-goya.mp4";
import celikVideo1 from "@/assets/videos/celik-hotel-1.mp4";
import celikVideo2 from "@/assets/videos/celik-hotel-2.mp4";
import formationItcVideo from "@/assets/videos/formation-itc.mp4";
import michaelKre1 from "@/assets/photos/michael-kre-1.jpeg";
import michaelKre2 from "@/assets/photos/michael-kre-2.jpeg";

type Project = {
  id: number;
  client: string;
  category: string;
  services: string[];
  description: string;
  videos?: string[];
  photos?: string[];
  icon?: "building" | "camera" | "graduation";
};

const projects: Project[] = [
  {
    id: 1,
    client: "Hôtel Le Vaisseau",
    category: "Hôtellerie",
    services: ["Création de contenu", "Montage vidéo", "Publicité"],
    description: "Campagne de contenu visuel pour promouvoir les services et l'ambiance unique de l'hôtel.",
    videos: [hotelVaisseauVideo],
  },
  {
    id: 2,
    client: "ChapChap Express",
    category: "Livraison",
    services: ["Création de contenu", "Montage vidéo", "Publicité"],
    description: "Vidéo promotionnelle dynamique pour mettre en avant la rapidité et l'efficacité du service de livraison.",
    videos: [chapchapVideo],
  },
  {
    id: 3,
    client: "Yango – Service Goya",
    category: "Transport & Services",
    services: ["Création de contenu", "Montage vidéo", "Publicité"],
    description: "Contenu créatif pour le lancement et la promotion du service Goya de Yango.",
    videos: [yangoVideo],
  },
  {
    id: 4,
    client: "Celik Hotel",
    category: "Hôtellerie",
    services: ["Création de contenu", "Montage vidéo", "Publicité"],
    description: "Série de vidéos immersives pour valoriser l'expérience client et les installations de l'hôtel.",
    videos: [celikVideo1, celikVideo2],
  },
  {
    id: 5,
    client: "Ivoire Trade Center",
    category: "Formation",
    services: ["Formation", "Création de contenu"],
    description: "Animation d'une session de formation en création de contenus pour les réseaux sociaux au prestigieux Ivoire Trade Center.",
    videos: [formationItcVideo],
    icon: "graduation",
  },
  {
    id: 6,
    client: "Michael Kre Photographer",
    category: "Photographie",
    services: ["Modèle photo", "Shooting professionnel"],
    description: "Collaboration en tant que modèle photo pour une séance portrait professionnelle en studio.",
    photos: [michaelKre1, michaelKre2],
    icon: "camera",
  },
];

const Projects = () => {
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
    <section ref={sectionRef} className="section-padding bg-secondary/30" id="projects">
      <div className="container-narrow">
        <div 
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 text-center">
            Projets & Collaborations
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6 rounded-full" />
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Découvrez mes réalisations pour des marques et entreprises de renom
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`card-warm overflow-hidden transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              {/* Project Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    {project.icon === "graduation" ? (
                      <GraduationCap className="w-6 h-6 text-primary" />
                    ) : project.icon === "camera" ? (
                      <Camera className="w-6 h-6 text-primary" />
                    ) : (
                      <Building2 className="w-6 h-6 text-primary" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl text-foreground font-semibold">
                      {project.client}
                    </h3>
                    <span className="text-sm text-primary font-medium">{project.category}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((service, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 text-xs bg-accent/30 text-accent-foreground px-3 py-1.5 rounded-full"
                    >
                      <Sparkles className="w-3 h-3" />
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Description */}
              <p className="text-muted-foreground mb-6">
                {project.description}
              </p>

              {/* Videos Grid */}
              {project.videos && project.videos.length > 0 && (
                <div className={`grid gap-4 ${project.videos.length > 1 ? 'md:grid-cols-2' : 'md:grid-cols-1 max-w-md mx-auto'}`}>
                  {project.videos.map((video, vidIndex) => (
                    <div 
                      key={vidIndex}
                      className="relative group rounded-xl overflow-hidden bg-foreground/5 aspect-[9/16] max-h-[500px]"
                    >
                      <video
                        src={video}
                        className="w-full h-full object-cover"
                        controls
                        preload="metadata"
                        playsInline
                      >
                        Votre navigateur ne supporte pas la lecture de vidéos.
                      </video>
                      <div className="absolute top-3 left-3 flex items-center gap-2 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        <Video className="w-4 h-4 text-primary" />
                        <span className="text-xs font-medium text-foreground">Vidéo {vidIndex + 1}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Photos Grid */}
              {project.photos && project.photos.length > 0 && (
                <div className={`grid gap-4 ${project.photos.length > 1 ? 'md:grid-cols-2' : 'md:grid-cols-1 max-w-md mx-auto'}`}>
                  {project.photos.map((photo, photoIndex) => (
                    <div 
                      key={photoIndex}
                      className="relative group rounded-xl overflow-hidden bg-foreground/5"
                    >
                      <img
                        src={photo}
                        alt={`${project.client} - Photo ${photoIndex + 1}`}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 flex items-center gap-2 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        <Camera className="w-4 h-4 text-primary" />
                        <span className="text-xs font-medium text-foreground">Photo {photoIndex + 1}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
