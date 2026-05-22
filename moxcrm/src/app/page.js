"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const features = [
    {
      icon: "👥",
      title: "Contact Management",
      desc: "Organize all your customers and leads in one place.",
    },
    {
      icon: "📊",
      title: "Sales Pipeline",
      desc: "Track deals and forecast revenue with ease.",
    },
    {
      icon: "📅",
      title: "Task & Calendar",
      desc: "Never miss a follow-up with smart scheduling.",
    },
    {
      icon: "📈",
      title: "Analytics & Reports",
      desc: "Make data-driven decisions with live dashboards.",
    },
    {
      icon: "🔔",
      title: "Smart Notifications",
      desc: "Stay updated with real-time alerts and reminders.",
    },
    {
      icon: "🔒",
      title: "Secure & Reliable",
      desc: "Enterprise-grade security for your business data.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white font-sans overflow-x-hidden">

      {/* Animated background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -right-40 w-80 h-80 bg-cyan-400 opacity-15 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-indigo-400 opacity-10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-5 border-b border-white/10 backdrop-blur-sm bg-white/5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/40">
            <span className="text-white font-bold text-sm">M</span>
          </div>
          <span className="text-xl font-bold tracking-wide">
            Mox<span className="text-cyan-400">CRM</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-blue-200">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <button className="bg-cyan-400 hover:bg-cyan-300 text-blue-950 font-semibold text-sm px-5 py-2 rounded-full transition-all duration-200 shadow-md hover:shadow-cyan-400/40 hover:scale-105">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <section
        className={`relative z-10 flex flex-col items-center justify-center text-center px-6 py-32 transition-all duration-700 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-cyan-300 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse inline-block" />
          Customer Relationship Management
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          Welcome to{" "}
          <span className="relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
              MoxCRM
            </span>
            <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full" />
          </span>
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-blue-200 leading-relaxed mb-10">
          Manage your customers, track your sales pipeline, and grow your
          business — all from one powerful, easy-to-use platform.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <button href="feature" className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-blue-500/40 hover:shadow-cyan-400/50 hover:scale-105 text-base">
             Start for Free
          </button>
          <button className="border border-white/30 hover:border-white/60 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200 hover:bg-white/10 text-base backdrop-blur-sm">
             Learn More
          </button>
        </div>

        {/* Stats row */}
        <div className="mt-16 flex flex-wrap justify-center gap-12 text-center">
          {[
            { value: "10K+", label: "Happy Customers" },
            { value: "99.9%", label: "Uptime" },
            { value: "50+", label: "Integrations" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold text-cyan-300">{stat.value}</p>
              <p className="text-sm text-blue-300 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="relative z-10 flex items-center gap-4 px-8 max-w-5xl mx-auto">
        <div className="flex-1 h-px bg-white/10" />
        <span className="text-blue-400 text-xs uppercase tracking-widest">Features</span>
        <div className="flex-1 h-px bg-white/10" />
      </div>

      {/* Features Section */}
      <section id="features" className="relative z-10 px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Everything you need to{" "}
          <span className="text-cyan-300">grow faster</span>
        </h2>
        <p className="text-center text-blue-300 mb-14 max-w-xl mx-auto">
          MoxCRM gives your team the tools to build stronger customer
          relationships and close more deals.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-cyan-400/40 transition-all duration-300 backdrop-blur-sm hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/50"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 border border-cyan-400/20 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-200">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-blue-300 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section id="about" className="relative z-10 px-6 py-16 max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-400/30 rounded-3xl p-10 text-center backdrop-blur-sm">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to transform your{" "}
            <span className="text-cyan-300">business?</span>
          </h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">
            Join thousands of businesses already using MoxCRM to manage
            relationships, boost sales, and delight customers.
          </p>
          <button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-white font-semibold px-10 py-4 rounded-full transition-all duration-200 shadow-lg hover:scale-105 text-base">
            Get Started — It&apos;s Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="relative z-10 border-t border-white/10 mt-10 px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-blue-400">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
            <span className="text-white font-bold text-xs">M</span>
          </div>
          <span className="font-semibold text-white">MoxCRM</span>
          <span className="ml-2">© 2026 All rights reserved.</span>
        </div>
        <p className="text-blue-400">
          Built to power your customer relationships 
        </p>
      </footer>
    </div>
  );
}
