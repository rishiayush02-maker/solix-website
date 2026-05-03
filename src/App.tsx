/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Bolt, 
  ChevronRight, 
  Sun, 
  History, 
  Cpu, 
  Gauge, 
  CloudRain, 
  Award, 
  CheckCircle, 
  Leaf, 
  Thermometer,
  Battery,
  Phone,
  MessageCircle,
  Menu,
  X
} from 'lucide-react';

// --- Constants & Types ---
const IMAGES = {
  heroBattery: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNKs-uWxEAym2tDQyEXwWqccacxu9Er8xeeWqZ2qLRXv5sgW_J-SpL6VlxZHvUX9zL20T8Ud86oHKvjYtSe0GhVhkWwFw5kyGjxhbDa0dOEgKXufPs3mWWjOoXfeqjP5bHjvuXSUPjxaZx7pcbeg4YsiuSJzd0uiKHQEVYkbyoeoC5Iy4uRQqYGU0UpE63kQBeCocM4wjdrG8OeQYa5V7hGmI7VO3QhzuZjNDjyLSPriUefU9LLX6KLf-O8niOUyKdOAFyNjsHKF4",
  eRickshaw: "https://lh3.googleusercontent.com/aida-public/AB6AXuCeDP4CHvmtZYvsl_8_UwCVhhxTu8JA7oHUNcN8wzyWIZD0abJsCyXxSgDtXxLsaDr-HpCRRYCTvLxZQr6CKD5GX8V2Ou2TZwlKeTtQINR0dKiLHN3-PepMQFgMICIyVyF9GDxSt5YNJYw1CQYXd3x2RhdBc9Kx8u8dxQPVQFtt9uY_3PfhAO-WbQ8KT6SBI05Rl_8VMiWbL4xaV_DOgZnWD_oJgD1ZHuWydSFYYdcOKStGpdIGoGgV6mYQwI4fYxnpkd0xS-4NIHs",
  homeSolar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOX6Pv8Ba3ftSWIHIcj4mOnNxo5tLiGkwuCgXv09d7YfG29MRvgH6JMhhrew1MQPwyLffQqnTnBW63Psqpe_t1YN-3ZFmh86KTi6SRCYR5qSRPJ9werv_H1qgBOvrN9fBeUtyktYRMtxXxCu9xdJJWqv1jWBTUrMb4X1JeLK86G-3ymv36EwRZ4EJudYKE4iTn9MIamuJGA8SRTUCjxsw6poC9W-PR2ZYmItjleqj0KiE_tbmJGSvaT_18PMCzNWxHRH-1Tg1gdA8",
  avatars: [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBxeDTLXcADv4mDOEf6Y_N4bhMN27x-NzDzWweVcEOug8fNNFNBPC9vAOBQARJcU7cUE4rU_0VqtJJGyoKAv9jgagrja7RF52I-ek6u9ELgDgk6FS4gCFNQ1v1r4Wh9Xm82ecAAjwAVJIWQyNv0HWRugDOkXFh0EIklzjsMldK5KEBI15o40cMt42VutFcdnDGRcUwspXty6WsfOEMZa-1p8Cpoinim5fb6G_OejQxqBUyGCWvQWpW9u9EZYH7YmO8IMsvyd5oiYMQ",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD8Wzbb_oIn0h-QrqvJW-gaxy8ryYPGEWpjdy8NBz2mzoFXFuyhNGWpY0ZvFIpRfBTHG1I_B0uGzrmvOfxH1EW_qYmkDO6DQXYN3kzoSVVh3VWwUBS0SB34oGhu_04_E5kKl5ywYO_054QeRIbCkDMgN8aHnN8NWgvHeXC9FmtWi2rglSWD-GqGJLk48GgSmon3tEnwN8NUavY6N2BqsSm_NI4su0oXcGF2YzTKUEKhnGrAnmB4OcJAj0j2I1ipvHzFLnHTqyLfesg",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA_-YRSkFAXJwx1E-ONP0JFkvJrWJV7DWLvjZ-DfrU2H67EWfcGZt6Wfz5g8VZ6APVcIFeHcRvm6YRcwurHhN3vkOi6E2ZYSmvDoBjPHDtP3FAxhsSujy2yJiSZEOsb813lEK6DscIiv1XHnmW2GrnbvFSL3AL4VfRn8F_6h3GIuwVGTmFA1mFQsF4KlxI3HAPQ9T74Ph4v2G5EeLtuQecKlRu-my705tVTJNb9zKDsrQEV-Bz462YTtfOavy0WR92VpoPTxsvD6Zc"
  ]
};

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Bolt className="text-brand-orange w-8 h-8 fill-brand-orange" />
          <span className="text-2xl font-display font-bold tracking-widest">SOLIX</span>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-display uppercase tracking-wider text-zinc-400 hover:text-white transition-colors">Solutions</a>
          <a href="#" className="text-sm font-display uppercase tracking-wider text-zinc-400 hover:text-white transition-colors">Support</a>
          <button className="bg-brand-orange text-white px-6 py-2.5 rounded-full font-display font-bold tracking-tight active:scale-95 transition-transform">
            Get Quote
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0A0A0A] border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              <a href="#" className="text-lg font-display uppercase font-bold text-white">Solutions</a>
              <a href="#" className="text-lg font-display uppercase font-bold text-white">Support</a>
              <button className="bg-brand-orange text-white w-full py-4 rounded-xl font-display font-bold">
                Get Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-40 pb-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs font-display font-bold text-brand-orange tracking-[0.3em] uppercase mb-4"
        >
          Est. 2024
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-8"
        >
          The Future of Energy <br className="hidden md:block" /> is <span className="text-brand-orange">Lithium</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-12 font-display leading-relaxed"
        >
          Uncompromising performance and safety. SOLIX lithium-ion solutions power the next generation of homes and e-mobility with clinical precision.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mb-20"
        >
          <button className="bg-brand-orange text-white px-10 py-4 rounded-full text-sm font-display font-bold hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-brand-orange/20">
            Explore Solutions
          </button>
          <button className="bg-surface-container text-white px-10 py-4 rounded-full text-sm font-display font-bold hover:bg-surface-high active:scale-95 transition-all border border-white/5">
            View Specs
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="relative w-full max-w-4xl"
        >
          <img 
            src={IMAGES.heroBattery} 
            alt="SOLIX Battery Unit" 
            className="w-full h-auto rounded-[2rem] object-cover shadow-2xl opacity-90 border border-white/5"
            referrerPolicy="no-referrer"
          />
          
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 glass-card border border-white/10 px-10 py-5 rounded-2xl flex items-center gap-8 shadow-2xl whitespace-nowrap">
            <div className="text-left">
              <p className="text-[10px] font-display font-bold text-zinc-500 tracking-widest uppercase mb-1">Lifespan</p>
              <p className="text-2xl font-display font-bold text-brand-orange">10+ Years</p>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="text-left">
              <p className="text-[10px] font-display font-bold text-zinc-500 tracking-widest uppercase mb-1">Charging</p>
              <p className="text-2xl font-display font-bold text-brand-yellow">3X Faster</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ProductCard = ({ icon: Icon, title, tag, desc, items, buttonText, buttonType = 'primary' }: any) => (
  <div className="bg-surface-container p-8 md:p-10 rounded-[2rem] border border-white/5 hover:border-brand-orange/20 transition-all group flex flex-col h-full">
    <div className="mb-8 flex justify-between items-start">
      <div className={`p-4 rounded-2xl ${tag === 'HOME / SOLAR' ? 'bg-brand-yellow/10' : 'bg-brand-orange/10'}`}>
        <Icon className={`w-8 h-8 ${tag === 'HOME / SOLAR' ? 'text-brand-yellow fill-brand-yellow/20' : 'text-brand-orange fill-brand-orange/20'}`} />
      </div>
      <span className={`px-4 py-1.5 rounded-full text-[10px] font-display font-bold tracking-wider uppercase ${tag === 'HOME / SOLAR' ? 'bg-zinc-800 text-brand-yellow' : 'bg-brand-orange/20 text-brand-orange'}`}>
        {tag}
      </span>
    </div>
    
    <h3 className="text-3xl font-display font-bold mb-4">{title}</h3>
    <p className="text-zinc-400 mb-8 leading-relaxed">{desc}</p>
    
    <div className="space-y-5 mb-10 flex-grow">
      {items.map((item: any, i: number) => (
        <div key={i} className="flex items-center gap-4">
          <item.icon className="w-5 h-5 text-zinc-500" />
          <span className="text-sm font-medium text-zinc-300">{item.text}</span>
        </div>
      ))}
    </div>
    
    <button className={`w-full py-4 rounded-xl font-display font-bold text-sm transition-all flex items-center justify-center gap-2 ${
      buttonType === 'primary' 
        ? 'border-2 border-white/10 text-white hover:bg-white hover:text-black' 
        : 'border-2 border-brand-orange/50 text-brand-orange hover:bg-brand-orange hover:text-white'
    }`}>
      {buttonText}
      <ChevronRight className="w-4 h-4" />
    </button>
  </div>
);

