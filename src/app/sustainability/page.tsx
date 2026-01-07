// app/sustainability-new/page.tsx
'use client';

import { useState } from 'react';

export default function SustainabilityPage() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
    // Add your newsletter logic here
  };

  return (
    <div className="dark">
      {/* Head section for fonts and styles */}
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <style>
          {`
            ::-webkit-scrollbar {
              width: 8px;
            }
            ::-webkit-scrollbar-track {
              background: #112116;
            }
            ::-webkit-scrollbar-thumb {
              background: #244730;
              border-radius: 4px;
            }
            ::-webkit-scrollbar-thumb:hover {
              background: #19e65e;
            }
          `}
        </style>
      </head>

      <body className="bg-gray-50 dark:bg-[#112116] text-gray-900 dark:text-white font-sans overflow-x-hidden">
        {/* Top Navigation */}
        <header className="fixed top-0 w-full z-50 bg-[#112217]/80 backdrop-blur-md border-b border-[#244730]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 text-[#19e65e]">
                  <span className="material-symbols-outlined text-2xl">eco</span>
                </div>
                <h2 className="text-white text-lg font-bold tracking-tight">EcoFuture</h2>
              </div>
              
              {/* Desktop Nav */}
              <nav className="hidden md:flex items-center gap-8">
                <a className="text-gray-300 hover:text-[#19e65e] text-sm font-medium transition-colors" href="#">
                  Our Vision
                </a>
                <a className="text-gray-300 hover:text-[#19e65e] text-sm font-medium transition-colors" href="#">
                  Impact
                </a>
                <a className="text-gray-300 hover:text-[#19e65e] text-sm font-medium transition-colors" href="#">
                  Goals
                </a>
                <a className="text-gray-300 hover:text-[#19e65e] text-sm font-medium transition-colors" href="#">
                  Reports
                </a>
              </nav>
              
              {/* CTA */}
              <div className="hidden md:flex">
                <button className="flex items-center justify-center rounded-lg h-9 px-4 bg-[#19e65e] text-[#112217] text-sm font-bold hover:opacity-90 transition-all">
                  Contact Us
                </button>
              </div>
              
              {/* Mobile Menu Icon */}
              <div className="md:hidden text-white">
                <span className="material-symbols-outlined">menu</span>
              </div>
            </div>
          </div>
        </header>

        <main className="flex flex-col min-h-screen pt-16">
          {/* Hero Section */}
          <section className="relative flex flex-col items-center justify-center min-h-[85vh] px-4 py-20 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-b from-[#112116]/60 via-[#112116]/80 to-[#112116]"></div>
              <img
                alt="Lush green forest landscape from above"
                className="w-full h-full object-cover opacity-60"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoRyqX5pa0R27EoHScBwR4AXAOiQ3OzqUL-OqUy9vqJzkofzR0McalEcxcKjC99Dn9O5wTU2f_n0PzMn-guBSlFdcW4QNu5k87p4ky57Ae_YG7GG9PS2VuX-D8Cw4Fb8_mt_9meoUHCrnC01LP4q-1AN5lXn7hWn3wmHgSNL1R28XXr1uS4eVPhphGwVISmE17koCTbDdPUPZ9bZzlK291Q16a2IcE7DvxkEFydl9qtbHtzVyYcfI9IZTkIijS8JkOuIk9fnDKu6o"
              />
            </div>
            
            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#19e65e]/30 bg-[#19e65e]/10 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#19e65e] animate-pulse"></span>
                <span className="text-xs font-semibold tracking-wide text-[#19e65e] uppercase">
                  Sustainability Report 2024
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[1.1]">
                Innovating for a <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#19e65e] to-emerald-400">
                  Greener Tomorrow
                </span>
              </h1>
              
              <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 font-light leading-relaxed">
                We are redefining industry standards by integrating sustainable practices into every layer of our operations. Our commitment is absolute.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <button className="h-12 px-8 rounded-lg bg-[#19e65e] text-[#112116] font-bold hover:bg-white transition-colors duration-300">
                  Explore Initiatives
                </button>
                <button className="h-12 px-8 rounded-lg border border-gray-600 hover:border-white text-white font-medium hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-sm">play_circle</span>
                  Watch Our Story
                </button>
              </div>
            </div>
            
            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 animate-bounce">
              <span className="text-xs uppercase tracking-widest text-gray-400">Scroll</span>
              <span className="material-symbols-outlined text-gray-400">keyboard_arrow_down</span>
            </div>
          </section>

          {/* Our Vision Section */}
          <section className="py-24 bg-[#112116] relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-[#19e65e] font-medium tracking-wide uppercase text-sm mb-3">
                      Our Vision
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                      Ethical Responsibility <br /> Beyond Compliance
                    </h3>
                  </div>
                  
                  <p className="text-gray-400 text-lg leading-relaxed">
                    We believe that business growth and environmental stewardship must go hand in hand. Our vision is a world where every product created leaves a positive footprint, restoring more than it extracts.
                  </p>
                  
                  <div className="space-y-6 pt-4">
                    <div className="flex gap-4 items-start">
                      <div className="bg-[#19e65e]/10 p-3 rounded-lg text-[#19e65e] mt-1">
                        <span className="material-symbols-outlined">recycling</span>
                      </div>
                      <div>
                        <h4 className="text-white text-xl font-semibold">Circular Economy</h4>
                        <p className="text-gray-500 mt-1">
                          Redesigning lifecycles to eliminate waste and keep materials in use.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 items-start">
                      <div className="bg-[#19e65e]/10 p-3 rounded-lg text-[#19e65e] mt-1">
                        <span className="material-symbols-outlined">water_drop</span>
                      </div>
                      <div>
                        <h4 className="text-white text-xl font-semibold">Water Stewardship</h4>
                        <p className="text-gray-500 mt-1">
                          Returning 100% of water used in manufacturing back to nature, cleaner than we found it.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-6">
                    <a className="inline-flex items-center text-[#19e65e] font-bold hover:underline underline-offset-4 decoration-2" href="#">
                      Read our Full Manifesto
                      <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                    </a>
                  </div>
                </div>
                
                <div className="relative h-[600px] rounded-2xl overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    alt="Close up of a green leaf with water droplets"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYMMRNH_CwgAFUr_s7FneV5W0OZlJT9vG9KrtCQVg_C_oEPGEm-wvIP8fSWLhNC7Il0fTpbwbgUKC_e3JPnq4VoRHAUhDTyjLkqjyENkR99Hhu4eMjZg7s1NcVMSORxp343LM1j5l4usDbTW1-Tc5rvAk_BF-YB0pjOVREjUGJSPYSc0E4m4mwViffoRuMVOcpFjI-IwzmcRA7P_0_K2SsV6NBOUtfjKgOUBkDIM15Tmc7uHiax5uvnvey4yT8hwIQ_RDDGR7t904"
                  />
                  
                  <div className="absolute bottom-8 left-8 right-8 z-20">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl">
                      <p className="text-white font-serif italic text-xl">
                        &quot;The greatest threat to our planet is the belief that someone else will save it.&quot;
                      </p>
                      <p className="text-[#19e65e] mt-4 text-sm font-bold uppercase tracking-wider">
                        — Robert Swan
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Impact Metrics Section */}
          <section className="py-24 bg-[#0d1a11] border-y border-[#1c3625]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-16 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Measurable Impact</h2>
                <p className="text-gray-400">
                  Transparency is key to our mission. Here are the metrics that define our progress towards a zero-carbon future.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Card 1 */}
                <div className="bg-[#112116] p-8 rounded-2xl border border-[#244730] hover:border-[#19e65e]/50 transition-colors group">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-[#19e65e]/10 rounded-lg text-[#19e65e]">
                      <span className="material-symbols-outlined text-3xl">forest</span>
                    </div>
                    <span className="text-xs font-mono text-gray-500 bg-[#0d1a11] px-2 py-1 rounded">
                      +12% YoY
                    </span>
                  </div>
                  <h3 className="text-5xl font-black text-white mb-2 group-hover:text-[#19e65e] transition-colors">
                    1.2M
                  </h3>
                  <p className="text-gray-400 font-medium">Trees Planted Globally</p>
                </div>
                
                {/* Card 2 */}
                <div className="bg-[#112116] p-8 rounded-2xl border border-[#244730] hover:border-[#19e65e]/50 transition-colors group">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-[#19e65e]/10 rounded-lg text-[#19e65e]">
                      <span className="material-symbols-outlined text-3xl">bolt</span>
                    </div>
                    <span className="text-xs font-mono text-gray-500 bg-[#0d1a11] px-2 py-1 rounded">
                      Target 100%
                    </span>
                  </div>
                  <h3 className="text-5xl font-black text-white mb-2 group-hover:text-[#19e65e] transition-colors">
                    85%
                  </h3>
                  <p className="text-gray-400 font-medium">Renewable Energy Usage</p>
                </div>
                
                {/* Card 3 */}
                <div className="bg-[#112116] p-8 rounded-2xl border border-[#244730] hover:border-[#19e65e]/50 transition-colors group">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-[#19e65e]/10 rounded-lg text-[#19e65e]">
                      <span className="material-symbols-outlined text-3xl">water_ec</span>
                    </div>
                    <span className="text-xs font-mono text-gray-500 bg-[#0d1a11] px-2 py-1 rounded">
                      -40% vs 2020
                    </span>
                  </div>
                  <h3 className="text-5xl font-black text-white mb-2 group-hover:text-[#19e65e] transition-colors">
                    240k
                  </h3>
                  <p className="text-gray-400 font-medium">Gallons Water Saved</p>
                </div>
                
                {/* Card 4 */}
                <div className="bg-[#112116] p-8 rounded-2xl border border-[#244730] hover:border-[#19e65e]/50 transition-colors group">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-[#19e65e]/10 rounded-lg text-[#19e65e]">
                      <span className="material-symbols-outlined text-3xl">co2</span>
                    </div>
                    <span className="text-xs font-mono text-gray-500 bg-[#0d1a11] px-2 py-1 rounded">
                      Since 2021
                    </span>
                  </div>
                  <h3 className="text-5xl font-black text-white mb-2 group-hover:text-[#19e65e] transition-colors">
                    50k
                  </h3>
                  <p className="text-gray-400 font-medium">Tons CO2 Offset</p>
                </div>
              </div>
            </div>
          </section>

          {/* Future Goals / Timeline */}
          <section className="py-24 bg-[#112116]">
            <div className="max-w-5xl mx-auto px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-white mb-16 text-center">Roadmap to 2030</h2>
              
              <div className="relative border-l border-[#244730] ml-4 md:ml-1/2 space-y-16">
                {/* Item 1 */}
                <div className="relative pl-12 md:pl-0">
                  {/* Dot */}
                  <div className="absolute top-0 left-[-5px] md:left-1/2 md:-translate-x-[5px] w-[11px] h-[11px] rounded-full bg-[#19e65e] ring-4 ring-[#112116]"></div>
                  
                  <div className="md:grid md:grid-cols-2 md:gap-16">
                    <div className="hidden md:block text-right">
                      <span className="text-[#19e65e] font-bold text-xl block mb-2">2025</span>
                      <h3 className="text-white text-2xl font-bold">Plastic Free Packaging</h3>
                    </div>
                    
                    {/* Mobile layout */}
                    <div className="md:hidden">
                      <span className="text-[#19e65e] font-bold text-xl block mb-2">2025</span>
                    </div>
                    
                    <div className="md:pt-0">
                      <h3 className="text-white text-2xl font-bold md:hidden mb-2">Plastic Free Packaging</h3>
                      <p className="text-gray-400 leading-relaxed">
                        Eliminating all single-use plastics from our supply chain. We are transitioning to 100% biodegradable and compostable packaging materials derived from mushroom mycelium and seaweed.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Item 2 */}
                <div className="relative pl-12 md:pl-0">
                  {/* Dot */}
                  <div className="absolute top-0 left-[-5px] md:left-1/2 md:-translate-x-[5px] w-[11px] h-[11px] rounded-full bg-[#244730] ring-4 ring-[#112116]"></div>
                  
                  <div className="md:grid md:grid-cols-2 md:gap-16">
                    {/* This empty div pushes the content to left on desktop for alternating effect */}
                    <div className="order-2">
                      <p className="text-gray-400 leading-relaxed text-right md:text-left">
                        Achieving complete carbon neutrality across all scope 1, 2, and 3 emissions. This involves deep decarbonization of our fleet and investing in direct air capture technologies.
                      </p>
                    </div>
                    
                    <div className="order-1 text-right md:text-right">
                      <span className="text-gray-500 font-bold text-xl block mb-2">2027</span>
                      <h3 className="text-white text-2xl font-bold">Net Zero Operations</h3>
                    </div>
                  </div>
                </div>
                
                {/* Item 3 */}
                <div className="relative pl-12 md:pl-0">
                  {/* Dot */}
                  <div className="absolute top-0 left-[-5px] md:left-1/2 md:-translate-x-[5px] w-[11px] h-[11px] rounded-full bg-[#244730] ring-4 ring-[#112116]"></div>
                  
                  <div className="md:grid md:grid-cols-2 md:gap-16">
                    <div className="hidden md:block text-right">
                      <span className="text-gray-500 font-bold text-xl block mb-2">2030</span>
                      <h3 className="text-white text-2xl font-bold">Regenerative Supply Chain</h3>
                    </div>
                    
                    <div className="md:hidden">
                      <span className="text-gray-500 font-bold text-xl block mb-2">2030</span>
                    </div>
                    
                    <div className="md:pt-0">
                      <h3 className="text-white text-2xl font-bold md:hidden mb-2">Regenerative Supply Chain</h3>
                      <p className="text-gray-400 leading-relaxed">
                        Moving beyond sustainability to regeneration. Our agricultural partners will use techniques that actively restore soil health and biodiversity, capturing carbon in the ground.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Gallery / Visual break */}
          <section className="grid grid-cols-1 md:grid-cols-3 h-96 w-full">
            <div className="relative group overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                alt="Wind turbines in a foggy field"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwSdRN3dMUCzVAUyuoAJWDCMWLSLoN4L5zwdljnY9UpyBB-_8JDheiQkEs1yaNRzvE1oTdmhqV06BJTaDAVed8TsVxhEIRl6p1xARjNDCPygA8tI_A7_EyB3oxLeHTolacCq5MBpsOWiVNCUyle4CLbZwlnz2Ii3UwJ_7EcTfKh0lBTab7XbTLWOERyXBjaztz_S-Fv-zycRWoFfnw7JsNg-VEh2fNO-Lvw0LPV-JiPuYVRDlE6O9IKD4-3HUhVbrIGpxwtTb5-6Q"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <span className="text-white font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                  Clean Energy
                </span>
              </div>
            </div>
            
            <div className="relative group overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                alt="Hands holding rich dark soil"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoIAEszFaBqWD-M3KjbRjEwuYrjQ-DR2atkwiRmf0Hm7osJWkiko_98ASkdHuKK6W8HJMYFb--eACnVweAyImUyraqMBTg23Ozppy0Qqz_7cjO2xgo9t-n0ArfpxXiNQxBEzXwYFayW0cmYWQKSFE9SztR2CWcxlCcnmmcy2l1d95V32H26pkCgVlpd473Mdd4Bj3YM8JK7j7QN5Y12Nmv2_IOJ3YK24jujI8YU9ZIUCQdecYk2ygbmP6alCgSJvBVIbs4IQNkJQo"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <span className="text-white font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                  Soil Health
                </span>
              </div>
            </div>
            
            <div className="relative group overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                alt="Clear water stream in nature"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBihH4mAc5F6rIoh0BmochP5gDrBeyEn_UDiir3ZBUc9ER9SxUkAgOg0Lam9sdAkn5awOsEaUPdAjLvnZ-TAa_H48X6xTNPWMNZ1dC3CpZZenSxe8D0PEC6w5CISpTfHfIPckA8qf34Mmc09i0TlVtATocluw5C23RsJRV8exbxp7SY9iSBh4H3SD5W2rtifqTbG_iIrlUsmsSBcx-EYWGw3Aymv_SJrBpMKMwm9sDW5oNf4bwcy_qHw5jUmtGXpb4vaScMsBqKpik"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <span className="text-white font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                  Clean Water
                </span>
              </div>
            </div>
          </section>

          {/* Newsletter CTA */}
          <section className="py-24 bg-[#0d1a11] px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-[#19e65e]/10 text-[#19e65e] mb-6">
                <span className="material-symbols-outlined text-3xl">mail</span>
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-4">Stay Informed</h2>
              
              <p className="text-gray-400 mb-10 max-w-xl mx-auto">
                Join our monthly digest. We share our progress reports, new initiatives, and tips on how you can contribute to a greener planet.
              </p>
              
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  className="flex-1 bg-[#1c3625] border-transparent focus:border-[#19e65e] focus:ring-0 rounded-lg text-white placeholder-gray-500 h-12 px-4"
                  placeholder="Enter your email address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  className="bg-[#19e65e] text-[#112116] font-bold h-12 px-8 rounded-lg hover:bg-white transition-colors"
                  type="submit"
                >
                  Subscribe
                </button>
              </form>
              
              <p className="text-xs text-gray-600 mt-4">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-[#112116] border-t border-[#244730] pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <span className="material-symbols-outlined text-[#19e65e]">eco</span>
                    <span className="text-white text-xl font-bold">EcoFuture</span>
                  </div>
                  
                  <p className="text-gray-500 max-w-xs text-sm leading-relaxed">
                    Building a legacy of sustainability through innovation, transparency, and action.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-12 sm:gap-24">
                  <div>
                    <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">Company</h4>
                    <ul className="space-y-3">
                      <li>
                        <a className="text-gray-500 hover:text-[#19e65e] text-sm transition-colors" href="#">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a className="text-gray-500 hover:text-[#19e65e] text-sm transition-colors" href="#">
                          Careers
                        </a>
                      </li>
                      <li>
                        <a className="text-gray-500 hover:text-[#19e65e] text-sm transition-colors" href="#">
                          Press
                        </a>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">Resources</h4>
                    <ul className="space-y-3">
                      <li>
                        <a className="text-gray-500 hover:text-[#19e65e] text-sm transition-colors" href="#">
                          2023 Annual Report
                        </a>
                      </li>
                      <li>
                        <a className="text-gray-500 hover:text-[#19e65e] text-sm transition-colors" href="#">
                          Sustainability Data
                        </a>
                      </li>
                      <li>
                        <a className="text-gray-500 hover:text-[#19e65e] text-sm transition-colors" href="#">
                          Case Studies
                        </a>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">Legal</h4>
                    <ul className="space-y-3">
                      <li>
                        <a className="text-gray-500 hover:text-[#19e65e] text-sm transition-colors" href="#">
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a className="text-gray-500 hover:text-[#19e65e] text-sm transition-colors" href="#">
                          Terms of Service
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#244730]">
                <p className="text-gray-600 text-sm">© 2024 EcoFuture Inc. All rights reserved.</p>
                
                <div className="flex gap-4 mt-4 md:mt-0">
                  <a className="text-gray-500 hover:text-white transition-colors" href="#">
                    <span className="sr-only">Twitter</span>
                    <span className="material-symbols-outlined text-lg">public</span>
                  </a>
                  <a className="text-gray-500 hover:text-white transition-colors" href="#">
                    <span className="sr-only">LinkedIn</span>
                    <span className="material-symbols-outlined text-lg">work</span>
                  </a>
                  <a className="text-gray-500 hover:text-white transition-colors" href="#">
                    <span className="sr-only">Instagram</span>
                    <span className="material-symbols-outlined text-lg">photo_camera</span>
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </main>
      </body>
    </div>
  );
}
