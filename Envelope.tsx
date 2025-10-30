import { useState } from "react";
import { Button } from "@/components/ui/button";

interface EnvelopeProps {
  onOpen: () => void;
}

export const Envelope = ({ onOpen }: EnvelopeProps) => {
  const [isShaking, setIsShaking] = useState(false);

  const handleClick = () => {
    setIsShaking(true);
    setTimeout(() => {
      onOpen();
    }, 500);
  };

  return (
    <div className="flex flex-col items-center gap-8">
      {/* Título inicial */}
      <div className="text-center space-y-2 animate-fade-in">
        <h1 
          className="text-4xl md:text-6xl font-bold tracking-wider glitch"
          style={{ 
            fontFamily: 'Georgia, serif',
            color: 'hsl(var(--halloween-orange))',
            textShadow: '0 0 20px hsl(var(--halloween-orange) / 0.5), 0 0 40px hsl(var(--halloween-orange) / 0.3)',
          }}
        >
          🎃 CONVITE ESPECIAL 🎃
        </h1>
        <p className="text-lg font-light animate-pulse" style={{ color: 'hsl(var(--halloween-beige))' }}>
          Você recebeu uma mensagem misteriosa...
        </p>
      </div>

      {/* Envelope com velas */}
      <div className="relative">
        {/* Velas laterais */}
        <div className="absolute -left-24 top-1/2 transform -translate-y-1/2">
          <div className="flex flex-col items-center">
            <div 
              className="w-3 h-8 rounded-t-full flame-flicker"
              style={{ backgroundColor: 'hsl(var(--halloween-orange))' }}
            />
            <div className="w-4 h-16 bg-gray-800 rounded-sm" />
            <div className="w-6 h-2 bg-gray-900 rounded-full" />
          </div>
        </div>

        <div className="absolute -right-24 top-1/2 transform -translate-y-1/2">
          <div className="flex flex-col items-center">
            <div 
              className="w-3 h-8 rounded-t-full flame-flicker"
              style={{ 
                backgroundColor: 'hsl(var(--halloween-orange))',
                animationDelay: '0.5s',
              }}
            />
            <div className="w-4 h-16 bg-gray-800 rounded-sm" />
            <div className="w-6 h-2 bg-gray-900 rounded-full" />
          </div>
        </div>

        {/* Envelope */}
        <div 
          className={`relative ${isShaking ? 'envelope-shake' : ''}`}
          style={{
            width: '320px',
            height: '200px',
            transformStyle: 'preserve-3d',
            perspective: '1000px',
          }}
        >
          {/* Corpo do envelope */}
          <div 
            className="absolute inset-0 rounded-lg shadow-2xl"
            style={{
              backgroundColor: 'hsl(var(--halloween-beige))',
              backgroundImage: `linear-gradient(45deg, 
                rgba(0,0,0,0.05) 25%, transparent 25%, transparent 75%, 
                rgba(0,0,0,0.05) 75%, rgba(0,0,0,0.05))`,
              backgroundSize: '20px 20px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.2)',
            }}
          >
            {/* Detalhes dourados nas bordas */}
            <div 
              className="absolute inset-0 rounded-lg"
              style={{
                border: '2px solid hsl(var(--halloween-gold))',
                boxShadow: 'inset 0 0 20px rgba(176, 141, 87, 0.3)',
              }}
            />
          </div>

          {/* Aba do envelope */}
          <div 
            className="absolute top-0 left-0 right-0 h-24 origin-top"
            style={{
              clipPath: 'polygon(0 0, 50% 100%, 100% 0)',
              backgroundColor: 'hsl(var(--halloween-beige))',
              filter: 'brightness(0.9)',
              borderLeft: '2px solid hsl(var(--halloween-gold))',
              borderRight: '2px solid hsl(var(--halloween-gold))',
            }}
          />

          {/* Selo de cera */}
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
              style={{
                backgroundColor: 'hsl(var(--halloween-red))',
                boxShadow: '0 4px 12px rgba(139, 0, 0, 0.6), inset 0 -2px 4px rgba(0,0,0,0.4)',
              }}
            >
              <span className="text-3xl">🎃</span>
            </div>
          </div>

          {/* Brilho místico */}
          <div 
            className="absolute inset-0 rounded-lg pointer-events-none animate-pulse"
            style={{
              background: 'radial-gradient(circle at center, hsl(var(--halloween-gold) / 0.2) 0%, transparent 60%)',
            }}
          />
        </div>
      </div>

      {/* Botão de abrir */}
      <Button
        onClick={handleClick}
        className="px-8 py-6 text-lg font-semibold rounded-full transition-all hover:scale-105"
        style={{
          backgroundColor: 'hsl(var(--halloween-orange))',
          color: '#000',
          boxShadow: '0 0 30px hsl(var(--halloween-orange) / 0.5)',
        }}
      >
        ✉️ Abrir Convite
      </Button>
    </div>
  );
};
