import { Mail, Phone, Github, MapPin } from 'lucide-react';

function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'your.email@example.com',
      href: 'mailto:your.email@example.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/yourusername',
      href: 'https://github.com/yourusername',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Your City, Country',
      href: null,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-12 animate-fade-in">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-12 border border-slate-200 dark:border-slate-700 transition-colors duration-300">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Get In Touch</h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-12">
          Feel free to reach out for collaborations, opportunities, or just to say hello!
        </p>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {('Your Full Name'.split(' ').map(n => n[0]).join(''))}
                </span>
              </div>
              <div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Full Name</div>
                <div className="text-lg font-semibold text-slate-900 dark:text-white">Your Full Name</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactInfo.map((item) => {
            const Icon = item.icon;
            const content = (
              <div className="flex items-start gap-4 p-6 bg-white dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 rounded-xl hover:border-blue-600 dark:hover:border-blue-400 hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                  <Icon className="text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">{item.label}</div>
                  <div className="text-slate-900 dark:text-white font-medium break-all">{item.value}</div>
                </div>
              </div>
            );

            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block"
              >
                {content}
              </a>
            ) : (
              <div key={item.label}>{content}</div>
            );
          })}
        </div>

        <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Let's Connect!</h3>
          <p className="text-slate-600 dark:text-slate-300">
            I'm always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
