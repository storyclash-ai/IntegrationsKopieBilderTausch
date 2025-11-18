const FlowIllustration = () => (
  <svg viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
    <g transform="translate(100, 50)">
      <rect x="120" y="80" width="180" height="130" rx="8" fill="#E8F5F1" opacity="0.6">
        <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" />
      </rect>
      <rect x="100" y="60" width="180" height="130" rx="8" fill="#E8F5F1" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3s" begin="0.5s" repeatCount="indefinite" />
      </rect>
      <rect x="80" y="40" width="180" height="130" rx="8" fill="#D6ECE5" opacity="0.7">
        <animate attributeName="opacity" values="0.5;0.9;0.5" dur="3s" begin="1s" repeatCount="indefinite" />
      </rect>

      <g transform="translate(180, 60)">
        <circle cx="0" cy="0" r="35" fill="#F2A42E" opacity="0.3" />
        <path d="M -15,-5 L -5,-5 L -5,-15 L 5,-15 L 5,-5 L 15,-5 L 15,5 L 5,5 L 5,15 L -5,15 L -5,5 L -15,5 Z" fill="#F2A42E">
          <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="8s" repeatCount="indefinite" />
        </path>
      </g>

      <g transform="translate(240, 80)">
        <circle cx="0" cy="0" r="45" fill="#C73865" opacity="0.3" />
        <path d="M -18,-8 L -8,-8 L -8,-18 L 8,-18 L 8,-8 L 18,-8 L 18,8 L 8,8 L 8,18 L -8,18 L -8,8 L -18,8 Z" fill="#C73865">
          <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="6s" repeatCount="indefinite" />
        </path>
        <circle cx="0" cy="0" r="12" fill="#FFF" />
        <circle cx="0" cy="0" r="6" fill="#C73865" />
      </g>
    </g>

    <rect x="120" y="380" width="560" height="280" rx="16" fill="url(#greenGradient)" />
    <defs>
      <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#19B776', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#15A068', stopOpacity: 1 }} />
      </linearGradient>
    </defs>

    <g transform="translate(200, 450)">
      <path d="M 0,0 L 35,35 L 20,35 L 20,80 L 180,80 L 180,50 L 280,100 L 180,150 L 180,120 L 0,120 Z" fill="#FFF" opacity="0.95">
        <animate attributeName="opacity" values="0.85;0.95;0.85" dur="2s" repeatCount="indefinite" />
      </path>
      <path d="M 400,120 L 365,85 L 380,85 L 380,40 L 220,40 L 220,70 L 120,20 L 220,-30 L 220,0 L 400,0 Z" fill="#FFF" opacity="0.95">
        <animate attributeName="opacity" values="0.85;0.95;0.85" dur="2s" begin="0.5s" repeatCount="indefinite" />
      </path>
    </g>

    <g transform="translate(80, 500)">
      <ellipse cx="20" cy="90" rx="25" ry="8" fill="#1E8C62" opacity="0.4" />

      <rect x="5" y="50" width="30" height="40" rx="15" fill="#4A90A4" />

      <circle cx="20" cy="25" r="15" fill="#F4C19C" />
      <path d="M 12,25 Q 12,30 15,32 L 15,28 Q 15,25 20,25 Q 25,25 25,28 L 25,32 Q 28,30 28,25" fill="#2C2C2C" />

      <rect x="8" y="45" width="24" height="3" rx="1.5" fill="#3A7A94" />

      <path d="M 35,55 L 45,60 L 40,65 L 35,68 L 32,65 L 32,60 Z" fill="#F4C19C" />

      <path d="M 5,68 L -5,75 L -2,82 L 3,85 L 8,82 L 8,75 Z" fill="#F4C19C" />

      <rect x="5" y="88" width="30" height="7" rx="3" fill="#2C4A5C" />
    </g>

    <g transform="translate(620, 520)">
      <ellipse cx="20" cy="70" rx="28" ry="8" fill="#1E8C62" opacity="0.4" />

      <rect x="5" y="35" width="30" height="35" rx="15" fill="#D4567A" />

      <circle cx="20" cy="18" r="13" fill="#8D5C4D" />
      <path d="M 12,15 Q 8,10 15,8 Q 22,10 28,15 Q 28,20 20,25 Q 12,20 12,15" fill="#2C2C2C" />

      <rect x="8" y="32" width="24" height="3" rx="1.5" fill="#B8456A" />

      <path d="M 35,42 L 42,48 L 40,54 L 35,58 L 32,54 L 30,48 Z" fill="#8D5C4D">
        <animateTransform attributeName="transform" type="rotate" from="0 20 50" to="-15 20 50" dur="1.5s" repeatCount="indefinite" />
      </path>

      <path d="M 5,58 L -2,64 L 0,70 L 5,73 L 8,70 L 10,64 Z" fill="#8D5C4D" />

      <rect x="2" y="68" width="36" height="6" rx="3" fill="#CC8A3D" />
    </g>
  </svg>
);

const steps = [
  {
    number: '01',
    title: 'Connect your Storyclash account',
    description: 'Secure API authentication in minutes.'
  },
  {
    number: '02',
    title: 'Sync your creator campaign data',
    description: 'All metrics (revenue, conversions, EMV, engagement) flow automatically into Power BI datasets.'
  },
  {
    number: '03',
    title: 'Build dashboards & measure ROI',
    description: 'Visualize campaign performance, compare creators, and monitor ROI over time.'
  }
];

export default function HowItWorksSection() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#FAFAFA' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center mb-16" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
          How the Power BI Integration Works
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className="order-2 lg:order-1"
            style={{
              animation: 'slideInLeft 0.8s ease-out both',
            }}
          >
            <div className="bg-white p-8 lg:p-12" style={{ borderRadius: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
              <FlowIllustration />
            </div>
          </div>

          <div
            className="order-1 lg:order-2 space-y-6"
            style={{
              animation: 'slideInBottom 0.8s ease-out 0.2s both',
            }}
          >
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white p-6 border border-gray-200 transition-shadow duration-300"
                style={{
                  borderRadius: '20px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  animation: `fadeInUp 0.6s ease-out ${0.3 + index * 0.15}s both`,
                }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.12)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)'}
              >
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center font-black text-lg text-white" style={{ backgroundColor: '#19B776', borderRadius: '20px' }}>
                    {step.number}
                  </div>
                  <div>
                    <h3 className="mb-2" style={{ fontSize: '20px', lineHeight: '1.1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: '16px', lineHeight: '1.3', fontWeight: '400', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInBottom {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
