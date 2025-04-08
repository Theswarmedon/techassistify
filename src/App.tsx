
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import QuienesSomos from "./pages/QuienesSomos";
import ComoTrabajamos from "./pages/ComoTrabajamos";
import Productos from "./pages/Productos";
import Formulario from "./pages/Formulario";
import Blog from "./pages/Blog";
import NuestraMision from "./pages/NuestraMision";
import NuestroEquipo from "./pages/NuestroEquipo";
import NuestraHistoria from "./pages/NuestraHistoria";
import NuestrosValores from "./pages/NuestrosValores";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/como-trabajamos" element={<ComoTrabajamos />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/blog" element={<Blog />} />
          
          {/* Nuevas rutas para las secciones de Quiénes Somos */}
          <Route path="/nuestra-mision" element={<NuestraMision />} />
          <Route path="/nuestro-equipo" element={<NuestroEquipo />} />
          <Route path="/nuestra-historia" element={<NuestraHistoria />} />
          <Route path="/nuestros-valores" element={<NuestrosValores />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
