
import React, { useState, useEffect } from 'react';
import { Home, Map, ShoppingBag, User as UserIcon, ArrowLeft, Star, Clock, MapPin, Heart, Plus, CheckCircle } from 'lucide-react';
import { MOCK_TRUCKS } from './constants';
import { FoodTruck, ViewState, UserProfile, OrderItem } from './types';
import { Login } from './components/Login';
import { VendorDashboard } from './components/VendorDashboard';
import { LoyaltyProgram } from './components/LoyaltyProgram';
import { ChatAssistant } from './components/ChatAssistant';
import { Logo } from './components/Logo';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>(ViewState.LOGIN);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [selectedTruck, setSelectedTruck] = useState<FoodTruck | null>(null);
  const [isMapView, setIsMapView] = useState(true);
  const [cart, setCart] = useState<OrderItem[]>([]);
  const [showOrderSuccess, setShowOrderSuccess] = useState(false);

  // --- Handlers ---

  const handleLogin = (role: 'STUDENT' | 'VENDOR') => {
    setUser({
      id: '123',
      name: role === 'STUDENT' ? 'Alex Student' : 'Vendor Owner',
      role,
      loyaltyPoints: 125
    });
    setView(role === 'VENDOR' ? ViewState.VENDOR_DASHBOARD : ViewState.HOME);
    window.scrollTo(0, 0);
  };

  const handleTruckClick = (truck: FoodTruck) => {
    setSelectedTruck(truck);
    setView(ViewState.DETAILS);
    window.scrollTo(0, 0);
  };

  const handleAddToCart = (item: any) => {
    setCart(prev => [...prev, { ...item, quantity: 1 }]);
  };

  const handleCheckout = () => {
    setCart([]);
    setShowOrderSuccess(true);
    setTimeout(() => {
        setShowOrderSuccess(false);
        setView(ViewState.HOME);
        // Simulate adding loyalty points
        if (user) setUser({...user, loyaltyPoints: user.loyaltyPoints + 25});
    }, 2000);
  };

  // --- Components ---

  const Navbar = () => (
    <>
      {/* Mobile Top Header */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-40 h-16 flex items-center justify-center px-4 shadow-sm">
         <button 
          onClick={() => setView(ViewState.LOGIN)}
          className="flex items-center gap-2"
         >
           <Logo className="w-8 h-8" />
           <span className="font-extrabold text-lg text-brand-blue tracking-tight">TruckTrackr</span>
         </button>
      </div>

      {/* Main Nav (Bottom on Mobile, Top on Desktop) */}
      <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-40 md:top-0 md:bottom-auto md:border-b md:border-t-0 md:h-16">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between md:justify-start md:gap-12">
          <button 
            onClick={() => setView(ViewState.LOGIN)}
            className="hidden md:flex items-center gap-2 font-extrabold text-xl text-brand-blue tracking-tight hover:opacity-80 transition-opacity"
          >
            <Logo className="w-8 h-8" />
            <span>TruckTrackr</span>
          </button>
          
          <button 
            onClick={() => setView(ViewState.HOME)}
            className={`flex flex-col md:flex-row items-center gap-1 ${view === ViewState.HOME && !selectedTruck ? 'text-brand-blue font-bold' : 'text-gray-400 hover:text-gray-600'}`}
          >
            <Home size={24} />
            <span className="text-[10px] md:text-sm">Home</span>
          </button>

          <button 
            onClick={() => setView(ViewState.LOYALTY)}
            className={`flex flex-col md:flex-row items-center gap-1 ${view === ViewState.LOYALTY ? 'text-brand-blue font-bold' : 'text-gray-400 hover:text-gray-600'}`}
          >
            <Heart size={24} />
            <span className="text-[10px] md:text-sm">Loyalty</span>
          </button>

          <button className="flex flex-col md:flex-row items-center gap-1 text-gray-400 hover:text-gray-600 relative">
            <ShoppingBag size={24} />
            {cart.length > 0 && (
                <span className="absolute -top-1 right-2 md:-top-2 md:-right-2 w-4 h-4 bg-red-500 text-white text-[10px] flex items-center justify-center rounded-full">
                    {cart.length}
                </span>
            )}
            <span className="text-[10px] md:text-sm">Orders</span>
          </button>

          <button 
            onClick={() => setView(ViewState.PROFILE)}
            className={`flex flex-col md:flex-row items-center gap-1 ${view === ViewState.PROFILE ? 'text-brand-blue font-bold' : 'text-gray-400 hover:text-gray-600'} md:ml-auto`}
          >
            <UserIcon size={24} />
            <span className="text-[10px] md:text-sm">Profile</span>
          </button>
        </div>
      </nav>
    </>
  );

  const MapComponent = () => (
    <div className="relative w-full h-[calc(100vh-240px)] md:h-[calc(100vh-80px)] bg-gray-100 rounded-xl overflow-hidden mt-4 border border-gray-200">
        {/* Simulated Map Background */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/city-fields.png")', backgroundSize: '200px' }}></div>
        
        {/* Mock Streets/Blocks */}
        <div className="absolute top-1/2 left-0 w-full h-4 bg-gray-300 opacity-50 transform -translate-y-1/2"></div>
        <div className="absolute left-1/2 top-0 h-full w-4 bg-gray-300 opacity-50 transform -translate-x-1/2"></div>
        <div className="absolute top-1/4 left-0 w-full h-2 bg-gray-300 opacity-30"></div>
        <div className="absolute left-1/3 top-0 h-full w-2 bg-gray-300 opacity-30"></div>

        {/* Truck Pins */}
        {MOCK_TRUCKS.map(truck => (
            <button
                key={truck.id}
                onClick={() => handleTruckClick(truck)}
                className="absolute transform -translate-x-1/2 -translate-y-full group transition-all hover:scale-110 z-10"
                style={{ top: `${truck.location.lat}%`, left: `${truck.location.lng}%` }}
            >
                <div className={`relative p-1 rounded-full border-2 shadow-lg ${truck.isOpen ? 'bg-white border-brand-blue' : 'bg-gray-200 border-gray-400 grayscale'}`}>
                   <img src={truck.image} alt={truck.name} className="w-8 h-8 rounded-full object-cover" />
                   {truck.isOpen && <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-brand-blue rotate-45"></div>}
                </div>
                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity pointer-events-none">
                    {truck.name} • {truck.rating}★
                </div>
            </button>
        ))}

        {/* User Location Pin */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 border-2 border-white rounded-full shadow-md animate-pulse z-0"></div>
    </div>
  );

  const TruckList = () => (
    <div className="space-y-4 pb-24">
      {MOCK_TRUCKS.map(truck => (
        <div 
            key={truck.id} 
            onClick={() => handleTruckClick(truck)}
            className={`bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex gap-4 cursor-pointer transition-transform hover:scale-[1.02] ${!truck.isOpen && 'opacity-60 grayscale'}`}
        >
          <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
              <img src={truck.image} alt={truck.name} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <div className="flex justify-between items-start">
                <h3 className="font-bold text-lg text-gray-900">{truck.name}</h3>
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full font-medium">{truck.rating} ★</span>
            </div>
            <p className="text-gray-500 text-sm mb-1">{truck.cuisine} • {truck.distance}</p>
            <div className="flex items-center gap-2 text-xs text-gray-400 mt-auto">
                <Clock size={12} />
                <span>{truck.isOpen ? '10-20 min' : 'Opens at 11:00 AM'}</span>
                <span className="mx-1">•</span>
                <span>$$</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const TruckDetail = () => {
    if (!selectedTruck) return null;

    return (
      <div className="bg-white min-h-screen pb-24 pt-16 md:pt-0">
        {/* Mobile Top Bar for Detail View */}
        <div className="md:hidden fixed top-0 left-0 w-full bg-white z-40 h-16 flex items-center px-4 shadow-sm">
             <button 
                onClick={() => setView(ViewState.HOME)}
                className="p-2 -ml-2 text-gray-800"
            >
                <ArrowLeft size={24} />
            </button>
            <span className="font-bold text-lg ml-2">{selectedTruck.name}</span>
        </div>

        {/* Header Image */}
        <div className="relative h-48 md:h-64 bg-gray-200">
            <img src={selectedTruck.coverImage} alt={selectedTruck.name} className="w-full h-full object-cover" />
            <button 
                onClick={() => setView(ViewState.HOME)}
                className="hidden md:block absolute top-4 left-4 bg-white p-2 rounded-full shadow-lg text-gray-800 hover:bg-gray-100"
            >
                <ArrowLeft size={20} />
            </button>
        </div>

        {/* Info */}
        <div className="px-6 py-6 -mt-6 relative bg-white rounded-t-3xl">
            <div className="flex justify-between items-start mb-2">
                <h1 className="text-3xl font-bold text-brand-blue">{selectedTruck.name}</h1>
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">
                    {selectedTruck.rating} ★
                </div>
            </div>
            <p className="text-gray-500 mb-4">{selectedTruck.cuisine} • {selectedTruck.location.address} • {selectedTruck.distance}</p>
            
            <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar mb-6">
                <div className="flex-shrink-0 px-4 py-2 bg-gray-50 rounded-lg border border-gray-100 text-center">
                    <p className="text-xs text-gray-500">Delivery Fee</p>
                    <p className="font-semibold text-sm">$1.49</p>
                </div>
                <div className="flex-shrink-0 px-4 py-2 bg-gray-50 rounded-lg border border-gray-100 text-center">
                    <p className="text-xs text-gray-500">Time</p>
                    <p className="font-semibold text-sm">15 min</p>
                </div>
            </div>

            <h2 className="text-xl font-bold text-gray-900 mb-4">Menu</h2>
            <div className="space-y-6">
                {selectedTruck.menu.map(item => (
                    <div key={item.id} className="flex justify-between gap-4 border-b border-gray-100 pb-6 last:border-0">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <h3 className="font-semibold text-gray-900">{item.name}</h3>
                                {item.popular && <span className="text-[10px] bg-orange-100 text-orange-600 px-1.5 py-0.5 rounded font-medium">POPULAR</span>}
                            </div>
                            <p className="text-gray-500 text-sm line-clamp-2 mb-2">{item.description}</p>
                            <p className="font-medium text-gray-900">${item.price.toFixed(2)}</p>
                        </div>
                        <div className="relative">
                            <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden">
                                <img src={`https://picsum.photos/seed/${item.id}/200/200`} alt={item.name} className="w-full h-full object-cover" />
                            </div>
                            <button 
                                onClick={() => handleAddToCart(item)}
                                className="absolute -bottom-2 right-1/2 transform translate-x-1/2 bg-white border border-gray-200 shadow-sm rounded-full p-1.5 hover:bg-brand-blue hover:text-white transition-colors"
                            >
                                <Plus size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Sticky Cart Button */}
        {cart.length > 0 && (
            <div className="fixed bottom-20 md:bottom-8 left-0 w-full px-6 z-30">
                <button 
                    onClick={handleCheckout}
                    className="w-full bg-brand-blue text-white py-4 rounded-xl shadow-xl flex justify-between px-6 items-center hover:bg-blue-900 transition-colors"
                >
                    <div className="flex items-center gap-2">
                        <div className="bg-white bg-opacity-20 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                            {cart.length}
                        </div>
                        <span>View Order</span>
                    </div>
                    <span className="font-bold text-lg">
                        ${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
                    </span>
                </button>
            </div>
        )}
      </div>
    );
  };

  const OrderSuccessModal = () => (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm animate-fade-in">
          <div className="bg-white p-8 rounded-3xl shadow-2xl flex flex-col items-center max-w-sm text-center m-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                  <CheckCircle size={40} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Placed!</h2>
              <p className="text-gray-500 mb-6">Your food is being prepared. Head to the truck for pickup in 15 mins.</p>
              <div className="bg-brand-yellow bg-opacity-20 text-brand-yellow-dark px-4 py-2 rounded-lg font-semibold text-sm">
                  +25 Loyalty Points Earned
              </div>
          </div>
      </div>
  );

  // --- Main Render ---

  if (view === ViewState.LOGIN) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans pt-16 md:pt-16">
      {showOrderSuccess && <OrderSuccessModal />}
      
      {view !== ViewState.VENDOR_DASHBOARD && <Navbar />}

      {view === ViewState.HOME && (
        <div className="max-w-4xl mx-auto px-4 md:px-6 pt-4">
          {/* Header / Toggle */}
          <div className="flex items-center justify-between mb-4">
            <div>
                <p className="text-xs text-brand-blue font-bold tracking-wide uppercase">Find Food</p>
                <h2 className="text-2xl font-bold text-gray-900">Near Campus</h2>
            </div>
            <div className="bg-gray-100 p-1 rounded-lg flex">
                <button 
                    onClick={() => setIsMapView(true)}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${isMapView ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
                >
                    Map
                </button>
                <button 
                    onClick={() => setIsMapView(false)}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${!isMapView ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
                >
                    List
                </button>
            </div>
          </div>

          {/* Content */}
          {isMapView ? <MapComponent /> : <TruckList />}
        </div>
      )}

      {view === ViewState.DETAILS && <TruckDetail />}
      
      {view === ViewState.LOYALTY && user && <LoyaltyProgram points={user.loyaltyPoints} />}
      
      {view === ViewState.VENDOR_DASHBOARD && (
          <div>
               <div className="fixed top-0 left-0 w-full bg-brand-blue text-white py-3 px-6 flex justify-between items-center z-50 shadow-md">
                   <button 
                     onClick={() => setView(ViewState.LOGIN)}
                     className="font-bold text-xl hover:text-blue-100 transition-colors text-left flex items-center gap-2"
                   >
                     <Logo className="w-8 h-8 border-2 border-transparent rounded-full bg-white" />
                     <span>TruckTrackr <span className="font-normal text-blue-300 text-sm hidden sm:inline">| Vendor Portal</span></span>
                   </button>
                   <button onClick={() => setView(ViewState.LOGIN)} className="text-sm hover:underline text-blue-200">Log Out</button>
               </div>
               <div className="pt-12">
                   <VendorDashboard />
               </div>
          </div>
      )}

      {view === ViewState.PROFILE && (
          <div className="p-8 flex flex-col items-center justify-center h-[80vh]">
              <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 overflow-hidden">
                  <img src="https://picsum.photos/seed/user/200/200" alt="Profile" />
              </div>
              <h2 className="text-2xl font-bold">{user?.name}</h2>
              <p className="text-gray-500 mb-8">{user?.role}</p>
              <button onClick={() => setView(ViewState.LOGIN)} className="text-red-500 font-medium">Log Out</button>
          </div>
      )}

      {/* Chat Assistant - Only show for students/home view */}
      {view !== ViewState.VENDOR_DASHBOARD && <ChatAssistant />}
    </div>
  );
};

export default App;
