import React from 'react';

const Statistics = ({ title, stats }) => {
  const generateRandomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

  return (
    <section className="statistics">
      {title && <h2 className="titleStats">{title}</h2>}
      <ul className="statList">
        {stats.map(stat => (
          <li
            key={stat.id}
            className="itemStats"
            style={{ backgroundColor: generateRandomColor() }}
          >
            <span className="labelStats">{stat.label}</span>
            <span className="percentageStats">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
