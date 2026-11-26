import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main id="main-content" role="main" className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-lg">
        <h1 className="mb-2 text-6xl font-extrabold text-[#1155CC]">404</h1>
        <h2 className="mb-3 text-xl font-bold text-slate-900">Page Not Found</h2>
        <p className="mb-6 text-sm text-slate-600">
          The requested page could not be located. Explore Sajesh Adeya's enterprise architecture case studies and credentials.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <a href="/" className="rounded-lg bg-[#1155CC] px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-[#0E44A3] transition-colors">
            Return Home
          </a>
          <a href="/projects" className="rounded-lg border border-slate-200 bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-200 transition-colors">
            View Projects
          </a>
          <a href="/about" className="rounded-lg border border-slate-200 bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-200 transition-colors">
            About & Contact
          </a>
        </div>
        <div className="border-t border-slate-100 pt-4 text-xs text-slate-500">
          <a href="/terms" className="hover:text-[#1155CC]">Terms</a> • <a href="/privacy" className="hover:text-[#1155CC]">Privacy</a> • <a href="/llms.txt" className="hover:text-[#1155CC]">llms.txt</a>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
