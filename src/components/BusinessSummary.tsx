import { TrendingUp, MessageCircle, Gift, AlertTriangle } from 'lucide-react';

export default function BusinessSummary() {
  const kpis = [
    {
      title: 'Marketing-influenced Revenue',
      value: '₹24.8M',
      change: '+12%',
      trend: 'up',
      period: 'WoW',
      icon: TrendingUp,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Campaign Engagement Rate',
      value: '34%',
      change: '+5%',
      trend: 'up',
      period: 'avg',
      icon: MessageCircle,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Loyalty Enrollment',
      value: '2,804',
      change: 'this week',
      trend: 'up',
      icon: Gift,
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Active vs At-Risk Customers',
      value: '62,300',
      subtitle: '18,900 at risk',
      icon: AlertTriangle,
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section className="mb-10">
      <div className="mb-6">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Your Business Summary</h2>
        <p className="text-xs text-gray-500 mt-1">Based on your last 30 days of activity</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, i) => {
          const Icon = kpi.icon;
          return (
            <button
              key={i}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-200 text-left group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`bg-gradient-to-br ${kpi.color} p-3 rounded-lg group-hover:scale-110 transition-transform`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
              </div>

              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                {kpi.title}
              </h3>

              <div className="mb-1">
                <span className="text-3xl font-bold text-gray-900">{kpi.value}</span>
                {kpi.change && (
                  <span className={`ml-2 text-sm font-semibold ${
                    kpi.trend === 'up' ? 'text-green-600' : 'text-gray-600'
                  }`}>
                    {kpi.trend === 'up' ? '↑' : ''} {kpi.change}
                  </span>
                )}
              </div>

              {kpi.subtitle && (
                <p className="text-sm text-orange-600 font-medium">{kpi.subtitle}</p>
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}
