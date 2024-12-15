import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ShoppingBag, PhoneCall, Mail, MapPin } from "lucide-react";
import ContactPage from "../ContactPage/ContactPage";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-12 dark:bg-brandDark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Categorías Populares
            </h2>
            <ul className="space-y-2">
              <li>
                <Link href="/categoria/ropa" className="hover:text-primary">
                  Sabor
                </Link>
              </li>
              <li>
                <Link href="/categoria/calzado" className="hover:text-primary">
                  Aroma
                </Link>
              </li>
              <li>
                <Link
                  href="/categoria/accesorios"
                  className="hover:text-primary"
                >
                  Color
                </Link>
              </li>
              <li>
                <Link href="/categoria/deportes" className="hover:text-primary">
                  Textura
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Enlaces Rápidos</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre-nosotros" className="hover:text-primary">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/politica-de-privacidad"
                  className="hover:text-primary"
                >
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="/terminos-y-condiciones"
                  className="hover:text-primary"
                >
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link
                  href="/preguntas-frecuentes"
                  className="hover:text-primary"
                >
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Contáctanos</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <PhoneCall className="mr-2 h-5 w-5" />
                <span>+58 424 812 54 57</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                <a href="mailto:info@tienda.com" className="hover:text-primary">
                  https://github.com/enmanuelrondon1
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                <span>Anzoategui Venezuela</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">
              Suscríbete a nuestro boletín
            </h2>
            <p className="mb-4">
              Recibe las últimas ofertas y novedades directamente en tu correo.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <Input
                type="email"
                placeholder="Tu correo electrónico"
                aria-label="Correo electrónico para suscripción"
              />
              <Button type="submit" className="w-full text-white">
                Suscribirse
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <div>
            <ContactPage />
          </div>

          <p>
            &copy; {new Date().getFullYear()} Tu Tienda en Línea. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
