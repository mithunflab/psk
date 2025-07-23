import React from 'react';
import { TopBar } from '../components/TopBar';
import { SelectProject } from '../components/SelectProject';

const ProjectsPage: React.FC = () => {
  return (
    <div className="w-screen h-screen flex flex-col bg-background">
      <TopBar />
      <div className="flex justify-center overflow-hidden w-full h-full">
        <SelectProject />
      </div>
    </div>
  );
};

export default ProjectsPage;