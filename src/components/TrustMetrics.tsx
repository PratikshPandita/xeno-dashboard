import { TrendingUp, CheckCircle, Lock, Award } from 'lucide-react';

export default function TrustMetrics() {
  return (
    <section className="mb-10">
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Trust-Building Metrics</h2>
        <p className="text-gray-600">See why retailers rely on Xeno for their marketing success</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-600 p-2 rounded-lg">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900">Performance Benchmark</h3>
          </div>

          <p className="text-gray-700 mb-3">
            <span className="text-2xl font-bold text-blue-600">76%</span>
          </p>
          <p className="text-sm text-gray-700">
            You're performing better than 76% of similar retail brands using Xeno
          </p>

          <div className="mt-4 space-y-2 text-xs">
            <div className="flex items-center gap-2 text-gray-600">
              <span className="font-medium">Engagement rate percentile</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <span className="font-medium">Repeat purchase uplift</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <span className="font-medium">Loyalty ROI percentile</span>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-green-600 p-2 rounded-lg">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900">Platform Reliability</h3>
          </div>

          <div className="space-y-3">
            <div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-lg font-bold text-gray-900">99.99%</span>
                <span className="text-xs text-gray-600">uptime</span>
              </div>
              <p className="text-xs text-gray-600">Message delivery</p>
            </div>

            <div className="border-t border-gray-100 pt-3">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-lg font-bold text-gray-900">2.8M</span>
                <span className="text-xs text-gray-600">this month</span>
              </div>
              <p className="text-xs text-gray-600">Messages successfully delivered</p>
            </div>

            <div className="border-t border-gray-100 pt-3">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-lg font-bold text-gray-900">89%</span>
                <span className="text-xs text-gray-600">accuracy</span>
              </div>
              <p className="text-xs text-gray-600">AI recommendations</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-purple-600 p-2 rounded-lg">
              <Lock className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900">Security & Privacy</h3>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700">GDPR certified & compliant</span>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700">End-to-end data encryption</span>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700">ISO 27001 certified</span>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700">Regular security audits</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-50 via-blue-50 to-green-50 border border-gray-200 rounded-xl p-8">
        <div className="flex items-center gap-3 mb-4">
          <Award className="w-6 h-6 text-blue-600" />
          <h3 className="text-lg font-bold text-gray-900">Success Outcomes Powered by Xeno</h3>
        </div>

        <p className="text-gray-600 mb-6 text-sm">Aggregated results from retailers using our platform</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">152M+</div>
            <p className="text-sm text-gray-700">Personalized campaigns delivered this year</p>
          </div>

          <div className="text-center border-l border-r border-gray-300">
            <div className="text-3xl font-bold text-green-600 mb-2">4.5x</div>
            <p className="text-sm text-gray-700">Average ROI reported by retailers</p>
          </div>

          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">38%</div>
            <p className="text-sm text-gray-700">Increase in customer retention from automation</p>
          </div>
        </div>

        <p className="text-center text-sm text-gray-600 mt-6 font-medium">
          📈 Xeno drives measurable, repeatable success across retail.
        </p>
      </div>
    </section>
  );
}
