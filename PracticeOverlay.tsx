@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --bg: #0d0d14;
    --bg2: #11111c;
    --card: #17172a;
    --card2: #1e1e38;
    --border: #252540;
    --border2: #333360;
    --text: #ffffff;
    --text2: #9090b8;
    --text3: #505070;
    --purple: #a78bfa;
    --purple-soft: #1e1040;
    --purple-border: #3d2880;
    --green: #10b981;
    --green-glow: rgba(16,185,129,0.35);
    --green-soft: #091f14;
    --red: #ef4444;
    --red-glow: rgba(239,68,68,0.4);
    --amber: #f59e0b;
    --radius: 16px;
    --radius-sm: 12px;
    
    --background: 240 20% 5%;
    --foreground: 0 0% 100%;
    --card-hsl: 240 25% 12%;
    --card-foreground: 0 0% 100%;
    --popover: 240 25% 8%;
    --popover-foreground: 0 0% 100%;
    --primary: 263 70% 76%;
    --primary-foreground: 0 0% 100%;
    --secondary: 240 20% 10%;
    --secondary-foreground: 0 0% 100%;
    --muted: 240 20% 15%;
    --muted-foreground: 240 10% 50%;
    --accent: 160 84% 39%;
    --accent-foreground: 0 0% 100%;
    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 100%;
    --border-hsl: 240 20% 20%;
    --input: 240 20% 20%;
    --ring: 263 70% 76%;
  }
}

@layer base {
  * {
    @apply border-border;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }
  
  html, body {
    height: 100%;
    background: #08080f;
    font-family: 'Inter', sans-serif;
    color: var(--text);
  }
  
  body {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

@layer utilities {
  .phone-container {
    width: 390px;
    max-width: 100vw;
    height: 100vh;
    max-height: 844px;
    background: var(--bg);
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 100px rgba(139,92,246,0.12), 0 0 0 1px rgba(255,255,255,0.04);
    border-radius: 40px;
  }
  
  @media (max-width: 420px) {
    .phone-container {
      border-radius: 0;
      height: 100dvh;
      max-height: none;
    }
  }
  
  .card-custom {
    background: var(--card);
    border-radius: var(--radius);
    border: 1px solid var(--border);
    overflow: hidden;
  }
  
  .pill-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 7px 14px;
    border-radius: 50px;
    font-size: 13px;
    font-weight: 600;
    background: var(--purple-soft);
    color: var(--purple);
    border: 1px solid var(--purple-border);
  }
  
  .btn-custom {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    font-weight: 700;
    padding: 14px 22px;
    border-radius: var(--radius-sm);
    border: none;
    cursor: pointer;
    transition: all 0.15s;
  }
  
  .btn-custom:active {
    transform: scale(0.97);
  }
  
  .btn-red {
    background: linear-gradient(135deg, #ef4444, #dc2626);
    color: white;
    box-shadow: 0 4px 16px var(--red-glow);
  }
  
  .btn-green {
    background: var(--green);
    color: white;
    box-shadow: 0 4px 14px var(--green-glow);
  }
  
  .btn-dark {
    background: var(--card2);
    color: var(--text2);
    border: 1px solid var(--border2);
  }
  
  .info-box {
    border-radius: var(--radius-sm);
    padding: 14px 16px;
    font-size: 14px;
    line-height: 1.65;
    color: var(--text2);
  }
  
  .info-box strong {
    display: block;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 5px;
  }
  
  .info-box.purple {
    background: var(--purple-soft);
    border: 1px solid var(--purple-border);
  }
  
  .info-box.purple strong {
    color: var(--purple);
  }
  
  .info-box.green {
    background: var(--green-soft);
    border: 1px solid rgba(16,185,129,0.25);
  }
  
  .info-box.green strong {
    color: var(--green);
  }
  
  .info-box.amber {
    background: #1a1004;
    border: 1px solid rgba(245,158,11,0.25);
  }
  
  .info-box.amber strong {
    color: var(--amber);
  }
  
  .info-box.red {
    background: #1a0808;
    border: 1px solid rgba(239,68,68,0.25);
  }
  
  .info-box.red strong {
    color: var(--red);
  }
  
  @keyframes breathe {
    0%, 100% {
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(16,185,129,0.4);
    }
    50% {
      transform: scale(1.2);
      box-shadow: 0 0 0 22px rgba(16,185,129,0);
    }
  }
  
  .breath-active {
    animation: breathe 5s ease-in-out infinite;
  }
}

/* Scrollbar styling */
::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: var(--border);
  border-radius: 2px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--border2);
}
