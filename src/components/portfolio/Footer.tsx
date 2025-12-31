const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-primary text-primary-foreground">
      <div className="container-narrow text-center">
        <p className="font-serif text-lg mb-2">Naomie Karelle Agnissan</p>
        <p className="text-sm text-primary-foreground/70">
          Community Manager • UGC Creator • Formatrice de contenus
        </p>
        <div className="mt-4 pt-4 border-t border-primary-foreground/10">
          <p className="text-xs text-primary-foreground/50">
            © {currentYear} Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
