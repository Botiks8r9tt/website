import { Code, Palette, Rocket, Users } from 'lucide-react';

function About() {
  const skills = [
    { icon: Code, title: 'Development', description: 'Expert in modern web technologies' },
    { icon: Palette, title: 'Design', description: 'Creating beautiful user interfaces' },
    { icon: Rocket, title: 'Performance', description: 'Optimized and fast solutions' },
    { icon: Users, title: 'Collaboration', description: 'Strong team player and communicator' },
  ];

  return (
    <div className="max-w-5xl mx-auto mt-12 animate-fade-in">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-12 border border-slate-200 dark:border-slate-700 transition-colors duration-300">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">About Me</h1>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            I'm a dedicated web developer with a passion for creating exceptional digital experiences.
            My journey in software development began several years ago, and since then, I've been
            constantly learning and evolving with the ever-changing landscape of web technologies.
          </p>

          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            I believe in writing clean, maintainable code and creating intuitive user interfaces that
            not only look great but also provide seamless functionality. My approach combines technical
            expertise with creative problem-solving to deliver solutions that exceed expectations.
          </p>

          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            When I'm not coding, I enjoy staying up-to-date with the latest industry trends, contributing
            to open-source projects, and sharing knowledge with the developer community. I'm always excited
            to take on new challenges and collaborate on innovative projects.
          </p>

          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            My goal is to build products that make a positive impact and help businesses achieve their
            objectives through technology. Let's work together to bring your ideas to life!
          </p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div key={skill.title} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <Icon className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{skill.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">{skill.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default About;
