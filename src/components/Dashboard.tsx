import Header from './Header';
import BusinessSummary from './BusinessSummary';
import InsightsAlerts from './InsightsAlerts';
import QuickActionBar from './QuickActionBar';
import TrustMetrics from './TrustMetrics';
import LearningRecommendations from './LearningRecommendations';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="relative">
        <main className="max-w-6xl mx-auto px-6 py-8">
          <BusinessSummary />
          <InsightsAlerts />

          <QuickActionBar />

          <TrustMetrics />
          <LearningRecommendations />
        </main>
      </div>
    </div>
  );
}
