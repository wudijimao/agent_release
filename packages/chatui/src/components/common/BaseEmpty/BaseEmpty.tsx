import React from 'react';

export interface BaseEmptyProps {
  description?: React.ReactNode;
  image?: React.ReactNode;
  children?: React.ReactNode;
}

export const BaseEmpty: React.FC<BaseEmptyProps> = ({ description = '暂无数据', image, children }) => (
  <div className="flex min-h-[300px] flex-col items-center justify-center px-4 py-12 text-center text-mutedText">
    {image && <div className="mb-6 text-5xl text-controlBorder">{image}</div>}
    {description && <p className="m-0 text-sm text-mutedText">{description}</p>}
    {children}
  </div>
);

BaseEmpty.displayName = 'BaseEmpty';
