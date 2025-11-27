import { Award, TrendingUp, ExternalLink } from 'lucide-react';

export default function Sidebar() {
  const brands = [
    'Barbeque Nation',
    'Taco Bell',
    'Skechers',
    'Forever 21',
    'Chaayos',
    'Decathlon'
  ];

  return (
    <aside className="w-80 bg-white border-l border-gray-200 p-6">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <Award className="w-5 h-5 text-blue-600" />
          <h3 className="font-semibold text-gray-900">Brands using Xeno</h3>
        </div>

        <div className="space-y-2 mb-4">
          {brands.map((brand, i) => (
            <div
              key={i}
              className="text-sm text-gray-700 pl-7 py-1 hover:text-blue-600 cursor-pointer transition-colors"
            >
              {brand}
            </div>
          ))}
        </div>

        <a
          href="#"
          className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 pl-7 group"
        >
          <span>Learn how top brands drive loyalty & repeat sales with Xeno</span>
          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      <div className="pt-6 border-t border-gray-200">
        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-5 border border-blue-200">
          <div className="flex items-start gap-3 mb-3">
            <div className="bg-blue-600 rounded-lg p-2">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 mb-1">Top 30%</div>
              <p className="text-xs text-gray-600">
                You're performing in the top 30% of retail brands using Xeno
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <p className="text-xs font-medium text-gray-700 mb-2">
              <span className="text-blue-600">Recommendation:</span>
            </p>
            <p className="text-xs text-gray-600 leading-relaxed">
              Optimize your repeat customer reactivation journey for <span className="font-bold text-green-600">+8–12% lift</span>.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
