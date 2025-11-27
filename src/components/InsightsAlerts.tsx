import { AlertTriangle, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export default function InsightsAlerts() {
  const insights = [
    {
      type: 'critical',
      emoji: '🔥',
      insight: '12,400 high-value customers are at risk.',
      recommendation: 'Trigger win-back flow',
      action: 'Launch Journey',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      textColor: 'text-red-900',
      accentColor: 'text-red-600'
    },
    {
      type: 'warning',
      emoji: '🟡',
      insight: 'Your last campaign CTR dropped 9%.',
      recommendation: 'Try A/B message variation',
      action: 'Create test',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      textColor: 'text-amber-900',
      accentColor: 'text-amber-600'
    },
    {
      type: 'success',
      emoji: '🟢',
      insight: 'Repeat customers responded well to offers.',
      recommendation: 'Create targeted upsell campaign',
      action: 'Use template',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-900',
      accentColor: 'text-green-600'
    }
  ];

  return (
    <section className="mb-10">
      <div className="mb-6">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Insights & What Needs Attention</h2>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {insights.map((item, i) => (
          <div
            key={i}
            className={`${item.bgColor} border ${item.borderColor} rounded-xl p-5 flex items-start gap-4 hover:shadow-md transition-shadow`}
          >
            <div className="text-2xl mt-1">{item.emoji}</div>

            <div className="flex-1">
              <p className={`text-sm font-semibold ${item.textColor} mb-2`}>
                {item.insight}
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <span className={`font-medium ${item.accentColor}`}>Recommended:</span> {item.recommendation}
              </p>

              <button className={`inline-flex items-center gap-2 px-4 py-2 bg-white border ${item.borderColor} rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm ${item.accentColor}`}>
                <span>{item.action}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
