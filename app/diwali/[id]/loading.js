import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange-100 via-yellow-50 to-white px-6">
      {/* Animated Loader Icon */}
      <div className="flex flex-col items-center gap-6">
        <Loader2 className="animate-spin text-orange-500 w-12 h-12" />
        <h2 className="text-2xl font-bold text-orange-700 text-center">
          Generating your wish...
        </h2>
        <p className="text-gray-600 text-center max-w-md">
          Hold on! Your personalized Diwali wish is being prepared by our servers.
        </p>
      </div>
    </div>
  );
}
