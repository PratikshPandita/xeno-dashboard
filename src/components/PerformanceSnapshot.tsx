import { TrendingUp, TrendingDown, MessageCircle, Mail, Smartphone, MessageSquare } from 'lucide-react';
import MetricCard from './MetricCard';
import CustomerLifecycleCard from './CustomerLifecycleCard';

export default function PerformanceSnapshot() {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <span className="text-xl">📊</span>
        Performance Snapshot
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <MetricCard
          title="Revenue Influenced by Campaigns"
          value="₹24.8M"
          change="+12%"
          trend="up"
          period="WoW"
          sparklineData={[18, 20, 19, 22, 21, 23, 24.8]}
        />

        <MetricCard
          title="Active Campaigns"
          value="12"
          subtitle="Across multiple channels"
          channels={[
            { icon: MessageCircle, label: 'WhatsApp', count: 4 },
            { icon: Mail, label: 'Email', count: 3 },
            { icon: MessageSquare, label: 'SMS', count: 3 },
            { icon: Smartphone, label: 'Push', count: 2 }
          ]}
        />

        <CustomerLifecycleCard />

        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <h3 className="text-sm font-medium text-gray-600 mb-4">Loyalty Program Snapshot</h3>

          <div className="space-y-4">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-gray-900">2,800</span>
                <span className="flex items-center gap-1 text-sm font-medium text-green-600">
                  <TrendingUp className="w-3 h-3" />
                  18%
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-1">New enrollments</p>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-gray-900">37%</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">Repeat purchase rate</p>

              <div className="mt-3 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: '37%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
