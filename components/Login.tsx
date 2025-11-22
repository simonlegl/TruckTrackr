import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, MapPin, Clock, Star, TrendingUp, Smartphone, Globe, Users, DollarSign, CheckCircle } from 'lucide-react';
import { Logo } from './Logo';
import { MARKET_STATS, UPCOMING_EVENTS } from '../constants';

interface LoginProps {
  onLogin: (role: 'STUDENT' | 'VENDOR') => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10">
              <Logo className="w-full h-full" />
            </div>
            <span className={`text-2xl font-extrabold tracking-tight ${scrolled ? 'text-brand-blue' : 'text-brand-blue md:text-brand-blue'}`}>TruckTrackr</span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-medium text-sm">
             <a href="#features" className="hover:text-brand-yellow transition-colors">Features</a>
             <a href="#vendors" className="hover:text-brand-yellow transition-colors">For Vendors</a>
             <button 
                onClick={() => onLogin('VENDOR')}
                className="px-6 py-2 bg-brand-blue text-white rounded-full hover:bg-blue-900 transition-colors shadow-lg"
             >
                Vendor Login
             </button>
             <button 
                onClick={() => onLogin('STUDENT')}
                className="px-6 py-2 bg-brand-yellow text-brand-blue rounded-full hover:bg-yellow-400 transition-colors shadow-lg font-bold"
             >
                Find Food
             </button>
          </div>
          <div className="md:hidden">
              <Menu size={24} className="text-brand-blue" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gray-50">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
             {/* Abstract Shapes */}
             <div className="absolute top-0 right-0 w-2/3 h-full bg-brand-yellow/10 skew-x-12 translate-x-20"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-xs font-bold text-brand-blue shadow-sm mb-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    LIVE ON CAMPUS
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-brand-blue leading-tight tracking-tight">
                    Find food trucks. <br/>
                    <span className="text-brand-yellow bg-brand-blue px-2">Anytime.</span> <br/>
                    Anywhere.
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                    Real-time food discovery for students. Powerful data insights for vendors. The ultimate campus dining ecosystem.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                        onClick={() => onLogin('STUDENT')}
                        className="px-8 py-4 bg-brand-blue text-white rounded-xl font-bold text-lg hover:bg-blue-900 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                    >
                        Find Trucks <ArrowRight size={20} />
                    </button>
                    <button 
                        onClick={() => onLogin('VENDOR')}
                        className="px-8 py-4 bg-white text-brand-blue border-2 border-brand-blue rounded-xl font-bold text-lg hover:bg-blue-50 transition-all flex items-center justify-center gap-2"
                    >
                        Vendor Dashboard
                    </button>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500 pt-4">
                    <div className="flex -space-x-2">
                        {[1,2,3,4].map(i => (
                            <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
                                <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                            </div>
                        ))}
                    </div>
                    <p>Used by <span className="font-bold text-gray-900">2,000+</span> students today</p>
                </div>
            </div>

            {/* Interactive Map Preview Visual */}
            <div className="relative hidden md:block h-[600px]">
                 <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl border-8 border-gray-100 overflow-hidden rotate-3 hover:rotate-0 transition-all duration-700">
                    {/* Simulated Vector Street Map */}
                    <div className="absolute inset-0 bg-gray-200 overflow-hidden">
                         {/* City Blocks (White areas representing buildings/campus blocks) */}
                         <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[55%] bg-white rounded-br-3xl shadow-sm"></div>
                         <div className="absolute top-[-5%] right-[-5%] w-[48%] h-[45%] bg-white rounded-bl-3xl shadow-sm"></div>
                         <div className="absolute bottom-[-10%] left-[-5%] w-[38%] h-[45%] bg-white rounded-tr-3xl shadow-sm"></div>
                         <div className="absolute bottom-[-5%] right-[-10%] w-[52%] h-[48%] bg-white rounded-tl-3xl shadow-sm"></div>
                         
