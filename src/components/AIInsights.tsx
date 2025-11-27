import { Brain, AlertCircle, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';

export default function AIInsights() {
  const insights = [
    {
      severity: 'warning',
      icon: AlertTriangle,
      color: 'orange',
      insight: '12,400 high-value customers are predicted to churn in the next 14 days.',
      action: 'Launch "Win Back" WhatsApp Journey',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-900',
      borderColor: 'border-orange-200',
      buttonColor: 'bg-orange-600 hover:bg-orange-700'
    },
    {
      severity: 'critical',
      icon: AlertCircle,
      color: 'red',
      insight: 'Your "Winter Sale" campaign has low redemption (1.8%).',
      action: 'Add SMS reminder or increase incentive',
      bgColor: 'bg-red-50',
      textColor: 'text-red-900',
      borderColor: 'border-red-200',
      buttonColor: 'bg-red-600 hover:bg-red-700'
    },
    {
      severity: 'success',
      icon: CheckCircle,
      color: 'green',
      insight: 'Repeat customers are responding well to combo offers (CTR 4.8%).',
      action: 'Clone + target "Active Loyalists" segment',
      bgColor: 'bg-green-50',
      textColor: 'text-green-900',
      borderColor: 'border-green-200',
      buttonColor: 'bg-green-600 hover:bg-green-700'
    }
  ];

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <Brain className="w-5 h-5 text-blue-600" />
        AI Insights & Recommended Actions
      </h2>

      <div className="grid grid-cols-1 gap-4">
        {insights.map((item, i) => (
          <div
            key={i}
            className={`${item.bgColor} border ${item.borderColor} rounded-xl p-5 flex items-start gap-4`}
          >
            <div className={`mt-0.5 ${item.textColor}`}>
              <item.icon className="w-5 h-5" />
            </div>

            <div className="flex-1">
              <p className={`text-sm font-medium ${item.textColor} mb-3`}>
                {item.insight}
              </p>

              <button className={`${item.buttonColor} text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors flex items-center gap-2`}>
                <span>{item.action}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
