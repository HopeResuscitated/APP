import { useState, useEffect } from 'react';

export function StatusBar() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const displayHours = hours % 12 || 12;
      setTime(`${displayHours}:${minutes}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="h-[46px] flex items-center justify-between px-[22px] flex-shrink-0 z-50"
      style={{ 
        background: 'var(--bg)', 
        borderBottom: '1px solid rgba(255,255,255,0.04)' 
      }}
    >
      <div className="text-[15px] font-bold">{time}</div>
      <div className="text-[12px]" style={{ color: 'var(--text3)' }}>5G ▮▮▮ 🔋</div>
    </div>
  );
}
