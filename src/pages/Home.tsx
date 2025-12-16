import { ArrowRight } from 'lucide-react';

function Home() {
  return (
    <div className="max-w-4xl mx-auto mt-20 animate-fade-in">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-12 border border-slate-200 dark:border-slate-700 transition-colors duration-300">
        <div className="space-y-6">
          <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-medium">
            Welcome to my portfolio
          </div>

          <h1 className="text-5xl font-bold text-slate-900 dark:text-white leading-tight">
            Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Your Name</span>
          </h1>

          <p className="text-2xl text-slate-600 dark:text-slate-300 leading-relaxed">
            A passionate developer creating beautiful and functional web experiences
          </p>

          <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
            I specialize in building modern web applications with cutting-edge technologies.
            With a focus on clean code and user-centered design, I transform ideas into digital reality.
          </p>

          <div className="flex gap-4 pt-4">
            <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
              View My Work
              <ArrowRight size={18} />
            </button>
            <button className="px-6 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors">
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
          <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
          <div className="text-slate-600 dark:text-slate-300 font-medium">Years Experience</div>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
          <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
          <div className="text-slate-600 dark:text-slate-300 font-medium">Projects Completed</div>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
          <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
          <div className="text-slate-600 dark:text-slate-300 font-medium">Client Satisfaction</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
