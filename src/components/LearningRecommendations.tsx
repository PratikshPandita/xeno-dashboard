import { Play, Sparkles, Lightbulb, ArrowRight } from 'lucide-react';

export default function LearningRecommendations() {
  const recommendations = [
    {
      type: 'video',
      icon: Play,
      title: 'How to Optimize Your WhatsApp Campaigns',
      duration: '2 min',
      color: 'from-red-500 to-red-600',
      textColor: 'text-red-600'
    },
    {
      type: 'template',
      icon: Sparkles,
      title: 'Template of the Week: Festive Buy More Save More Campaign',
      subtitle: 'Pre-built automation flow',
      color: 'from-blue-500 to-blue-600',
      textColor: 'text-blue-600'
    },
    {
      type: 'tip',
      icon: Lightbulb,
      title: 'Use Segmentation to Target High-Intent Window Shoppers',
      subtitle: 'Strategy tip',
      color: 'from-yellow-500 to-yellow-600',
      textColor: 'text-yellow-600'
    }
  ];

  return (
    <section className="mb-12">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Learning & Recommendations</h2>
        <p className="text-gray-600">Improve your marketing with expert guidance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recommendations.map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <div className={`bg-gradient-to-br ${item.color} p-3 rounded-lg group-hover:scale-110 transition-transform`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
              </div>

              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-gray-700">
                {item.title}
              </h3>

              {item.subtitle && (
                <p className={`text-xs font-medium ${item.textColor} mb-3`}>
                  {item.subtitle}
                </p>
              )}

              {item.duration && (
                <p className="text-xs text-gray-500 mb-3">
                  {item.duration}
                </p>
              )}

              <button className={`inline-flex items-center gap-2 text-sm font-medium ${item.textColor} hover:gap-3 transition-all`}>
                <span>Explore</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
