import React, { useState } from 'react';

const productStats = [
  {
    name: 'SleepEase Massager',
    spend: 3000,
    sales: 11200,
    roas: 3.7,
    profit: 6400,
    risk: 2,
    source: ['Meta', 'TikTok'],
    daysToBreakeven: 2,
    lastUpdated: '2h ago'
  },
  {
    name: 'Pore Vacuum Cleaner',
    spend: 4200,
    sales: 13700,
    roas: 3.2,
    profit: 5300,
    risk: 1,
    source: ['TikTok'],
    daysToBreakeven: 1,
    lastUpdated: '1h ago'
  }
];

const Dashboard = () => {
  const [view, setView] = useState('daily');

  const getRowColor = (roas, risk) => {
    if (roas >= 3 && risk <= 3) return '#d4f4dd'; // Green
    if (roas < 2 || risk >= 10) return '#ffe0e0'; // Red
    return '#fff9db'; // Yellow
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>📊 JARVIS EV.2 Live Dashboard</h1>
      <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => setView('daily')}>Daily</button>
        <button onClick={() => setView('weekly')} style={{ marginLeft: '0.5rem' }}>Weekly</button>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Spend</th>
            <th>Sales</th>
            <th>ROAS</th>
            <th>Profit</th>
            <th>Risk %</th>
            <th>Sources</th>
            <th>Days to Breakeven</th>
            <th>Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {productStats.map((p, idx) => (
            <tr key={idx} style={{ backgroundColor: getRowColor(p.roas, p.risk) }}>
              <td>{p.name}</td>
              <td>₹{p.spend.toLocaleString()}</td>
              <td>₹{p.sales.toLocaleString()}</td>
              <td>{p.roas.toFixed(2)}x</td>
              <td>₹{p.profit.toLocaleString()}</td>
              <td>{p.risk}%</td>
              <td>{p.source.join(', ')}</td>
              <td>{p.daysToBreakeven} days</td>
              <td>{p.lastUpdated}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: '2rem', padding: '1rem', background: '#f0f8ff', borderRadius: '8px' }}>
        <h3>🧠 Smart Suggestions</h3>
        <ul>
          <li>🟢 Scale SleepEase by ₹2K — ROI is high & risk low</li>
          <li>🟡 Monitor Pore Vacuum refund pattern — flag after 10%</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
