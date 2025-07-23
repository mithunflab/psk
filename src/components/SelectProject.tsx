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
      <div className="w-full h-full flex flex-col items-center justify-center gap-4">
        <div className="text-xl text-foreground-secondary">No projects found</div>
        <div className="text-md text-foreground-tertiary">Create a new project to get started</div>
        <div className="flex justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-row w-full max-w-6xl">
      <div className="w-3/5 h-full flex items-center justify-center p-8">
        <div className="relative w-full max-w-lg aspect-video bg-muted rounded-lg overflow-hidden shadow-lg">
          <img 
            src={projects[currentProjectIndex]?.image || '/assets/placeholder.jpg'} 
            alt={projects[currentProjectIndex]?.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDUwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMUExQTFBIi8+Cjx0ZXh0IHg9IjI1MCIgeT0iMTUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNjY2NjY2IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiI+UHJvamVjdCBQcmV2aWV3PC90ZXh0Pgo8L3N2Zz4K';
            }}
          />
        </div>
      </div>
      
      <div className="w-2/5 flex flex-col justify-center items-start p-8 gap-6">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-foreground">
            {projects[currentProjectIndex]?.name}
          </h1>
          <p className="text-foreground-secondary">
            {projects[currentProjectIndex]?.description}
          </p>
        </div>
        
        <div className="flex flex-col gap-3 w-full">
          <button className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg font-medium hover:bg-primary/90 transition-colors">
            Open Project
          </button>
          <button className="w-full border border-border text-foreground py-3 px-6 rounded-lg font-medium hover:bg-accent transition-colors">
            View Live Site
          </button>
        </div>
        
        {projects.length > 1 && (
          <div className="flex gap-2 justify-center w-full">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProjectIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentProjectIndex ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};