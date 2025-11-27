import { CheckCircle, Clock } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Welcome back, Tanmay
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              Last updated: 2 hours ago
            </p>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-lg border border-green-200">
            <CheckCircle className="w-4 h-4" />
            <span className="font-medium text-sm">All Systems Connected</span>
          </div>
        </div>
      </div>
    </header>
  );
}
