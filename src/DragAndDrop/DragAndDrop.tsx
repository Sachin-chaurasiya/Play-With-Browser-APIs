import { DragAndDropData } from './DragAndDropData';
import { useRef } from 'react';
import Card from './Card';

const DragAndDrop = () => {
  const dragElRef = useRef<HTMLDivElement | null>(null);

  const handleDragStart = (e: React.DragEvent) => {
    dragElRef.current = e.currentTarget as HTMLDivElement;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.currentTarget.innerHTML);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.currentTarget.classList.add(
      'border-dashed',
      'border-2',
      'border-purple-400'
    );
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.currentTarget.classList.remove(
      'border-dashed',
      'border-2',
      'border-purple-400'
    );
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!dragElRef.current) return;

    if (dragElRef.current === e.currentTarget) return;

    e.currentTarget.classList.remove(
      'border-dashed',
      'border-2',
      'border-purple-400'
    );

    dragElRef.current.innerHTML = e.currentTarget.innerHTML;

    const data = e.dataTransfer.getData('text/html');
    e.currentTarget.innerHTML = data;

    dragElRef.current = null;
  };

  return (
    <div className="container">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Play With Drag and Drop
      </h1>
      <div className="grid grid-cols-2 gap-4">
        {DragAndDropData.map((data) => (
          <Card
            key={data.name}
            data={data}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          />
        ))}
      </div>
    </div>
  );
};

export default DragAndDrop;
