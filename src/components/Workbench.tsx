import { FileText, Clock, CheckCircle, Calendar } from 'lucide-react';

export default function Workbench() {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <span className="text-xl">📝</span>
        Your Workbench
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="w-5 h-5 text-blue-600" />
            <h3 className="font-semibold text-gray-900">In Progress</h3>
          </div>

          <div className="space-y-3">
            <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-start justify-between mb-1">
                <span className="text-sm font-medium text-gray-900">Holiday Loyalty Journey</span>
                <span className="px-2 py-0.5 bg-yellow-100 text-yellow-800 text-xs font-medium rounded">Draft</span>
              </div>
            </div>

            <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-start justify-between mb-1">
                <span className="text-sm font-medium text-gray-900">Abandoned Cart WhatsApp Campaign</span>
                <span className="px-2 py-0.5 bg-orange-100 text-orange-800 text-xs font-medium rounded">Pending Approval</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-5 h-5 text-green-600" />
            <h3 className="font-semibold text-gray-900">Scheduled</h3>
          </div>

          <div className="space-y-3">
            <div className="p-3 bg-green-50 rounded-lg border border-green-200">
              <span className="text-sm font-medium text-gray-900 block mb-2">Black Friday Mega Blast</span>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <Clock className="w-3.5 h-3.5" />
                <span>Tomorrow, 9:30AM</span>
              </div>
              <div className="flex gap-1 mt-2">
                <span className="px-2 py-0.5 bg-white text-gray-700 text-xs font-medium rounded border border-gray-300">WhatsApp</span>
                <span className="px-2 py-0.5 bg-white text-gray-700 text-xs font-medium rounded border border-gray-300">Email</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle className="w-5 h-5 text-blue-600" />
            <h3 className="font-semibold text-gray-900">Recently Sent</h3>
          </div>

          <div className="space-y-3">
            <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
              <span className="text-sm font-medium text-gray-900 block mb-2">Birthday Offer Campaign</span>
              <div className="flex items-center gap-3 text-xs">
                <div className="flex items-center gap-1">
                  <span className="text-gray-600">CTR:</span>
                  <span className="font-bold text-green-600">11.4%</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-gray-600">Revenue:</span>
                  <span className="font-bold text-gray-900">₹3.2M</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
