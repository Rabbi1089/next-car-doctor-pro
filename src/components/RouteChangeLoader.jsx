"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function RouteChangeLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 500); // fake loading delay
    return () => clearTimeout(timeout);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed top-0 left-0 w-full bg-white/90 z-50 flex justify-center p-4 shadow">
      <Loader2 className="animate-spin h-6 w-6 text-blue-600" />
      <span className="ml-2">Loading...</span>
    </div>
  );
}
