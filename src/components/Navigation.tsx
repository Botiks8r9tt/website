import { Home, User, Briefcase, Mail, Sun, Moon } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

function Navigation({ currentPage, setCurrentPage, isDark, setIsDark }: NavigationProps) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <nav className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-slate-200 dark:border-slate-700 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Portfolio
          </div>

          <div className="flex gap-2 items-center">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    currentPage === item.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </button>
              );
            })}

            <div className="ml-4 pl-4 border-l border-slate-200 dark:border-slate-700">
              <button
                onClick={() => setIsDark(!isDark)}
                className="relative inline-flex items-center justify-center w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200 group"
              >
                <div className="relative w-5 h-5">
                  <Sun
                    size={18}
                    className={`absolute inset-0 transition-all duration-300 ${
                      isDark ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
                    }`}
                  />
                  <Moon
                    size={18}
                    className={`absolute inset-0 transition-all duration-300 ${
                      isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
                    }`}
                  />
                </div>
                <span className="absolute inset-0 rounded-lg bg-blue-400 dark:bg-amber-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
