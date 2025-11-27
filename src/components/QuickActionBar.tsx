import { Megaphone, MessageCircle, Zap, Grid3x3, Tag, useMediaQuery } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function QuickActionBar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const actions = [
    { icon: Megaphone, label: 'Create Campaign', color: 'bg-blue-600 hover:bg-blue-700' },
    { icon: MessageCircle, label: 'Send WhatsApp Broadcast', color: 'bg-teal-600 hover:bg-teal-700' },
    { icon: Zap, label: 'Build Automation', color: 'bg-purple-600 hover:bg-purple-700' },
    { icon: Grid3x3, label: 'Create Segment', color: 'bg-orange-600 hover:bg-orange-700' },
    { icon: Tag, label: 'Create Offer', color: 'bg-green-600 hover:bg-green-700' }
  ];

  return (
    <div className={`${isSticky ? 'fixed left-0 right-0 top-16 z-30 shadow-lg py-4 bg-white border-b border-gray-200' : 'mb-10 py-6'}`}>
      <div className={isSticky ? 'max-w-6xl mx-auto px-6' : ''}>
        <h2 className={`text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4 ${isSticky ? 'sr-only' : ''}`}>
          Quick Actions
        </h2>

        <div className="flex flex-wrap gap-3">
          {actions.map((action, i) => (
            <button
              key={i}
              className={`${action.color} text-white px-4 py-2.5 rounded-lg font-medium text-sm flex items-center gap-2 transition-all hover:shadow-md active:scale-95`}
            >
              <action.icon className="w-4 h-4" />
              <span>{action.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
