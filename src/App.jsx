import React, { useState, useEffect } from 'react';

import { 

  Menu, 

  X, 

  ArrowRight, 

  BarChart3, 

  Globe, 

  ShieldCheck, 

  Zap, 

  CheckCircle, 

  Mail, 

  MapPin, 

  Phone,

  ChevronRight,

  Play

} from 'lucide-react';



const App = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);



  // Handle scroll effect for navbar

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 20);

    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, []);



  const navLinks = [

    { name: 'Solutions', href: '#solutions' },

    { name: 'About', href: '#about' },

    { name: 'Case Studies', href: '#testimonials' },

    { name: 'Contact', href: '#contact' },

  ];



  return (

    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">

      

      {/* --- Navigation --- */}

      <nav 

        className={`fixed w-full z-50 transition-all duration-300 ${

          scrolled 

            ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' 

            : 'bg-transparent py-6'

        }`}

      >

        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">

          {/* Logo */}

          <div className="flex items-center gap-2 cursor-pointer">

            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">

              <Zap className="w-5 h-5 text-white" fill="currentColor" />

            </div>

            <span className="text-xl font-bold tracking-tight text-slate-900">Lumina.</span>

          </div>



          {/* Desktop Nav */}

          <div className="hidden md:flex items-center gap-8">

            {navLinks.map((link) => (

              <a 

                key={link.name} 

                href={link.href}

                className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"

              >

                {link.name}

              </a>

            ))}

            <button className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-all hover:shadow-lg hover:-translate-y-0.5">

              Get Started

            </button>

          </div>



          {/* Mobile Menu Toggle */}

          <button 

            className="md:hidden p-2 text-slate-600"

            onClick={() => setIsMenuOpen(!isMenuOpen)}

          >

            {isMenuOpen ? <X /> : <Menu />}

          </button>

        </div>



        {/* Mobile Nav Dropdown */}

        {isMenuOpen && (

          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl animate-in slide-in-from-top-5 duration-200">

            <div className="flex flex-col p-6 gap-4">

              {navLinks.map((link) => (

                <a 

                  key={link.name} 

                  href={link.href}

                  onClick={() => setIsMenuOpen(false)}

                  className="text-lg font-medium text-slate-600 hover:text-indigo-600"

                >

                  {link.name}

                </a>

              ))}

              <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium mt-2">

                Get Started

              </button>

            </div>

          </div>

        )}

      </nav>



      {/* --- Hero Section --- */}

      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

        {/* Background Decor */}

        <div className="absolute top-0 right-0 -z-10 opacity-30 transform translate-x-1/3 -translate-y-1/4">

          <svg width="800" height="800" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">

            <path fill="#4F46E5" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-4.9C93.5,9.3,82.2,22.9,70.3,33.8C58.4,44.7,45.9,52.9,33.3,60.2C20.7,67.5,8,73.9,-3.3,79.6C-14.6,85.3,-24.5,90.3,-35.2,87.1C-45.9,83.9,-57.4,72.5,-66.8,60.1C-76.2,47.7,-83.5,34.3,-86.5,20.1C-89.5,5.9,-88.2,-9.1,-81.1,-21.4C-74,-33.7,-61.1,-43.3,-48.2,-51.1C-35.3,-58.9,-22.4,-64.9,-9.1,-63.3C4.2,-61.7,17.6,-52.5,30.5,-83.6L44.7,-76.4Z" transform="translate(100 100)" />

          </svg>

        </div>



        <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">

          <div className="space-y-8 max-w-2xl">

            <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5">

              <span className="relative flex h-2 w-2">

                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>

                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>

              </span>

              <span className="text-xs font-semibold text-indigo-700 uppercase tracking-wide">New: Q4 Report Available</span>

            </div>

            

            <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1]">

              Scale your business with <span className="text-indigo-600">confidence.</span>

            </h1>

            

            <p className="text-lg text-slate-600 leading-relaxed">

              Lumina provides the digital infrastructure and strategic insights required for modern enterprises to thrive in a connected world.

            </p>



            <div className="flex flex-col sm:flex-row gap-4">

              <button className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-all hover:shadow-lg hover:-translate-y-1">

                Start Free Trial <ArrowRight className="w-4 h-4" />

              </button>

              <button className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all">

                <Play className="w-4 h-4 fill-slate-700" /> Watch Demo

              </button>

            </div>



            <div className="pt-4 flex items-center gap-4 text-sm text-slate-500">

              <div className="flex -space-x-2">

                {[1,2,3,4].map(i => (

                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">

                    {String.fromCharCode(64+i)}

                  </div>

                ))}

              </div>

              <p>Trusted by 2,000+ innovative companies</p>

            </div>

          </div>



          {/* Hero Visual */}

          <div className="relative lg:h-[500px] w-full bg-gradient-to-br from-slate-100 to-white rounded-3xl border border-slate-200 shadow-2xl p-8 flex flex-col justify-center items-center overflow-hidden">

             {/* Abstract dashboard UI mockup */}

             <div className="w-full max-w-md bg-white rounded-xl shadow-lg border border-slate-100 p-6 mb-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">

                <div className="flex items-center justify-between mb-4">

                   <div className="h-8 w-8 bg-indigo-100 rounded-full flex items-center justify-center">

                      <BarChart3 className="w-4 h-4 text-indigo-600" />

                   </div>

                   <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">+24.5%</span>

                </div>

                <div className="space-y-3">

                  <div className="h-2 w-full bg-slate-100 rounded-full">

                    <div className="h-2 w-2/3 bg-indigo-600 rounded-full"></div>

                  </div>

                  <div className="h-2 w-full bg-slate-100 rounded-full">

                    <div className="h-2 w-1/2 bg-indigo-400 rounded-full"></div>

                  </div>

                  <div className="flex justify-between pt-2">

                    <div className="h-8 w-20 bg-slate-50 rounded"></div>

                    <div className="h-8 w-20 bg-slate-50 rounded"></div>

                  </div>

                </div>

             </div>



             <div className="w-full max-w-sm bg-slate-900 rounded-xl shadow-2xl p-6 transform -rotate-3 hover:rotate-0 transition-transform duration-500 z-10">

                <div className="flex items-center gap-3 mb-4">

                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>

                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>

                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>

                </div>

                <div className="space-y-2">

                  <div className="h-2 w-3/4 bg-slate-700 rounded opacity-50"></div>

                  <div className="h-2 w-1/2 bg-slate-700 rounded opacity-50"></div>

                  <div className="h-2 w-full bg-indigo-500 rounded mt-4"></div>

                </div>

             </div>

          </div>

        </div>

      </section>



      {/* --- Partners / Social Proof --- */}

      <section className="py-10 border-y border-slate-200 bg-white">

        <div className="container mx-auto px-6 text-center">

          <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-8">Powering Next-Gen Teams</p>

          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale">

             {/* CSS only logos for simplicity */}

             {['Acme Corp', 'GlobalBank', 'Nebula', 'Vertex', 'Oasis'].map((logo) => (

               <span key={logo} className="text-xl font-bold text-slate-800">{logo}</span>

             ))}

          </div>

        </div>

      </section>



      {/* --- Features --- */}

      <section id="solutions" className="py-24 bg-slate-50">

        <div className="container mx-auto px-6 md:px-12">

          <div className="text-center max-w-3xl mx-auto mb-20">

            <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-2">Our Expertise</h2>

            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Everything you need to scale.</h3>

            <p className="text-slate-600 text-lg">

              We break down complex problems into manageable solutions using cutting-edge technology and strategic foresight.

            </p>

          </div>



          <div className="grid md:grid-cols-3 gap-8">

            {[

              { 

                icon: <Globe className="w-6 h-6" />, 

                title: 'Global Connectivity', 

                desc: 'Seamlessly connect your teams across borders with our low-latency enterprise network infrastructure.' 

              },

              { 

                icon: <ShieldCheck className="w-6 h-6" />, 

                title: 'Bank-Grade Security', 

                desc: 'Protect your intellectual property with AES-256 encryption and real-time threat monitoring.' 

              },

              { 

                icon: <Zap className="w-6 h-6" />, 

                title: 'Lightning Fast', 

                desc: 'Optimized workflows that reduce redundancy and increase output by an average of 40%.' 

              }

            ].map((feature, idx) => (

              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300 group">

                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">

                  {feature.icon}

                </div>

                <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>

                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>

                <a href="#" className="inline-flex items-center text-indigo-600 font-medium mt-6 hover:text-indigo-700">

                  Learn more <ChevronRight className="w-4 h-4 ml-1" />

                </a>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* --- Stats / About --- */}

      <section id="about" className="py-24 bg-slate-900 text-white relative overflow-hidden">

        {/* Decoration */}

        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>



        <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">Driven by data, defined by results.</h2>

            <p className="text-slate-300 text-lg mb-8 leading-relaxed">

              At Lumina, we believe that transparency builds trust. Our metrics speak for themselves, showcasing a legacy of reliability and growth for our partners.

            </p>

            

            <ul className="space-y-4">

              {[

                '24/7 Dedicated Support Teams',

                '99.99% Uptime Guarantee',

                'Customizable API Integration'

              ].map((item, i) => (

                <li key={i} className="flex items-center gap-3">

                  <CheckCircle className="w-5 h-5 text-indigo-400" />

                  <span className="text-slate-200 font-medium">{item}</span>

                </li>

              ))}

            </ul>

          </div>



          <div className="grid grid-cols-2 gap-6">

            {[

              { label: 'Active Users', value: '2M+' },

              { label: 'Countries', value: '85' },

              { label: 'Transactions', value: '$4B' },

              { label: 'Team Members', value: '150+' }

            ].map((stat, idx) => (

              <div key={idx} className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 backdrop-blur-sm text-center">

                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>

                <div className="text-sm text-slate-400 uppercase tracking-wider">{stat.label}</div>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* --- Testimonials --- */}

      <section id="testimonials" className="py-24 bg-white">

        <div className="container mx-auto px-6 md:px-12">

          <div className="text-center mb-16">

            <h2 className="text-3xl font-bold text-slate-900">Don't just take our word for it.</h2>

          </div>

          

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[1, 2, 3].map((i) => (

              <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative">

                {/* Quote Icon */}

                <div className="absolute top-6 right-8 text-slate-200">

                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.896 14.913 16 16.017 16H19.017C19.569 16 20.017 15.552 20.017 15V9C20.017 8.448 19.569 8 19.017 8H15.017C14.465 8 14.017 7.552 14.017 7V3H19.017C20.674 3 22.017 4.343 22.017 6V15C22.017 16.657 20.674 18 19.017 18H16.017C15.465 18 15.017 18.448 15.017 19V21H14.017ZM5.01699 21L5.01699 18C5.01699 16.896 5.91299 16 7.01699 16H10.017C10.569 16 11.017 15.552 11.017 15V9C11.017 8.448 10.569 8 10.017 8H6.01699C5.46499 8 5.01699 7.552 5.01699 7V3H10.017C11.674 3 13.017 4.343 13.017 6V15C13.017 16.657 11.674 18 10.017 18H7.01699C6.46499 18 6.01699 18.448 6.01699 19V21H5.01699Z" /></svg>

                </div>

                <p className="text-slate-700 italic mb-6 relative z-10">

                  "Lumina completely transformed how we handle our backend infrastructure. The speed and security improvements were immediate."

                </p>

                <div className="flex items-center gap-4">

                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-bold">

                    JD

                  </div>

                  <div>

                    <h5 className="font-bold text-slate-900">Jane Doe</h5>

                    <p className="text-sm text-slate-500">CTO, TechFlow</p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* --- CTA / Contact --- */}

      <section id="contact" className="py-24 bg-indigo-600">

        <div className="container mx-auto px-6 md:px-12">

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">

            

            {/* Contact Info */}

            <div className="p-12 bg-slate-900 text-white flex flex-col justify-between">

              <div>

                <h3 className="text-3xl font-bold mb-4">Let's start a conversation.</h3>

                <p className="text-slate-400 mb-8">Ready to upgrade your workflow? Our team is ready to help you assess your needs.</p>

                

                <div className="space-y-6">

                  <div className="flex items-center gap-4">

                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-indigo-400">

                      <Mail className="w-5 h-5" />

                    </div>

                    <span>hello@lumina.enterprise</span>

                  </div>

                  <div className="flex items-center gap-4">

                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-indigo-400">

                      <Phone className="w-5 h-5" />

                    </div>

                    <span>+1 (555) 123-4567</span>

                  </div>

                  <div className="flex items-center gap-4">

                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-indigo-400">

                      <MapPin className="w-5 h-5" />

                    </div>

                    <span>123 Innovation Blvd, Tech City</span>

                  </div>

                </div>

              </div>

              

              <div className="mt-12 pt-8 border-t border-slate-800 flex gap-4">

                 {/* Social Placeholders */}

                 {[1,2,3].map(i => (

                   <div key={i} className="w-8 h-8 bg-slate-800 hover:bg-indigo-500 rounded-full cursor-pointer transition-colors"></div>

                 ))}

              </div>

            </div>



            {/* Form */}

            <div className="p-12 bg-white">

              <form onSubmit={(e) => {

                  e.preventDefault();

                  alert("Thank you for your message! We will be in touch shortly.");

                }} 

                className="space-y-6"

              >

                <div>

                  <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>

                  <input type="text" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all" placeholder="John Smith" />

                </div>

                <div>

                  <label className="block text-sm font-medium text-slate-700 mb-2">Work Email</label>

                  <input type="email" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all" placeholder="john@company.com" />

                </div>

                <div>

                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>

                  <textarea required rows="4" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-none" placeholder="Tell us about your project..."></textarea>

                </div>

                <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-4 rounded-lg hover:bg-indigo-700 transition-all hover:shadow-lg transform hover:-translate-y-0.5">

                  Send Message

                </button>

              </form>

            </div>

          </div>

        </div>

      </section>



      {/* --- Footer --- */}

      <footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200">

        <div className="container mx-auto px-6 md:px-12">

          <div className="grid md:grid-cols-4 gap-12 mb-12">

            <div className="col-span-1 md:col-span-2">

              <div className="flex items-center gap-2 mb-4">

                <div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center">

                  <Zap className="w-3 h-3 text-white" fill="currentColor" />

                </div>

                <span className="text-lg font-bold text-slate-900">Lumina.</span>

              </div>

              <p className="text-slate-500 max-w-sm leading-relaxed">

                Designing the future of enterprise connectivity. We build tools that empower teams to achieve more with less.

              </p>

            </div>

            

            <div>

              <h4 className="font-bold text-slate-900 mb-4">Company</h4>

              <ul className="space-y-2 text-slate-600">

                <li><a href="#" className="hover:text-indigo-600">About Us</a></li>

                <li><a href="#" className="hover:text-indigo-600">Careers</a></li>

                <li><a href="#" className="hover:text-indigo-600">Press</a></li>

                <li><a href="#" className="hover:text-indigo-600">News</a></li>

              </ul>

            </div>

            

            <div>

              <h4 className="font-bold text-slate-900 mb-4">Resources</h4>

              <ul className="space-y-2 text-slate-600">

                <li><a href="#" className="hover:text-indigo-600">Blog</a></li>

                <li><a href="#" className="hover:text-indigo-600">Newsletter</a></li>

                <li><a href="#" className="hover:text-indigo-600">Help Center</a></li>

                <li><a href="#" className="hover:text-indigo-600">Privacy Policy</a></li>

              </ul>

            </div>

          </div>

          

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-200 text-sm text-slate-500">

            <p>&copy; {new Date().getFullYear()} Lumina Enterprise Inc. All rights reserved.</p>

            <div className="flex gap-6 mt-4 md:mt-0">

              <a href="#" className="hover:text-slate-900">Terms</a>

              <a href="#" className="hover:text-slate-900">Privacy</a>

              <a href="#" className="hover:text-slate-900">Cookies</a>

            </div>

          </div>

        </div>

      </footer>

    </div>

  );

};



export default App;

