import { TrendingUp, TrendingDown } from 'lucide-react';

export default function CustomerLifecycleCard() {
  const stages = [
    { label: 'New', count: '14,200', color: 'bg-blue-500', percentage: 13 },
    { label: 'Active', count: '62,300', color: 'bg-green-500', percentage: 58 },
    { label: 'At Risk', count: '18,900', color: 'bg-orange-500', percentage: 18, trend: 'up' },
    { label: 'Lost', count: '8,100', color: 'bg-red-500', percentage: 8, trend: 'down' }
  ];

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
      <h3 className="text-sm font-medium text-gray-600 mb-4">Customer Lifecycle Breakdown</h3>

      <div className="space-y-3">
        {stages.map((stage, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-3 flex-1">
              <div className={`w-3 h-3 rounded-full ${stage.color}`} />
              <span className="text-sm font-medium text-gray-700">{stage.label}</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-gray-900">{stage.count}</span>
              {stage.trend && (
                <span className={`${stage.trend === 'up' ? 'text-orange-600' : 'text-green-600'}`}>
                  {stage.trend === 'up' ?
                    <TrendingUp className="w-3.5 h-3.5" /> :
                    <TrendingDown className="w-3.5 h-3.5" />
                  }
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 h-3 bg-gray-100 rounded-full overflow-hidden flex">
        {stages.map((stage, i) => (
          <div
            key={i}
            className={`${stage.color} first:rounded-l-full last:rounded-r-full`}
            style={{ width: `${stage.percentage}%` }}
          />
        ))}
      </div>
    </div>
  );
}
