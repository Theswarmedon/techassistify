
import React, { useState } from 'react';
import MainNavigation from '@/components/MainNavigation';
import BlogCard from '@/components/BlogCard';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

// Mock blog data
const blogPosts = [
  {
    id: 1,
    title: "Cómo la IA está Transformando la Formación Empresarial",
    excerpt: "Descubre las formas en que la inteligencia artificial está revolucionando los métodos tradicionales de formación en entornos corporativos.",
    date: "10 Abr 2025",
    author: "María Rodríguez",
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "5 Tendencias de IA que Cambiarán tu Negocio en 2025",
    excerpt: "Análisis de las principales tendencias en inteligencia artificial que tendrán un impacto significativo en las empresas durante el próximo año.",
    date: "5 Abr 2025",
    author: "Carlos Sánchez",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Implementando ChatGPT en tu Estrategia de Formación",
    excerpt: "Guía práctica sobre cómo integrar modelos de lenguaje avanzados como ChatGPT en los programas de formación corporativa.",
    date: "2 Abr 2025",
    author: "Ana Martínez",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "El Futuro del Aprendizaje: IA y Realidad Virtual",
    excerpt: "Exploramos cómo la combinación de inteligencia artificial y tecnologías inmersivas está creando nuevas posibilidades en la educación empresarial.",
    date: "28 Mar 2025",
    author: "Miguel López",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Casos de Éxito: Empresas que Revolucionaron su Formación con IA",
    excerpt: "Analizamos ejemplos reales de organizaciones que han transformado sus programas formativos mediante la aplicación de soluciones basadas en IA.",
    date: "25 Mar 2025",
    author: "Laura González",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Guía para Evaluar Soluciones de IA para Formación",
    excerpt: "Criterios clave a considerar al seleccionar herramientas de inteligencia artificial para programas de formación en tu organización.",
    date: "20 Mar 2025",
    author: "David Fernández",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
  }
];

const POSTS_PER_PAGE = 3;

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <MainNavigation />
      </header>
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-3 text-center">Nuestro Blog</h1>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            Artículos, noticias y recursos sobre IA y formación empresarial
          </p>
          
          <div className="flex justify-center mb-12">
            <Link to="/formulario">
              <Button variant="outline" className="mx-2">Solicitar contenido personalizado</Button>
            </Link>
            <Link to="/checkout">
              <Button className="mx-2">Acceder a contenido premium</Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPosts.map((post) => (
              <BlogCard 
                key={post.id}
                id={post.id}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                author={post.author}
                imageUrl={post.imageUrl}
              />
            ))}
          </div>
          
          {totalPages > 1 && (
            <div className="mt-16">
              <Pagination>
                <PaginationContent>
                  {currentPage > 1 && (
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={() => handlePageChange(currentPage - 1)}
                        href="#"
                      />
                    </PaginationItem>
                  )}
                  
                  {Array.from({length: totalPages}).map((_, index) => (
                    <PaginationItem key={index}>
                      <PaginationLink
                        href="#"
                        onClick={() => handlePageChange(index + 1)}
                        isActive={currentPage === index + 1}
                      >
                        {index + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  
                  {currentPage < totalPages && (
                    <PaginationItem>
                      <PaginationNext
                        onClick={() => handlePageChange(currentPage + 1)}
                        href="#"
                      />
                    </PaginationItem>
                  )}
                </PaginationContent>
              </Pagination>
            </div>
          )}
          
          <div className="text-center mt-16 py-8">
            <h3 className="text-xl font-bold mb-4">¿Te interesa mejorar la formación en tu empresa?</h3>
            <p className="mb-6">Descubre cómo nuestras soluciones de IA pueden transformar el aprendizaje en tu organización</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/checkout">
                <Button size="lg">Comienza ahora</Button>
              </Link>
              <Link to="/formulario">
                <Button variant="outline" size="lg">Contáctanos</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
