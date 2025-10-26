
import type { FC, SVGProps } from 'react';

export interface Project {
  title: string;
  description: string;
  image: string;
  liveUrl?: string;
  repoUrl: string;
  tags: string[];
}

export interface Skill {
  name: string;
  icon: FC<SVGProps<SVGSVGElement>>;
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  location: string;
}
