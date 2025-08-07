// components/ui/card.tsx

import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card = ({ className = "", ...props }: CardProps) => {
  return (
    <div
      className={`bg-white border border-gray-200 rounded-2xl shadow-sm ${className}`}
      {...props}
    />
  );
};

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardContent = ({ className = "", ...props }: CardContentProps) => {
  return (
    <div className={`p-4 ${className}`} {...props} />
  );
};
