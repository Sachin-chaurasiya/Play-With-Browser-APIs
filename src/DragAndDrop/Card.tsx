import { FC, HTMLAttributes } from 'react';
import RepositoryIcon from '../assets/repository.svg';
import DragIcon from '../assets/drag.svg';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  data: {
    name: string;
    url: string;
    description: string;
  };
}

const Card: FC<CardProps> = ({
  data,
  onDragStart,
  onDragLeave,
  onDragOver,
  onDrop,
}) => {
  return (
    <div
      draggable
      className="border border-purple-200 p-4 shadow-md rounded-md repo-card bg-white transition-all duration-150 ease-in-out"
      key={data.name}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
      onDragLeave={onDragLeave}
    >
      <div className="flex justify-between">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <img
              src={RepositoryIcon}
              alt="Repository Icon"
              className="h-6 w-6"
            />
            <a
              href={data.url}
              target="_blank"
              rel="noreferrer"
              className="text-purple-600 font-semibold ml-2"
            >
              {data.name}
            </a>
          </div>
          <p>{data.description}</p>
        </div>
        <img
          draggable="false"
          src={DragIcon}
          alt="Drag Icon"
          className="h-6 w-6 cursor-grab"
        />
      </div>
    </div>
  );
};

export default Card;
