export function NeuralBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-primary/5"></div>

      {/* Neural Network Pattern */}
      <div className="absolute inset-0 opacity-30">
        {/* Nodes */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-40 left-60 w-1.5 h-1.5 bg-primary/70 rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-60 left-40 w-2.5 h-2.5 bg-primary/50 rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-32 right-40 w-2 h-2 bg-primary rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-56 right-60 w-1.5 h-1.5 bg-primary/70 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-32 w-2 h-2 bg-primary/60 rounded-full animate-pulse delay-200"></div>
        <div className="absolute bottom-60 right-32 w-2.5 h-2.5 bg-primary/40 rounded-full animate-pulse delay-800"></div>

        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Animated connection lines */}
          <line x1="88" y1="88" x2="248" y2="168" stroke="url(#connectionGradient)" strokeWidth="1" opacity="0.6">
            <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3s" repeatCount="indefinite" />
          </line>
          <line x1="248" y1="168" x2="168" y2="248" stroke="url(#connectionGradient)" strokeWidth="1" opacity="0.4">
            <animate attributeName="opacity" values="0.1;0.6;0.1" dur="4s" repeatCount="indefinite" />
          </line>
          <line x1="88" y1="88" x2="168" y2="248" stroke="url(#connectionGradient)" strokeWidth="1" opacity="0.3">
            <animate attributeName="opacity" values="0.1;0.5;0.1" dur="5s" repeatCount="indefinite" />
          </line>

          {/* Right side connections */}
          <line
            x1="calc(100% - 168px)"
            y1="136"
            x2="calc(100% - 248px)"
            y2="232"
            stroke="url(#connectionGradient)"
            strokeWidth="1"
            opacity="0.5"
          >
            <animate attributeName="opacity" values="0.2;0.7;0.2" dur="3.5s" repeatCount="indefinite" />
          </line>
          <line
            x1="calc(100% - 136px)"
            y1="calc(100% - 168px)"
            x2="calc(100% - 136px)"
            y2="232"
            stroke="url(#connectionGradient)"
            strokeWidth="1"
            opacity="0.4"
          >
            <animate attributeName="opacity" values="0.1;0.6;0.1" dur="4.5s" repeatCount="indefinite" />
          </line>
        </svg>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-primary/40 rounded-full animate-bounce"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-primary/30 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-1/2 left-3/4 w-0.5 h-0.5 bg-primary/50 rounded-full animate-bounce delay-500"></div>
      </div>
    </div>
  )
}