const Products = () => {
  return (
    <section className="py-24 px-6 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Engineered Performance</h2>
          <p className="text-zinc-500 font-display">Specialized cells for every application.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ProductCard 
            icon={Sun}
            title="51.2V 100Ah LFP"
            tag="HOME / SOLAR"
            desc="Seamless energy storage for residential solar systems and essential backup."
            items={[
              { icon: Battery, text: "5.12 kWh Energy Capacity" },
              { icon: History, text: "6,000+ Cycle Life @ 80% DoD" },
              { icon: Cpu, text: "Smart BMS Integrated" }
            ]}
            buttonText="Download Datasheet"
          />
          <ProductCard 
            icon={Gauge}
            title="60V 100Ah High-Density"
            tag="E-MOBILITY"
            desc="Heavy-duty power for commercial E-Rickshaws. Engineered for Indian roads."
            items={[
              { icon: Gauge, text: "100km+ Range per Charge" },
              { icon: CloudRain, text: "IP67 Waterproof Protection" },
              { icon: Award, text: "3 Years Comprehensive Warranty" }
            ]}
            buttonText="Bulk Pricing"
            buttonType="secondary"
          />
        </div>
      </div>
    </section>
  );
};

const UseCases = () => {
  return (
    <section className="py-24 px-6 bg-surface-base">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[500px]">
          <div className="relative rounded-[2.5rem] overflow-hidden group border border-white/5">
            <img 
              src={IMAGES.eRickshaw} 
              alt="E-Rickshaw Fleet" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-60" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute bottom-10 left-10 text-white">
              <h4 className="text-3xl font-display font-bold mb-3 text-brand-orange">Efficient E-Rickshaws</h4>
              <p className="text-zinc-300 max-w-sm font-display text-sm leading-relaxed">
                Maximizing daily earnings with rapid charging and extended range for commercial fleets.
              </p>
            </div>
          </div>
          
          <div className="relative rounded-[2.5rem] overflow-hidden group border border-white/5">
            <img 
              src={IMAGES.homeSolar} 
              alt="Home Solar" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-60" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute bottom-10 left-10 text-white">
              <h4 className="text-3xl font-display font-bold mb-3 text-brand-yellow">Uninterrupted Home Energy</h4>
              <p className="text-zinc-300 max-w-sm font-display text-sm leading-relaxed">
                Smart backup solutions that detect outages in milliseconds, keeping your comfort online.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Comparison = () => {
  const rows = [
    { feature: "Lifespan", lead: "1-2 Years", solix: "5-7 Years" },
    { feature: "Charging", lead: "8-10 Hours", solix: "3-4 Hours", highlight: "yellow" },
    { feature: "Maintenance", lead: "High (Water topping)", solix: "Zero Maintenance", highlight: "green" },
    { feature: "Efficiency", lead: "Low (~70%)", solix: "High (98%)" },
    { feature: "Cost Over Time", lead: "High Replacement Cost", solix: "30% Lower Total Cost", highlight: "orange" },
  ];

  return (
    <section className="py-24 px-6 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Upgrade to Lithium</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto font-display">
            Why the world is leaving lead-acid behind. Compare the specs that matter for your bottom line.
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-separate border-spacing-0">
            <thead>
              <tr className="text-[10px] font-display font-bold tracking-[0.2em] uppercase text-zinc-500">
                <th className="py-8 px-6 border-b border-white/10">Feature</th>
                <th className="py-8 px-6 border-b border-white/10">Lead-Acid</th>
                <th className="py-8 px-8 border-t-2 border-x-2 border-brand-orange bg-white/5 rounded-t-3xl text-brand-orange">SOLIX Lithium</th>
              </tr>
            </thead>
            <tbody className="text-sm font-medium">
              {rows.map((row, i) => (
                <tr key={i} className="group">
                  <td className="py-6 px-6 border-b border-white/5 text-zinc-300 font-display">{row.feature}</td>
                  <td className="py-6 px-6 border-b border-white/5 text-zinc-500">{row.lead}</td>
                  <td className={`py-6 px-8 border-x-2 border-brand-orange bg-white/5 font-bold font-display ${
                    i === rows.length - 1 ? 'border-b-2 rounded-b-3xl' : 'border-b border-white/5'
                  }`}>
                    <span className={
                      row.highlight === 'yellow' ? 'text-brand-yellow' : 
                      row.highlight === 'green' ? 'text-brand-green' : 
                      row.highlight === 'orange' ? 'text-brand-orange' : 'text-white'
                    }>
                      {row.solix}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const items = [
    { title: "Long Life", desc: "LFP cells designed for a decade of daily usage.", icon: CheckCircle, color: "text-brand-green" },
    { title: "Fast Charging", desc: "Intelligent BMS allows for rapid current intake safely.", icon: Bolt, color: "text-brand-yellow" },
    { title: "Eco-friendly", desc: "Lead-free, non-toxic energy storage for a cleaner future.", icon: Leaf, color: "text-brand-green" },
    { title: "India Ready", desc: "Thermal management optimized for 50°C+ conditions.", icon: Thermometer, color: "text-brand-orange" }
  ];

  return (
    <section className="py-24 px-6 bg-surface-base">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((item, i) => (
          <div key={i} className="p-8 rounded-3xl bg-surface-container border border-white/5 text-center group">
            <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center mx-auto mb-8 transition-transform group-hover:scale-110">
              <item.icon className={`w-8 h-8 ${item.color}`} />
            </div>
            <h5 className="text-xl font-display font-bold mb-3">{item.title}</h5>
            <p className="text-sm text-zinc-500 leading-relaxed font-display">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 px-6 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-1">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Trusted by 5,000+ Drivers & Homes</h2>
          <p className="text-zinc-500 font-display mb-10 text-lg">Join the community transition to intelligent power.</p>
          <div className="flex -space-x-4">
            {IMAGES.avatars.map((url, i) => (
              <img key={i} src={url} className="w-14 h-14 rounded-full border-4 border-surface-base object-cover" alt="User" referrerPolicy="no-referrer" />
            ))}
            <div className="w-14 h-14 rounded-full bg-brand-orange text-white border-4 border-surface-base flex items-center justify-center font-display font-bold text-xs ring-4 ring-brand-orange/20">
              +5k
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-surface-container p-10 rounded-[2.5rem] border border-white/5 italic text-zinc-400 font-display text-lg leading-relaxed relative">
            <span className="text-7xl text-white/5 absolute -top-4 left-4 font-serif">"</span>
            "The range on my e-rickshaw has doubled since switching to SOLIX. I spend less time charging and more time earning. Truly a game changer."
            <div className="mt-10 flex items-center gap-5 not-italic">
              <div className="w-12 h-12 rounded-full bg-surface-high border border-white/10" />
              <div>
                <p className="font-display font-bold text-white uppercase tracking-wider text-sm">Rajesh Kumar</p>
                <p className="text-[10px] uppercase font-bold tracking-widest text-brand-orange">Fleet Owner, Delhi</p>
              </div>
            </div>
          </div>
          
          <div className="bg-surface-container p-10 rounded-[2.5rem] border border-white/5 italic text-zinc-400 font-display text-lg leading-relaxed relative">
            <span className="text-7xl text-white/5 absolute -top-4 left-4 font-serif">"</span>
            "Reliability was my main concern for our solar setup. SOLIX has been flawless for over a year now. The backup switch is instant."
            <div className="mt-10 flex items-center gap-5 not-italic">
              <div className="w-12 h-12 rounded-full bg-surface-high border border-white/10" />
              <div>
                <p className="font-display font-bold text-white uppercase tracking-wider text-sm">Anita Desai</p>
                <p className="text-[10px] uppercase font-bold tracking-widest text-brand-yellow">Homeowner, Bangalore</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  return (
    <section className="py-24 px-6 solix-gradient relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03] pointer-events-none">
        <Bolt className="w-full h-full stroke-[1px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 leading-tight">
            Power Your Future <br /> with <span className="text-brand-orange font-black">SOLIX</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-12 max-w-md font-display leading-relaxed">
            Our engineers are ready to help you design the perfect power solution. Connect with us for a custom quote today.
          </p>
          
          <a href="#" className="inline-flex items-center gap-4 bg-brand-green/20 hover:bg-brand-green/30 text-brand-green border border-brand-green/30 px-10 py-5 rounded-full font-display font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-brand-green/5">
            <MessageCircle className="w-6 h-6 fill-brand-green/20" />
            WhatsApp Business
          </a>
        </div>
        
        <div className="bg-[#1C1C1C] p-10 rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-brand-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-display font-black uppercase text-zinc-500 tracking-[0.2em]">Full Name</label>
                <input className="w-full bg-[#252525] border-none rounded-2xl py-4 px-6 text-white text-sm focus:ring-2 focus:ring-brand-orange transition-all placeholder:text-zinc-600" placeholder="John Doe" type="text" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-display font-black uppercase text-zinc-500 tracking-[0.2em]">Phone Number</label>
                <input className="w-full bg-[#252525] border-none rounded-2xl py-4 px-6 text-white text-sm focus:ring-2 focus:ring-brand-orange transition-all placeholder:text-zinc-600" placeholder="+91 98765 43210" type="tel" />
              </div>
            </div>
            
            <div className="space-y-3">
              <label className="text-[10px] font-display font-black uppercase text-zinc-500 tracking-[0.2em]">Application Type</label>
              <select className="w-full bg-[#252525] border-none rounded-2xl py-4 px-6 text-white text-sm focus:ring-2 focus:ring-brand-orange transition-all appearance-none">
                <option>Home/Solar Storage</option>
                <option>E-Rickshaw Fleet</option>
                <option>Industrial Backup</option>
              </select>
            </div>
            
            <div className="space-y-3">
              <label className="text-[10px] font-display font-black uppercase text-zinc-500 tracking-[0.2em]">Message</label>
              <textarea className="w-full bg-[#252525] border-none rounded-2xl py-4 px-6 text-white text-sm focus:ring-2 focus:ring-brand-orange transition-all placeholder:text-zinc-600 resize-none" placeholder="Tell us about your requirements..." rows={4}></textarea>
            </div>
            
            <button className="w-full py-5 bg-brand-orange text-white font-display font-black uppercase tracking-widest text-xs rounded-2xl hover:brightness-110 active:scale-[0.98] transition-all shadow-2xl shadow-brand-orange/20">
              Request Callback
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] px-6 py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
        <div className="space-y-8">
          <div className="flex items-center gap-2">
            <Bolt className="text-brand-orange w-6 h-6 fill-brand-orange" />
            <span className="text-xl font-display font-black tracking-widest">SOLIX</span>
          </div>
          <p className="text-[10px] font-display font-bold uppercase tracking-[0.2em] text-zinc-600 max-w-[200px]">
            © 2024 SOLIX Energy Storage. All rights reserved.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-24">
          <div className="space-y-6">
            <h6 className="text-[10px] font-display font-bold tracking-[0.3em] uppercase text-brand-orange">Solutions</h6>
            <ul className="space-y-4 text-[10px] font-display font-bold tracking-[0.2em] uppercase text-zinc-500">
              <li className="hover:text-white cursor-pointer transition-colors">Residential</li>
              <li className="hover:text-white cursor-pointer transition-colors">Commercial</li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h6 className="text-[10px] font-display font-bold tracking-[0.3em] uppercase text-brand-orange">Support</h6>
            <ul className="space-y-4 text-[10px] font-display font-bold tracking-[0.2em] uppercase text-zinc-500">
              <li className="hover:text-white cursor-pointer transition-colors">Center</li>
              <li className="hover:text-white cursor-pointer transition-colors">Specs</li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h6 className="text-[10px] font-display font-bold tracking-[0.3em] uppercase text-brand-orange">Legal</h6>
            <ul className="space-y-4 text-[10px] font-display font-bold tracking-[0.2em] uppercase text-zinc-500">
              <li className="hover:text-white cursor-pointer transition-colors">Privacy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Products />
      <UseCases />
      <Comparison />
      <Features />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}

