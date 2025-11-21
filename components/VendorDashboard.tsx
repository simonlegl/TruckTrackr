import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { DollarSign, Users, Calendar, TrendingUp } from 'lucide-react';

const REVENUE_DATA = [
  { name: 'Mon', sales: 4000 },
  { name: 'Tue', sales: 3000 },
  { name: 'Wed', sales: 2000 },
  { name: 'Thu', sales: 2780 },
  { name: 'Fri', sales: 1890 },
  { name: 'Sat', sales: 2390 },
  { name: 'Sun', sales: 3490 },
];

const SUBSCRIPTION_TIERS = [
  { name: 'Basic', price: 49, features: 'Analytics' },
  { name: 'Premium', price: 99, features: 'Live Support' },
  { name: 'Enterprise', price: 149, features: 'Account Manager' },
];

export const VendorDashboard: React.FC = () => {
  return (
    <div className="p-4 md:p-8 pb-24 space-y-8 bg-gray-50 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Vendor Dashboard</h2>
          <p className="text-gray-500">Welcome back, Taco Titan Owner</p>
        </div>
        <div className="bg-white px-4 py-2 rounded-lg shadow-sm border flex items-center gap-2">
          <span className="text-sm text-gray-500">Current Plan:</span>
          <span className="font-semibold text-brand-blue">Premium ($99/mo)</span>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500">Total Sales</p>
              <h3 className="text-2xl font-bold mt-1">$12,450</h3>
            </div>
            <div className="p-2 bg-green-100 rounded-lg text-green-600">
              <DollarSign size={20} />
            </div>
          </div>
          <p className="text-xs text-green-600 mt-4 flex items-center gap-1">
            <TrendingUp size={12} /> +12% from last month
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500">Platform Fee (6%)</p>
              <h3 className="text-2xl font-bold mt-1">$747</h3>
            </div>
            <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
              <DollarSign size={20} />
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-4">Auto-deducted</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500">Event Bookings</p>
              <h3 className="text-2xl font-bold mt-1">3</h3>
            </div>
            <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
              <Calendar size={20} />
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-4">Next: Campus Fair (Fri)</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500">Active Subscribers</p>
              <h3 className="text-2xl font-bold mt-1">1,204</h3>
            </div>
            <div className="p-2 bg-blue-100 rounded-lg text-brand-blue">
              <Users size={20} />
            </div>
          </div>
          <p className="text-xs text-green-600 mt-4">Top rated in region</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-[400px]">
          <h3 className="text-lg font-semibold mb-6">Weekly Sales Revenue</h3>
          <ResponsiveContainer width="100%" height="85%">
            <BarChart data={REVENUE_DATA}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9ca3af'}} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af'}} prefix="$" />
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                cursor={{fill: '#f3f4f6'}}
              />
              <Bar dataKey="sales" fill="#00296B" radius={[4, 4, 0, 0]} barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-[400px]">
          <h3 className="text-lg font-semibold mb-6">Customer Traffic Trend</h3>
          <ResponsiveContainer width="100%" height="85%">
            <LineChart data={REVENUE_DATA}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9ca3af'}} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af'}} />
              <Tooltip 
                 contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              />
              <Line type="monotone" dataKey="sales" stroke="#FDC500" strokeWidth={3} dot={{ r: 6, fill: '#FDC500', strokeWidth: 2, stroke: '#fff' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Upsell Section */}
      <div className="bg-gradient-to-r from-brand-blue to-blue-900 rounded-2xl p-8 text-white">
        <div className="md:w-2/3">
          <h3 className="text-xl font-bold mb-2">Upgrade to Enterprise Analytics</h3>
          <p className="text-blue-100 mb-6">Get deep insights into student preferences, heatmap tracking, and AI-driven menu optimization.</p>
          <button className="bg-brand-yellow text-brand-blue px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
            View Plans
          </button>
        </div>
      </div>
    </div>
  );
};
