import { useState, useCallback } from 'react';
import { StatusBar } from './components/StatusBar';
import { BottomNav } from './components/BottomNav';
import { HomeScreen } from './screens/HomeScreen';
import { GuideScreen } from './screens/GuideScreen';
import { TimerScreen } from './screens/TimerScreen';
import { HelpScreen } from './screens/HelpScreen';
import { EmergencyOverlay } from './overlays/EmergencyOverlay';
import { PracticeOverlay } from './overlays/PracticeOverlay';

export type ScreenType = 'home' | 'guide' | 'timer' | 'help';
export type OverlayType = 'emergency' | 'practice' | null;

function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('home');
  const [activeOverlay, setActiveOverlay] = useState<OverlayType>(null);

  const showScreen = useCallback((screen: ScreenType) => {
    setCurrentScreen(screen);
  }, []);

  const openFlow = useCallback((mode: 'emergency' | 'practice') => {
    setActiveOverlay(mode);
  }, []);

  const closeFlow = useCallback(() => {
    setActiveOverlay(null);
  }, []);

  return (
    <div className="phone-container">
      <StatusBar />
      
      <div className="flex-1 relative overflow-hidden">
        <HomeScreen 
          isActive={currentScreen === 'home'} 
          onShowScreen={showScreen}
          onOpenFlow={openFlow}
        />
        <GuideScreen 
          isActive={currentScreen === 'guide'} 
          onShowScreen={showScreen}
          onOpenFlow={openFlow}
        />
        <TimerScreen 
          isActive={currentScreen === 'timer'} 
        />
        <HelpScreen 
          isActive={currentScreen === 'help'} 
        />
      </div>

      <BottomNav 
        currentScreen={currentScreen} 
        onScreenChange={showScreen} 
      />

      {activeOverlay === 'emergency' && (
        <EmergencyOverlay onClose={closeFlow} />
      )}
      
      {activeOverlay === 'practice' && (
        <PracticeOverlay onClose={closeFlow} />
      )}
    </div>
  );
}

export default App;
