export interface Variants {
  [key: string]: {
    opacity: number;
    scale: number;
  };
}

export interface CustomNavLinkProps {
  children: string;
  activeClassName: string;
  to: string;
}

export interface Project {
  id: number,
  img: string,
  title: string,
  description: string,
  skills: string[],
  preview: string,
  github: string,
}

export interface toggleModalFunction {
  (): void;
}
