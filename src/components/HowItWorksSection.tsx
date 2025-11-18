const FlowIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center" style={{ minHeight: '250px', maxHeight: '350px' }}>
    <img
      src="/illustrations/sync-illustration.png"
      alt="Data synchronization illustration showing two people with sync symbol"
      className="w-full h-auto object-cover"
      style={{ maxHeight: '350px', objectPosition: 'center', opacity: '0.6' }}
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.style.display = 'none';
        const fallback = target.nextElementSibling;
        if (fallback) (fallback as HTMLElement).style.display = 'block';
      }}
    />
    <svg
      viewBox="0 0 600 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      style={{ display: 'none' }}
    >
      <rect width="600" height="400" fill="url(#bgGradient)" rx="20"/>
      <defs>
        <linearGradient id="bgGradient" x1="0" y1="0" x2="600" y2="400" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1DB574"/>
          <stop offset="1" stopColor="#17A066"/>
        </linearGradient>
      </defs>

      <g transform="translate(80, 180)">
        <ellipse cx="40" cy="140" rx="35" ry="10" fill="#0E8A52" opacity="0.3"/>
        <rect x="15" y="85" width="50" height="55" rx="25" fill="#6B4E71"/>
        <circle cx="40" cy="45" r="25" fill="#D4A574"/>
        <path d="M 25,45 Q 22,38 30,35 Q 38,38 42,42 L 40,48 Q 35,52 30,48 Z" fill="#4A3728"/>
        <rect x="15" y="135" width="50" height="10" rx="5" fill="#8B6F47"/>
        <path d="M 65,95 L 80,105 L 75,118 L 65,125 L 60,118 Z" fill="#D4A574"/>
        <path d="M 15,125 L 0,135 L 5,148 L 15,155 L 20,148 Z" fill="#D4A574"/>
      </g>

      <g transform="translate(300, 150)">
        <circle cx="0" cy="50" r="60" fill="white" opacity="0.95"/>
        <g transform="translate(-25, 25)">
          <path d="M 15,10 L 30,25 L 25,25 L 25,40 L 20,40 L 20,25 L 15,25 Z" fill="#1DB574">
            <animateTransform attributeName="transform" type="translate" values="0,0; 0,-3; 0,0" dur="1.5s" repeatCount="indefinite"/>
          </path>
          <path d="M 35,60 L 20,45 L 25,45 L 25,30 L 30,30 L 30,45 L 35,45 Z" fill="#1DB574">
            <animateTransform attributeName="transform" type="translate" values="0,0; 0,3; 0,0" dur="1.5s" repeatCount="indefinite"/>
          </path>
        </g>
        <circle cx="0" cy="50" r="55" stroke="#E8F5F1" strokeWidth="3" fill="none" opacity="0.5">
          <animate attributeName="stroke-dasharray" values="0 350; 350 0" dur="3s" repeatCount="indefinite"/>
        </circle>
      </g>

      <g transform="translate(420, 180)">
        <ellipse cx="40" cy="140" rx="35" ry="10" fill="#0E8A52" opacity="0.3"/>
        <rect x="15" y="85" width="50" height="55" rx="25" fill="#C85A7C"/>
        <circle cx="40" cy="45" r="25" fill="#F4DCC4"/>
        <path d="M 25,42 Q 22,36 28,33 Q 36,36 55,42 Q 52,48 45,52 Q 35,52 28,48 Z" fill="#8B5E3C"/>
        <rect x="15" y="135" width="50" height="10" rx="5" fill="#A0522D"/>
        <path d="M 65,95 L 80,105 L 75,118 L 65,125 L 60,118 Z" fill="#F4DCC4">
          <animateTransform attributeName="transform" type="rotate" values="0 72 110; -10 72 110; 0 72 110" dur="2s" repeatCount="indefinite"/>
        </path>
        <path d="M 15,125 L 0,135 L 5,148 L 15,155 L 20,148 Z" fill="#F4DCC4"/>
      </g>
    </svg>
  </div>
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
