const Footer = () => {
  return (
    <footer className="py-8 bg-primary text-primary-foreground">
      <div className="container px-4 mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Sabin Ghet
        </p>
      </div>
    </footer>
  );
};

export default Footer;
