
import React from 'react';
import { CalendarDays, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface BlogPostProps {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  imageUrl: string;
}

const BlogCard = ({ id, title, excerpt, date, author, imageUrl }: BlogPostProps) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
      <div className="overflow-hidden h-48">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <CardHeader className="pb-3">
        <Link to={`/blog/${id}`}>
          <h3 className="text-xl font-bold hover:text-primary transition-colors duration-200">{title}</h3>
        </Link>
      </CardHeader>
      
      <CardContent className="py-0 flex-1">
        <p className="text-muted-foreground line-clamp-3">{excerpt}</p>
      </CardContent>
      
      <CardFooter className="pt-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-4 w-full">
          <div className="flex items-center gap-1">
            <User size={14} />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-1">
            <CalendarDays size={14} />
            <span>{date}</span>
          </div>
          <div className="ml-auto">
            <Link 
              to={`/blog/${id}`}
              className="text-primary hover:underline"
            >
              Leer más
            </Link>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
