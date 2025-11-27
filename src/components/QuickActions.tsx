import { Megaphone, Tag, GitBranch, Grid3x3, MessageCircle, BarChart3 } from 'lucide-react';

export default function QuickActions() {
  const actions = [
    { icon: Megaphone, label: 'Create Campaign', color: 'bg-blue-500' },
    { icon: Tag, label: 'Create Offer', color: 'bg-green-500' },
    { icon: GitBranch, label: 'Build Journey', color: 'bg-purple-500' },
    { icon: Grid3x3, label: 'Create Segment', color: 'bg-orange-500' },
    { icon: MessageCircle, label: 'Send WhatsApp Broadcast', color: 'bg-teal-500' },
    { icon: BarChart3, label: 'View Reports', color: 'bg-pink-500' }
  ];

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <span className="text-xl">🚀</span>
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {actions.map((action, i) => (
          <button
            key={i}
            className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group"
          >
            <div className={`${action.color} w-12 h-12 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
              <action.icon className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm font-medium text-gray-900 block text-left leading-tight">
              {action.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
