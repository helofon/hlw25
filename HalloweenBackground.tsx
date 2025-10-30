export const HalloweenBackground = () => {
  return (
    <>
      {/* Névoa animada */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute w-full h-full fog-animate"
          style={{
            background: 'radial-gradient(circle at 30% 50%, rgba(100, 50, 150, 0.3) 0%, transparent 50%)',
          }}
        />
        <div 
          className="absolute w-full h-full fog-animate"
          style={{
            background: 'radial-gradient(circle at 70% 50%, rgba(150, 50, 100, 0.3) 0%, transparent 50%)',
            animationDelay: '5s',
          }}
        />
      </div>

      {/* Luz da lua */}
      <div 
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%)',
        }}
      />

      {/* Silhuetas de árvores */}
      <div className="absolute bottom-0 left-0 right-0 h-64 opacity-40">
        <svg className="absolute bottom-0 left-10 w-32 h-48" viewBox="0 0 100 200" fill="none">
          <path d="M50 200 L50 100 Q45 80, 30 70 Q35 75, 40 60 Q35 65, 25 50 Q30 55, 35 30" 
                stroke="hsl(var(--halloween-dark))" strokeWidth="3" fill="none" />
          <path d="M50 100 Q55 80, 70 70 Q65 75, 60 60 Q65 65, 75 50 Q70 55, 65 30" 
                stroke="hsl(var(--halloween-dark))" strokeWidth="3" fill="none" />
        </svg>
        <svg className="absolute bottom-0 right-20 w-40 h-56" viewBox="0 0 100 200" fill="none">
          <path d="M50 200 L50 90 Q40 70, 20 60 Q30 65, 35 40 Q25 50, 15 30" 
                stroke="hsl(var(--halloween-dark))" strokeWidth="4" fill="none" />
          <path d="M50 90 Q60 70, 80 60 Q70 65, 65 40 Q75 50, 85 30" 
                stroke="hsl(var(--halloween-dark))" strokeWidth="4" fill="none" />
        </svg>
      </div>

      {/* Bruxas voando */}
      {[...Array(3)].map((_, i) => (
        <div
          key={`witch-${i}`}
          className="absolute witch-fly"
          style={{
            top: `${15 + i * 20}%`,
            animationDelay: `${i * 5}s`,
            animationDuration: `${12 + i * 3}s`,
          }}
        >
          <div className="relative">
            {/* Bruxa */}
            <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
              <path 
                d="M8 32 Q8 28, 12 26 L20 24 L22 20 Q24 16, 28 16 Q32 16, 34 20 L36 24 L44 26 Q48 28, 48 32 L46 38 Q44 42, 40 42 L24 42 Q20 42, 18 38 L16 32" 
                fill="hsl(var(--halloween-dark))" 
              />
              <circle cx="26" cy="28" r="2" fill="hsl(var(--halloween-orange))" />
              <circle cx="38" cy="28" r="2" fill="hsl(var(--halloween-orange))" />
              <path d="M8 36 L4 40 L56 40 L60 36" stroke="hsl(var(--halloween-dark))" strokeWidth="2" />
            </svg>
            {/* Rastro de poeira mágica */}
            {[...Array(8)].map((_, j) => (
              <div
                key={j}
                className="absolute w-1 h-1 rounded-full magic-trail"
                style={{
                  backgroundColor: j % 2 === 0 ? 'hsl(var(--halloween-orange))' : 'hsl(var(--halloween-purple))',
                  left: '-10px',
                  top: `${20 + j * 3}px`,
                  animationDelay: `${j * 0.15}s`,
                }}
              />
            ))}
          </div>
        </div>
      ))}

      {/* Morcegos voando */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`bat-${i}`}
          className="absolute animate-pulse"
          style={{
            top: `${10 + i * 8}%`,
            left: `${5 + i * 12}%`,
            animationDuration: `${2 + i * 0.3}s`,
            animationDelay: `${i * 0.6}s`,
          }}
        >
          <svg className="w-6 h-4 opacity-70" viewBox="0 0 24 12" fill="hsl(var(--halloween-dark))">
            <path d="M12 0 L8 4 L4 2 L0 6 L4 8 L8 12 L12 8 L16 12 L20 8 L24 6 L20 2 L16 4 L12 0Z" />
          </svg>
        </div>
      ))}

      {/* Partículas douradas flutuantes */}
      {[...Array(30)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full float-particle"
          style={{
            backgroundColor: i % 3 === 0 ? 'hsl(var(--halloween-orange))' : 'hsl(var(--halloween-gold))',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
            opacity: 0.7,
          }}
        />
      ))}
    </>
  );
};
