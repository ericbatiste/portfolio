export interface IconData {
  src: string;
  alt: string;
  id: string;
}

export interface IconCircleProps {
  icons: IconData[];
  radius: number;
  iconSize: number;
  reverse?: boolean;
}

export type RepelIconProps = {
  icon: IconData;
  index: number;
  total: number;
  radius: number;
  size: number;
  reverse?: boolean;
};