                         {/* Central Campus Park */}
                         <div className="absolute top-[48%] left-[45%] w-[15%] h-[15%] bg-green-50 rounded-2xl border border-green-100 opacity-80 transform -translate-x-1/2 -translate-y-1/2"></div>

                         {/* Street Names */}
                         <div className="absolute top-[40%] left-[5%] text-[10px] font-bold text-gray-400 tracking-widest uppercase">College Blvd</div>
                         <div className="absolute top-[10%] right-[47%] text-[10px] font-bold text-gray-400 tracking-widest uppercase rotate-90">Campus Dr</div>

                         {/* User Location Dot */}
                         <div className="absolute top-[48%] left-[45%] w-4 h-4 bg-blue-500 border-2 border-white rounded-full shadow-md z-10 transform -translate-x-1/2 -translate-y-1/2">
                             <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75"></div>
                         </div>

                         {/* Truck Pins - Positioned on the 'roads' (gray gaps) */}
                         {/* Truck 1: North Road */}
                         <div className="absolute top-[25%] left-[48%] animate-bounce duration-1000 z-20">
                             <div className="w-12 h-12 bg-brand-blue rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white transform -translate-x-1/2">
                                 <img src="https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?auto=format&fit=crop&w=60&q=80" className="w-full h-full object-cover rounded-full opacity-80" />
                             </div>
                             <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded shadow text-xs font-bold whitespace-nowrap text-gray-800">Taco Titan</div>
                         </div>

                         {/* Truck 2: East Road */}
                         <div className="absolute top-[48%] right-[15%] animate-bounce duration-[2000ms] z-20">
                             <div className="w-12 h-12 bg-brand-yellow rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white transform -translate-x-1/2 -translate-y-1/2">
                                  <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=60&q=80" className="w-full h-full object-cover rounded-full opacity-80" />
                             </div>
                             <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded shadow text-xs font-bold whitespace-nowrap text-gray-800">Burger Bus</div>
                         </div>

                         {/* Truck 3: South Road */}
                         <div className="absolute bottom-[20%] left-[40%] z-10 opacity-90">
                             <div className="w-10 h-10 bg-white rounded-full border-2 border-gray-300 shadow flex items-center justify-center transform -translate-x-1/2">
                                 <img src="https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=60&q=80" className="w-full h-full object-cover rounded-full" />
                             </div>
                         </div>
                    </div>
                    
                    {/* Overlay UI */}
                    <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-4 rounded-xl border border-gray-200 shadow-lg flex items-center justify-between z-30">
                         <div>
                             <p className="text-xs font-bold text-gray-400 uppercase">Nearby</p>
                             <p className="font-bold text-brand-blue">3 Trucks Open Now</p>
                         </div>
                         <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center text-white">
                             <MapPin size={20} />
                         </div>
                    </div>
                 </div>
            </div>
        </div>
      </div>

      {/* Student Experience Section */}
      <div id="features" className="py-24 bg-white">
          <div className="container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-20">
                  <h2 className="text-4xl font-black text-brand-blue mb-6">Hungry on Campus?</h2>
                  <p className="text-xl text-gray-600">Experience the future of food discovery. We've built an ecosystem that puts every food truck in your pocket.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-12">
                  <div className="bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition-all border border-gray-100 group">
                      <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-brand-blue mb-6 group-hover:scale-110 transition-transform">
                          <Clock size={28} />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">Live Tracking & ordering</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                          Real-time GPS ensures you never miss your favorite truck. Filter by cuisine, see live wait times, and place your order in under 60 seconds.
                      </p>
                  </div>
                  <div className="bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition-all border border-gray-100 group">
                      <div className="w-14 h-14 bg-yellow-100 rounded-2xl flex items-center justify-center text-yellow-700 mb-6 group-hover:scale-110 transition-transform">
                          <Star size={28} />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">Loyalty & AI Assistant</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                          Earn points with every bite. Our AI assistant answers FAQs, tracks your loyalty rewards, and learns your taste to provide personalized recommendations.
                      </p>
                  </div>
                  <div className="bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition-all border border-gray-100 group">
                      <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-700 mb-6 group-hover:scale-110 transition-transform">
                          <Users size={28} />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">Community Driven</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                          Real student reviews, photos, and ratings. See what's trending on campus and join the conversation about the best eats in town.
                      </p>
                  </div>
              </div>
          </div>
      </div>

