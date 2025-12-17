import TechIcon from './TechIcon';
import { IconData, IconCircleProps } from '@/types/techIcons';

export default function IconCircle({
  icons,
  radius,
  iconSize,
  reverse = false,
}: IconCircleProps){
  return (
    <div className="relative flex w-30 items-center justify-center">
      {icons.map((icon: IconData, index: number) => (
        <TechIcon
          key={`icon-${index}`}
          icon={icon}
          index={index}
          total={icons.length}
          radius={radius}
          size={iconSize}
          reverse={reverse}
        />
      ))}
    </div>
  );
};