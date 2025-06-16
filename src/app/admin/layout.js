
import YumNavbar from "@/components/navbar";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen bg-gray-900">
      {/* Sidebar */}
      <div className="flex-shrink-0">
        <YumNavbar />
      </div>
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Optional: Header/Topbar */}
        <header className="bg-gray-800 border-b border-gray-700 p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-white">Dashboard</h1>
            {/* Add any header content like search, notifications, user profile */}
          </div>
        </header>
        
        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}