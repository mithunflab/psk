
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const mockProjects = [
  {
    id: '1',
    name: 'My First Project',
    description: 'A beautiful website built with Onlook',
    image: '/assets/project-1.jpg',
    url: 'https://example.com'
  },
  {
    id: '2', 
    name: 'E-commerce Store',
    description: 'Modern e-commerce website',
    image: '/assets/project-2.jpg',
    url: 'https://shop.example.com'
  }
];

export const SelectProject: React.FC = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const projects = mockProjects;

  if (projects.length === 0) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-6 p-8">
        <div className="text-center space-y-4">
          <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto flex items-center justify-center mb-6">
            <span className="text-4xl">📁</span>
          </div>
          <h2 className="text-2xl font-bold text-foreground">No projects found</h2>
          <p className="text-foreground-secondary max-w-md">
            Create your first project to get started building amazing websites
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            ← Back to Home
          </Link>
          <button className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-accent transition-colors">
            + Create Project
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row w-full max-w-6xl mx-auto p-8 gap-8">
      {/* Project Preview */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-full max-w-2xl aspect-video bg-muted rounded-xl overflow-hidden shadow-2xl border border-border">
          <img 
            src={projects[currentProjectIndex]?.image || '/assets/placeholder.jpg'} 
            alt={projects[currentProjectIndex]?.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDUwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iMzAwIiBmaWxsPSJoc2woMjE3LjIgMzIuNiUgMTcuNSUpIi8+Cjx0ZXh0IHg9IjI1MCIgeT0iMTUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJoc2woMjE1IDIwLjIlIDY1LjElKSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiPlByb2plY3QgUHJldmlldyAtIDwvdGV4dD4KPC9zdmc+Cg==';
            }}
          />
        </div>
      </div>
      
      {/* Project Details */}
      <div className="flex-1 flex flex-col justify-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-foreground">
            {projects[currentProjectIndex]?.name}
          </h1>
          <p className="text-xl text-foreground-secondary">
            {projects[currentProjectIndex]?.description}
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
          <button className="w-full bg-primary text-primary-foreground py-4 px-6 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
            <span>🚀</span>
            Open Project
          </button>
          <button className="w-full border border-border text-foreground py-4 px-6 rounded-lg font-medium hover:bg-accent transition-colors flex items-center justify-center gap-2">
            <span>🌐</span>
            View Live Site
          </button>
        </div>
        
        {projects.length > 1 && (
          <div className="flex gap-3 justify-center">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProjectIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentProjectIndex 
                    ? 'bg-primary scale-110' 
                    : 'bg-muted hover:bg-muted-foreground'
                }`}
              />
            ))}
          </div>
        )}
        
        <div className="pt-4 border-t border-border">
          <Link
            to="/"
            className="text-foreground-secondary hover:text-foreground transition-colors flex items-center gap-2"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};
