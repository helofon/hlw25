import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const ConfirmButton = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const handleConfirm = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: Date.now() + i,
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    }));
    
    setParticles(newParticles);
    
    setTimeout(() => {
      toast.success("🎃 Presença confirmada! Nos vemos na Noite das Sombras!", {
        duration: 5000,
        style: {
          background: 'hsl(var(--halloween-dark))',
          color: 'hsl(var(--halloween-orange))',
          border: '1px solid hsl(var(--halloween-gold))',
        },
      });
    }, 500);

    setTimeout(() => setParticles([]), 2000);
  };

  return (
    <>
      <div className="flex flex-col items-center gap-4 animate-fade-in">
        <p 
          className="text-lg font-light text-center animate-pulse"
          style={{
            color: 'hsl(var(--halloween-gold))',
            textShadow: '0 0 10px hsl(var(--halloween-gold) / 0.5)',
          }}
        >
          Clique aqui para confirmar sua presença
        </p>
        
        <Button
          onClick={handleConfirm}
          className="group relative px-8 py-6 text-lg font-semibold rounded-full transition-all hover:scale-110 overflow-hidden glitch"
          style={{
            backgroundColor: 'transparent',
            border: '2px solid hsl(var(--halloween-gold))',
            color: 'hsl(var(--halloween-gold))',
            boxShadow: '0 0 30px hsl(var(--halloween-gold) / 0.3), 0 0 60px hsl(var(--halloween-orange) / 0.2)',
            animationDelay: '1s',
          }}
        >
          <span className="relative z-10 flex items-center gap-2">
            ✨ Confirmar Presença ✨
          </span>
          
          {/* Efeito de energia no hover */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: 'radial-gradient(circle, hsl(var(--halloween-orange) / 0.2) 0%, transparent 70%)',
            }}
          />
          
          {/* Faíscas no hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 rounded-full animate-pulse"
                style={{
                  backgroundColor: 'hsl(var(--halloween-gold))',
                  top: `${25 + i * 20}%`,
                  left: `${10 + i * 25}%`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
        </Button>
      </div>

      {/* Partículas mágicas ao clicar */}
      {particles.map((particle, i) => (
        <div
          key={particle.id}
          className="fixed w-2 h-2 rounded-full pointer-events-none"
          style={{
            backgroundColor: 'hsl(var(--halloween-orange))',
            left: particle.x,
            top: particle.y,
            animation: `sparkle-${i % 4} 1s ease-out forwards`,
            boxShadow: '0 0 10px hsl(var(--halloween-orange))',
          }}
        />
      ))}

      <style>{`
        @keyframes sparkle-0 {
          to { transform: translate(30px, -40px); opacity: 0; }
        }
        @keyframes sparkle-1 {
          to { transform: translate(-30px, -40px); opacity: 0; }
        }
        @keyframes sparkle-2 {
          to { transform: translate(40px, -20px); opacity: 0; }
        }
        @keyframes sparkle-3 {
          to { transform: translate(-40px, -20px); opacity: 0; }
        }
      `}</style>
    </>
  );
};
