export interface HeaderMenuItem {
  id: number;
  item: string;
  link: string;
}


export type teamData = {
  id: string;
  title: string;
  description: string;
  role: string;
  imageMobile: string;
  imageDesktop: string;
  href: string;
};

export type TeamCardProps = teamData;
