import React from 'react';
import { Camera } from 'lucide-react';

interface ImagePlaceholderProps {
  title: string;
  description: string;
  aspectRatio?: string;
  height?: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ 
  title, 
  description, 
  aspectRatio = '16/10',
  height
}) => {
  return (
    <div 
      className="image-placeholder"
      style={{
        aspectRatio: height ? undefined : aspectRatio,
        height: height || 'auto',
        width: '100%'
      }}
    >
      <div className="image-placeholder-aspect">{aspectRatio}</div>
      <Camera className="image-placeholder-icon" size={32} />
      <h4 className="image-placeholder-title">{title}</h4>
      <p className="image-placeholder-desc">{description}</p>
    </div>
  );
};
