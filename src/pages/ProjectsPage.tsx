
import React from 'react';
import { TopBar } from '../components/TopBar';
import { SelectProject } from '../components/SelectProject';

const ProjectsPage: React.FC = () => {
  return (
    <div className="min-h-screen projects-gradient">
      <TopBar />
      <div className="pt-16 flex justify-center overflow-hidden w-full min-h-screen">
        <SelectProject />
      </div>
    </div>
  );
};

export default ProjectsPage;
