export const InviteLetter = () => {
  return (
    <div 
      className="relative max-w-2xl w-full p-12 rounded-lg shadow-2xl animate-scale-in paper-texture"
      style={{
        backgroundColor: 'hsl(var(--halloween-beige))',
        backgroundImage: `
          linear-gradient(rgba(139, 69, 19, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(139, 69, 19, 0.1) 1px, transparent 1px),
          radial-gradient(circle at 30% 30%, rgba(139, 69, 19, 0.15), transparent 70%)
        `,
        backgroundSize: '20px 20px, 20px 20px, 100% 100%',
        boxShadow: '0 30px 80px rgba(0,0,0,0.8), inset 0 0 80px rgba(139, 69, 19, 0.1)',
        border: '1px solid hsl(var(--halloween-gold))',
      }}
    >
      {/* Bordas queimadas */}
      <div 
        className="absolute inset-0 rounded-lg pointer-events-none"
        style={{
          boxShadow: 'inset 0 0 30px rgba(0,0,0,0.3)',
        }}
      />

      {/* Ornamento superior */}
      <div className="flex justify-center mb-6">
        <div className="flex items-center gap-4">
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent to-current opacity-30" 
               style={{ color: 'hsl(var(--halloween-gold))' }} />
          <span className="text-4xl">🦇</span>
          <div className="w-20 h-0.5 bg-gradient-to-l from-transparent to-current opacity-30" 
               style={{ color: 'hsl(var(--halloween-gold))' }} />
        </div>
      </div>

      {/* Título */}
      <h1 
        className="text-4xl md:text-5xl text-center mb-8 font-bold glitch"
        style={{
          fontFamily: 'Georgia, serif',
          color: 'hsl(var(--halloween-orange))',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3), 0 0 20px hsl(var(--halloween-orange) / 0.5)',
          letterSpacing: '0.05em',
        }}
      >
        🎃 VOCÊ ESTÁ CONVIDADO<br/>
        PARA A NOITE DAS SOMBRAS 🎃
      </h1>

      {/* Separador decorativo */}
      <div className="flex justify-center mb-8">
        <div className="flex items-center gap-2 opacity-50">
          <span className="text-xl">☠️</span>
          <div className="w-32 h-px" style={{ backgroundColor: 'hsl(var(--halloween-gold))' }} />
          <span className="text-xl">☠️</span>
        </div>
      </div>

      {/* Corpo do texto */}
      <div 
        className="space-y-6 text-center"
        style={{
          fontFamily: 'Georgia, serif',
          color: '#2C1810',
        }}
      >
        <p className="text-lg md:text-xl leading-relaxed italic animate-fade-in">
          Junte-se a nós para uma noite de mistério,<br/>
          risadas e sustos inesquecíveis.
        </p>

        <div className="space-y-3 text-base md:text-lg pt-4">
          <p className="flex items-center justify-center gap-2">
            <span className="text-2xl">📅</span>
            <strong>Data:</strong> 31 de Outubro, às 22h
          </p>
          <p className="flex items-center justify-center gap-2">
            <span className="text-2xl">🏰</span>
            <strong>Local:</strong> Mansão Black Hollow
          </p>
          <p className="flex items-center justify-center gap-2">
            <span className="text-2xl">👻</span>
            <strong>Traje:</strong> Fantasia obrigatória
          </p>
        </div>
      </div>

      {/* Ornamento inferior */}
      <div className="flex justify-center mt-8">
        <div className="flex items-center gap-4">
          <span className="text-2xl">🕷️</span>
          <div className="w-16 h-px" style={{ backgroundColor: 'hsl(var(--halloween-gold))' }} />
          <span className="text-2xl">🕸️</span>
          <div className="w-16 h-px" style={{ backgroundColor: 'hsl(var(--halloween-gold))' }} />
          <span className="text-2xl">🕷️</span>
        </div>
      </div>

      {/* Mensagem final */}
      <p 
        className="text-center mt-6 text-sm italic opacity-70 glitch"
        style={{ 
          color: '#2C1810',
          animationDelay: '2s',
        }}
      >
        "Venha... se tiver coragem." 🦇
      </p>

      {/* Partículas douradas flutuantes */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full float-particle"
          style={{
            backgroundColor: 'hsl(var(--halloween-gold))',
            top: `${20 + Math.random() * 60}%`,
            left: `${10 + Math.random() * 80}%`,
            animationDelay: `${Math.random() * 3}s`,
            opacity: 0.6,
          }}
        />
      ))}
    </div>
  );
};
