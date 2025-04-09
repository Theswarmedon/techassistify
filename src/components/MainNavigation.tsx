
import * as React from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Home, Users, BookOpen, ShoppingCart, Mail, Info } from "lucide-react";

const MainNavigation = () => {
  return (
    <NavigationMenu className="max-w-screen-xl mx-auto">
      <NavigationMenuList className="flex items-center gap-1 px-4">
        <NavigationMenuItem>
          <Link to="/">
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "flex items-center gap-2")}>
              <Home className="h-4 w-4" />
              <span>Inicio</span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuTrigger className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>Quiénes Somos</span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 w-[400px] md:grid-cols-2">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/50 to-primary p-6 no-underline outline-none focus:shadow-md"
                    to="/quienes-somos"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium text-white">
                      Nuestra Misión
                    </div>
                    <p className="text-sm leading-tight text-white/90">
                      Transformamos la formación en IA para empresas con soluciones personalizadas y efectivas.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/nuestro-equipo" title="Nuestro Equipo">
                Conozca a nuestros expertos en IA y formación empresarial.
              </ListItem>
              <ListItem href="/nuestra-historia" title="Historia">
                Más de una década de innovación en el sector tecnológico.
              </ListItem>
              <ListItem href="/nuestros-valores" title="Valores">
                Excelencia, innovación y compromiso con los resultados.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            <span>¿Cómo Trabajamos?</span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href="/metodologia" title="Metodología">
                Nuestro enfoque de 4 pasos: Evaluación, Planificación, Implementación y Evaluación.
              </ListItem>
              <ListItem href="/tecnologias" title="Tecnologías">
                Utilizamos las últimas tecnologías en IA y blockchain para potenciar tu negocio.
              </ListItem>
              <ListItem href="/casos-exito" title="Casos de Éxito">
                Descubre cómo hemos ayudado a empresas como la tuya a transformarse.
              </ListItem>
              <ListItem href="/proceso-trabajo" title="Proceso de Trabajo">
                Un recorrido detallado por nuestro proceso de implementación y formación.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="flex items-center gap-2">
            <ShoppingCart className="h-4 w-4" />
            <span>Productos</span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href="/formaciones-basicas" title="Formaciones Básicas">
                Programas introductorios para equipos que comienzan con IA.
              </ListItem>
              <ListItem href="/cursos-avanzados" title="Cursos Avanzados">
                Formación especializada para profesionales técnicos.
              </ListItem>
              <ListItem href="/soluciones-empresariales" title="Soluciones Empresariales">
                Programas personalizados para grandes organizaciones.
              </ListItem>
              <ListItem href="/asesorias" title="Asesorías">
                Consultoría estratégica para implementación de IA.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link to="/formulario">
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "flex items-center gap-2")}>
              <Mail className="h-4 w-4" />
              <span>Formulario de Contacto</span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link 
              to="/blog" 
              className={cn(navigationMenuTriggerStyle(), "flex items-center gap-2")}
            >
              <Info className="h-4 w-4" />
              <span>Blog</span>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={props.href || "#"}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
          ref={ref}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default MainNavigation;