      {/* Market Stats Section */}
      <div className="py-20 bg-brand-blue text-white relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]"></div>
           <div className="container mx-auto px-6 relative z-10">
               <div className="grid md:grid-cols-2 gap-16 items-center">
                   <div>
                       <h2 className="text-4xl font-black mb-6">A Booming Market</h2>
                       <p className="text-blue-200 text-lg mb-8 leading-relaxed">
                           The food truck revolution is here. With millennials leading the charge, the demand for mobile dining on campuses is skyrocketing.
                       </p>
                       <div className="space-y-4">
                           <div className="flex items-center gap-4">
                               <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                   <TrendingUp size={24} className="text-brand-yellow" />
                               </div>
                               <div>
                                   <p className="font-bold text-xl">Outpacing Traditional Dining</p>
                                   <p className="text-sm text-blue-200">Food trucks offer the variety and speed students crave.</p>
                               </div>
                           </div>
                           <div className="flex items-center gap-4">
                               <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                   <Smartphone size={24} className="text-brand-yellow" />
                               </div>
                               <div>
                                   <p className="font-bold text-xl">Digital First</p>
                                   <p className="text-sm text-blue-200">70% of transactions are now digital/contactless.</p>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className="grid grid-cols-2 gap-6">
                        {MARKET_STATS.map((stat, i) => (
                            <div key={i} className={`bg-white/10 backdrop-blur p-6 rounded-2xl border border-white/20 ${i === 2 ? 'col-span-2' : ''}`}>
                                <p className="text-blue-200 text-sm font-medium mb-2">{stat.label}</p>
                                <p className="text-4xl font-black text-brand-yellow">{stat.value}</p>
                            </div>
                        ))}
                   </div>
               </div>
           </div>
      </div>

      {/* Vendor Deep Dive Section */}
      <div id="vendors" className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row gap-16">
                  <div className="md:w-1/2">
                      <div className="sticky top-32">
                          <h2 className="text-4xl font-black text-gray-900 mb-6">Drive Your Business with Data.</h2>
                          <p className="text-lg text-gray-600 mb-8">
                              TruckTrackr isn't just a map; it's a complete operating system for mobile food vendors. We provide the visibility and insights you need to scale.
                          </p>
                          
                          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-8">
                              <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                                  <DollarSign className="text-green-600" size={20}/> Revenue Model
                              </h4>
                              <p className="text-gray-600 text-sm leading-relaxed">
                                  We succeed when you succeed. TruckTrackr charges a standard <span className="font-bold text-gray-900">6% transaction fee</span> on orders processed through the app. 
                                  Additionally, we unlock revenue through event bookings (7-10% fee) and tiered subscription plans for advanced analytics.
                              </p>
                          </div>

                          <button onClick={() => onLogin('VENDOR')} className="bg-gray-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-black transition">
                              Start Vendor Trial
                          </button>
                      </div>
                  </div>
                  
                  <div className="md:w-1/2 space-y-12">
                      {/* Feature 1 */}
                      <div>
                          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" className="rounded-2xl shadow-lg mb-6 w-full h-64 object-cover" alt="Analytics" />
                          <h3 className="text-2xl font-bold mb-2">Powerful Dashboard</h3>
                          <p className="text-gray-600">Visualize sales trends, heat maps of student activity, and peak hours. Our proprietary analytics IP helps you position your truck where the hungry students are.</p>
                      </div>
                      
