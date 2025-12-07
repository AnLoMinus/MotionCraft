import React from 'react';

interface StatusCardProps {
  title: string;
  description: string;
  badge: string;
}

export const StatusCard: React.FC<StatusCardProps> = ({ title, description, badge }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{title}</h3>
        <span className="badge">{badge}</span>
      </div>
      <p>{description}</p>
    </div>
  );
};
