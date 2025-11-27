import { TrendingUp, TrendingDown, LucideIcon } from 'lucide-react';

interface Channel {
  icon: LucideIcon;
  label: string;
  count: number;
}

interface MetricCardProps {
  title: string;
  value: string;
  change?: string;
  trend?: 'up' | 'down';
  period?: string;
  subtitle?: string;
  sparklineData?: number[];
  channels?: Channel[];
}

export default function MetricCard({
  title,
  value,
  change,
  trend,
  period,
  subtitle,
  sparklineData,
  channels
}: MetricCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-sm font-medium text-gray-600 mb-3">{title}</h3>

      <div className="flex items-baseline gap-3">
        <span className="text-3xl font-bold text-gray-900">{value}</span>
        {change && (
          <span className={`flex items-center gap-1 text-sm font-medium ${
            trend === 'up' ? 'text-green-600' : 'text-red-600'
          }`}>
            {trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
            {change}
            {period && <span className="text-gray-500 font-normal">{period}</span>}
          </span>
        )}
      </div>

      {subtitle && (
        <p className="text-sm text-gray-600 mt-2">{subtitle}</p>
      )}

      {sparklineData && (
        <div className="mt-4 h-12 flex items-end gap-1">
          {sparklineData.map((value, i) => {
            const maxValue = Math.max(...sparklineData);
            const height = (value / maxValue) * 100;
            return (
              <div
                key={i}
                className="flex-1 bg-blue-500 rounded-t opacity-70 hover:opacity-100 transition-opacity"
                style={{ height: `${height}%` }}
              />
            );
          })}
        </div>
      )}

      {channels && (
        <div className="mt-4 flex flex-wrap gap-2">
          {channels.map((channel, i) => (
            <div
              key={i}
              className="flex items-center gap-1.5 px-2.5 py-1.5 bg-gray-50 rounded-lg text-xs font-medium text-gray-700"
            >
              <channel.icon className="w-3.5 h-3.5" />
              <span>{channel.label}</span>
              <span className="text-gray-900">{channel.count}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