                      {/* Subscription Tiers */}
                      <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-xl">
                          <h3 className="text-2xl font-bold mb-6">Vendor Plans</h3>
                          <div className="space-y-6">
                              <div className="flex gap-4 border-b border-gray-100 pb-6">
                                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-500">B</div>
                                  <div>
                                      <h4 className="font-bold text-lg">Basic (Free)</h4>
                                      <p className="text-sm text-gray-500">Standard map visibility and email support.</p>
                                  </div>
                              </div>
                              <div className="flex gap-4 border-b border-gray-100 pb-6">
                                  <div className="w-12 h-12 bg-brand-yellow/20 text-yellow-700 rounded-full flex items-center justify-center font-bold">P</div>
                                  <div>
                                      <h4 className="font-bold text-lg">Premium ($49-149/mo)</h4>
                                      <p className="text-sm text-gray-500">Full analytics suite, ads, priority chat support (4-8hr SLA), and onboarding specialist.</p>
                                  </div>
                              </div>
                              <div className="flex gap-4">
                                  <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold">E</div>
                                  <div>
                                      <h4 className="font-bold text-lg">Enterprise</h4>
                                      <p className="text-sm text-gray-500">Concierge service, account manager, &lt;1hr response SLA, and custom marketing consultations.</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* Business Tech & Ops */}
      <div className="py-24 bg-white">
          <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-16">
                  <div>
                      <h2 className="text-3xl font-black text-gray-900 mb-8">Built for Scale</h2>
                      <div className="space-y-8">
                          <div>
                              <h3 className="font-bold text-xl mb-2">Robust Infrastructure</h3>
                              <p className="text-gray-600 text-sm">
                                  Powered by AWS cloud infrastructure with scalable API integrations. Our tech stack handles high-concurrency ordering during lunch rush hours without breaking a sweat.
                              </p>
                          </div>
                          <div>
                              <h3 className="font-bold text-xl mb-2">Ecosystem Integration</h3>
                              <p className="text-gray-600 text-sm">
                                  We don't work in a silo. TruckTrackr seamlessly integrates with Stripe and Square for payments, and connects directly to existing POS hardware used by vendors.
                              </p>
                          </div>
                          <div>
                              <h3 className="font-bold text-xl mb-2">Operational Excellence</h3>
                              <p className="text-gray-600 text-sm">
                                  Our cost structure is optimized for growth: strategic allocation to R&D (developers, designers), scalable cloud costs, and performance-based marketing campaigns.
                              </p>
                          </div>
                      </div>
                  </div>
                  <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow to-orange-300 rounded-3xl transform rotate-3"></div>
                      <div className="relative bg-white p-8 rounded-3xl border border-gray-100 shadow-lg h-full flex flex-col justify-center">
                          <h3 className="font-bold text-gray-900 mb-6">The TruckTrackr Advantage</h3>
                          <ul className="space-y-4">
                              <li className="flex items-start gap-3">
                                  <CheckCircle className="text-green-500 shrink-0" size={20} />
                                  <span className="text-gray-700 text-sm">Dedicated focus on university campuses vs generic competitors like Roaming Hunger.</span>
                              </li>
                              <li className="flex items-start gap-3">
                                  <CheckCircle className="text-green-500 shrink-0" size={20} />
                                  <span className="text-gray-700 text-sm">Proprietary real-time GPS hardware integrations.</span>
                              </li>
                              <li className="flex items-start gap-3">
                                  <CheckCircle className="text-green-500 shrink-0" size={20} />
                                  <span className="text-gray-700 text-sm">Student-first loyalty programs that drive retention.</span>
                              </li>
                              <li className="flex items-start gap-3">
                                  <CheckCircle className="text-green-500 shrink-0" size={20} />
                                  <span className="text-gray-700 text-sm">Comprehensive KYC and vendor onboarding process.</span>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* Community & Events */}
      <div className="py-24 bg-white">
          <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                  <div>
                      <h2 className="text-3xl font-black text-gray-900 mb-2">Community & Events</h2>
                      <p className="text-gray-500">See what's happening on campus this week.</p>
                  </div>
                  <a href="#" className="text-brand-blue font-bold hover:underline flex items-center gap-1">View Full Calendar <ArrowRight size={16}/></a>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                   {UPCOMING_EVENTS.map((evt, i) => (
                       <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                           <div className="bg-white p-3 rounded-lg shadow-sm text-center min-w-[70px]">
                               <span className="block text-xs text-gray-500 font-bold uppercase">{evt.date.split(' ')[0]}</span>
                               <span className="block text-xl font-black text-brand-blue">{evt.date.split(' ')[1]}</span>
                           </div>
                           <div>
                               <h4 className="font-bold text-gray-900">{evt.name}</h4>
                               <div className="flex items-center gap-1 text-gray-500 text-xs mt-1">
                                   <MapPin size={12} /> {evt.location}
                               </div>
                           </div>
                       </div>
                   ))}
              </div>
          </div>
      </div>

      {/* Footer */}
      <footer className="bg-brand-blue text-white pt-20 pb-10">
          <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-4 gap-12 mb-16">
                  <div className="col-span-2 md:col-span-1">
                      <div className="flex items-center gap-2 mb-6">
                          <Logo className="w-8 h-8 bg-white rounded-full border border-transparent" />
                          <span className="font-bold text-xl">TruckTrackr</span>
                      </div>
                      <p className="text-blue-200 text-sm leading-relaxed mb-6">
                          Connecting hungry students with local vendors through technology, analytics, and community.
                      </p>
                      <div className="flex gap-4">
                          {/* Social Placeholders */}
                          <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center hover:bg-brand-yellow hover:text-brand-blue cursor-pointer transition"><Globe size={16}/></div>
                          <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center hover:bg-brand-yellow hover:text-brand-blue cursor-pointer transition"><Smartphone size={16}/></div>
                      </div>
                  </div>
                  
                  <div>
                      <h4 className="font-bold mb-6">Company</h4>
                      <ul className="space-y-3 text-sm text-blue-200">
                          <li><a href="#" className="hover:text-white transition">About Us</a></li>
                          <li><a href="#" className="hover:text-white transition">Careers</a></li>
                          <li><a href="#" className="hover:text-white transition">Press</a></li>
                          <li><a href="#" className="hover:text-white transition">Contact</a></li>
                      </ul>
                  </div>

                  <div>
                      <h4 className="font-bold mb-6">Product</h4>
                      <ul className="space-y-3 text-sm text-blue-200">
                          <li><a href="#" className="hover:text-white transition">For Students</a></li>
                          <li><a href="#" className="hover:text-white transition">Vendor Portal</a></li>
                          <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                          <li><a href="#" className="hover:text-white transition">API Docs</a></li>
                      </ul>
                  </div>

                  <div>
                      <h4 className="font-bold mb-6">Stay Updated</h4>
                      <p className="text-xs text-blue-200 mb-4">Subscribe to our newsletter for the latest food truck news.</p>
                      <div className="flex">
                          <input type="email" placeholder="Enter email" className="bg-blue-900 text-white px-4 py-2 rounded-l-lg text-sm w-full focus:outline-none border border-blue-800" />
                          <button className="bg-brand-yellow text-brand-blue px-4 py-2 rounded-r-lg font-bold text-sm hover:bg-yellow-400">Join</button>
                      </div>
                  </div>
              </div>

              <div className="border-t border-blue-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-300">
                  <p>© 2025 TruckTrackr Technologies Inc. All rights reserved.</p>
                  <div className="flex gap-6">
                      <a href="#" className="hover:text-white">Privacy Policy</a>
                      <a href="#" className="hover:text-white">Terms of Service</a>
                      <a href="#" className="hover:text-white">Cookie Settings</a>
                  </div>
              </div>
          </div>
      </footer>
    </div>
  );
};