import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = ["Home", "Serviços", "Sobre", "Contato", "Blog"];
  return (
    <header className="bg-white bg-opacity-80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a
          href="./"
          className="text-2xl font-bold text-primary"
          aria-label="voltar para a pagina inicial"
        >
          LegalSphere
        </a>
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`./${item}`}
              className="text-gray-600 hover:text-primary transition-colors duration-200 relative group"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
            </a>
          ))}
        </nav>
        <Button
          aria-label="Toggle Navbar on mobile"
          variant="ghost"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <Menu className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white p-4">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="block py-2 text-gray-600 hover:text-primary transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
