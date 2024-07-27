'use client';

type Props = {
  width: number;
  className?: string;
};

export const Freighter = ({ width, className }: Props) => {
  return (
    <div style={{ width: `${width}rem` }} className={`${className ? className : ''}`}>
      <svg viewBox="-1 -1 102 152" xmlns="http://www.w3.org/2000/svg">
        <path
          d={`
          M 0 150
          C 0 140,  20 10,   50 0
          C 80 10,  100 140, 100 150
          C 60 100, 40 100,  0 150
        `}
          stroke="#55ffff"
          fill="#5555ff"
        />
        <line x1="50" x2="50" y1="0" y2="113" stroke="#55ffff" />
      </svg>
    </div>
  );
};
