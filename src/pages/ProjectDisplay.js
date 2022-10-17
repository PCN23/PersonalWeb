import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectList } from '../helpers/ProjectList';

export default function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div>
          
    </div>
  );
}
