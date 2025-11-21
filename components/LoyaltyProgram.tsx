import React from 'react';
import { Star, Gift, ChevronRight } from 'lucide-react';
import { LOYALTY_REWARDS } from '../constants';

export const LoyaltyProgram: React.FC<{ points: number }> = ({ points }) => {
  const progress = Math.min((points / 250) * 100, 100);

  return (
    <div className="p-4 md:p-8 pb-24 space-y-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900">Your Rewards</h2>
      
      {/* Card */}
      <div className="bg-brand-blue rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 transform translate-x-10 -translate-y-10">
          <Star size={200} fill="white" />
        </div>
        
        <div className="relative z-10">
          <p className="text-blue-200 font-medium mb-1">TruckTrackr Points</p>
          <h1 className="text-5xl font-bold mb-6">{points}</h1>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-blue-100">
              <span>Progress to next reward</span>
              <span>{points}/250</span>
            </div>
            <div className="h-3 bg-blue-900 rounded-full overflow-hidden">
              <div 
                className="h-full bg-brand-yellow rounded-full transition-all duration-1000"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Rewards List */}
      <div>
        <h3 className="text-lg font-bold mb-4 text-gray-800">Available Rewards</h3>
        <div className="space-y-3">
          {LOYALTY_REWARDS.map((item, idx) => {
             const isUnlocked = points >= item.points;
             return (
               <div 
                 key={idx} 
                 className={`flex items-center justify-between p-4 rounded-xl border ${
                   isUnlocked ? 'bg-white border-brand-yellow shadow-sm' : 'bg-gray-50 border-gray-200 opacity-60'
                 }`}
               >
                 <div className="flex items-center gap-4">
                   <div className={`p-3 rounded-full ${isUnlocked ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-200 text-gray-500'}`}>
                     <Gift size={24} />
                   </div>
                   <div>
                     <p className="font-semibold text-gray-900">{item.reward}</p>
                     <p className="text-sm text-gray-500">{item.points} points required</p>
                   </div>
                 </div>
                 {isUnlocked ? (
                   <button className="px-4 py-2 bg-brand-blue text-white text-sm rounded-lg hover:bg-blue-800">
                     Redeem
                   </button>
                 ) : (
                   <div className="text-gray-400">
                     <ChevronRight size={20} />
                   </div>
                 )}
               </div>
             );
          })}
        </div>
      </div>

      {/* History */}
      <div className="mt-8">
        <h3 className="text-lg font-bold mb-4 text-gray-800">Recent Activity</h3>
        <div className="bg-white rounded-xl border border-gray-200 divide-y">
            <div className="p-4 flex justify-between items-center">
                <div>
                    <p className="font-medium">Order from Taco Titan</p>
                    <p className="text-xs text-gray-500">Yesterday</p>
                </div>
                <span className="text-green-600 font-bold">+25 pts</span>
            </div>
            <div className="p-4 flex justify-between items-center">
                <div>
                    <p className="font-medium">Order from Burger Bus</p>
                    <p className="text-xs text-gray-500">Oct 24, 2023</p>
                </div>
                <span className="text-green-600 font-bold">+30 pts</span>
            </div>
        </div>
      </div>
    </div>
  );
};
