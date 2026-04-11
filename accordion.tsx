import { Home, BookOpen, Timer, Phone } from 'lucide-react';
import type { ScreenType } from '../App';

interface BottomNavProps {
  currentScreen: ScreenType;
  onScreenChange: (screen: ScreenType) => void;
}

export function BottomNav({ currentScreen, onScreenChange }: BottomNavProps) {
  const navItems: { id: ScreenType; icon: React.ReactNode; label: string }[] = [
    { id: 'home', icon: <Home size={22} />, label: 'HOME' },
    { id: 'guide', icon: <BookOpen size={22} />, label: 'GUIDE' },
    { id: 'timer', icon: <Timer size={22} />, label: 'TIMER' },
    { id: 'help', icon: <Phone size={22} />, label: 'HELP' },
  ];

  return (
    <div 
      className="h-[70px] grid grid-cols-4 flex-shrink-0 z-50 pb-[6px]"
      style={{ 
        background: 'var(--bg2)', 
        borderTop: '1px solid var(--border)' 
      }}
    >
      {navItems.map((item) => {
        const isActive = currentScreen === item.id;
        const isHelp = item.id === 'help';
        
        return (
          <button
            key={item.id}
            onClick={() => onScreenChange(item.id)}
            className="flex flex-col items-center justify-center gap-1 cursor-pointer border-none bg-none pt-[6px] pb-0 px-1 transition-all duration-150 active:opacity-50"
          >
            <span 
              className="text-[22px] leading-none transition-colors duration-150"
              style={{ 
                color: isActive 
                  ? (isHelp ? 'var(--red)' : 'var(--green)') 
                  : 'var(--text3)' 
              }}
            >
              {item.icon}
            </span>
            <span 
              className="text-[10px] font-bold tracking-[0.5px] uppercase transition-colors duration-150"
              style={{ 
                color: isActive 
                  ? (isHelp ? 'var(--red)' : 'var(--green)') 
                  : 'var(--text3)' 
              }}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
