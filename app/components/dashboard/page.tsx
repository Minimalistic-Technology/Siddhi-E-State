import React from 'react'
const DashboardCard = ({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) => (
  <div className="rounded-2xl p-6 shadow-lg bg-gradient-to-br from-yellow-100 via-orange-50 to-red-100 border border-orange-700">
    <h2 className="text-lg font-semibold text-red-700 mb-2">{title}</h2>
    <p className="text-3xl font-bold text-red-600 drop-shadow-sm">{value}</p>
  </div>
);

export default DashboardCard;