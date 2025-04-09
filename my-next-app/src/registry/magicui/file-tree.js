'use client';

import React from 'react';
import { ChevronRight, ChevronDown, File as FileIcon, Folder as FolderIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const Tree = ({ children, className, initialSelectedId, initialExpandedItems = [], elements }) => {
  const [selectedId, setSelectedId] = React.useState(initialSelectedId);
  const [expandedItems, setExpandedItems] = React.useState(initialExpandedItems);

  const toggleExpand = (id) => {
    setExpandedItems((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className={cn('w-full', className)}>
      {children}
    </div>
  );
};

const Folder = ({ children, element, value, className }) => {
  const isExpanded = true; // You can make this dynamic based on state if needed

  return (
    <div className={cn('pl-2', className)}>
      <div className="flex items-center gap-1 py-1">
        {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        <FolderIcon className="h-4 w-4 text-yellow-500" />
        <span className="text-sm">{element}</span>
      </div>
      <div className="pl-4">{children}</div>
    </div>
  );
};

const File = ({ children, value, className }) => {
  return (
    <div className={cn('flex items-center gap-1 py-1 pl-2', className)}>
      <FileIcon className="h-4 w-4 text-blue-500" />
      {children}
    </div>
  );
};

export { Tree, Folder, File }; 