import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
  imageSrc?: string;
  imageAlt?: string;
}

interface Order {
  id: string;
  date: string;
  total: number;
  status: 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  items: OrderItem[];
}

interface UserProfile {
  name: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'profile' | 'orders'>('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [profile, setProfile] = useState<UserProfile>({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: ''
  });
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        setIsLoading(true);
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login');
          return;
        }

        // TODO: Fetch user profile from backend
        // For now using mock data
        setProfile({
          name: 'John Doe',
          email: 'john@example.com',
          address: '123 Nintendo St',
          city: 'Mario City',
          state: 'Mushroom Kingdom',
          zipCode: '12345',
          country: 'Nintendo World'
        });

        setOrders([
          {
            id: '1',
            date: '2025-02-23',
            total: 129.99,
            status: 'Delivered',
            items: [
              { id: '1', name: 'Super Mario Odyssey', quantity: 1, price: 59.99 },
              { id: '2', name: 'Nintendo Pro Controller', quantity: 1, price: 69.99 }
            ]
          },
          {
            id: '2',
            date: '2025-02-20',
            total: 359.99,
            status: 'Processing',
            items: [
              { id: '3', name: 'Nintendo Switch OLED', quantity: 1, price: 349.99 },
              { id: '4', name: 'Joy-Con Grip', quantity: 1, price: 9.99 }
            ]
          }
        ]);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [navigate]);

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      // TODO: Send updated profile to backend
      // For now just simulate an API call
      await new Promise(resolve => setTimeout(resolve, 500));
      setIsEditing(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update profile');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-red-600 text-xl font-bold mb-4">Error</h2>
          <p className="text-gray-700">{error}</p>
          <button
            onClick={() => setError(null)}
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="bg-white shadow rounded-lg mb-6">
            <div className="px-4 py-5 sm:p-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Your Profile</h1>
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8">
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`${
                      activeTab === 'profile'
                        ? 'border-red-500 text-red-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                  >
                    Profile Details
                  </button>
                  <button
                    onClick={() => setActiveTab('orders')}
                    className={`${
                      activeTab === 'orders'
                        ? 'border-red-500 text-red-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                  >
                    Order History
                  </button>
                </nav>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          {activeTab === 'profile' && (
            <div className="bg-white shadow rounded-lg">
              <form onSubmit={handleProfileUpdate} className="px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={profile.name}
                      onChange={handleInputChange}
                      disabled={!isEditing || isLoading}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm disabled:bg-gray-100 disabled:cursor-not-allowed"
                      required
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={profile.email}
                      onChange={handleInputChange}
                      disabled={!isEditing || isLoading}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm disabled:bg-gray-100 disabled:cursor-not-allowed"
                      required
                    />
                  </div>

                  <div className="col-span-6">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                      Street Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      value={profile.address}
                      onChange={handleInputChange}
                      disabled={!isEditing || isLoading}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm disabled:bg-gray-100 disabled:cursor-not-allowed"
                      required
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-2">
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      value={profile.city}
                      onChange={handleInputChange}
                      disabled={!isEditing || isLoading}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm disabled:bg-gray-100 disabled:cursor-not-allowed"
                      required
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-2">
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      id="state"
                      value={profile.state}
                      onChange={handleInputChange}
                      disabled={!isEditing || isLoading}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm disabled:bg-gray-100 disabled:cursor-not-allowed"
                      required
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-2">
                    <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      id="zipCode"
                      value={profile.zipCode}
                      onChange={handleInputChange}
                      disabled={!isEditing || isLoading}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm disabled:bg-gray-100 disabled:cursor-not-allowed"
                      required
                      pattern="[0-9]{5}"
                      title="Five digit zip code"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                      Country
                    </label>
                    <input
                      type="text"
                      name="country"
                      id="country"
                      value={profile.country}
                      onChange={handleInputChange}
                      disabled={!isEditing || isLoading}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm disabled:bg-gray-100 disabled:cursor-not-allowed"
                      required
                    />
                  </div>
                </div>

                <div className="mt-6 flex justify-end space-x-3">
                  {isEditing ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setIsEditing(false)}
                        disabled={isLoading}
                        className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="bg-red-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:bg-red-400 disabled:cursor-not-allowed"
                      >
                        {isLoading ? 'Saving...' : 'Save Changes'}
                      </button>
                    </>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setIsEditing(true)}
                      className="bg-red-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                      Edit Profile
                    </button>
                  )}
                </div>
              </form>
            </div>
          )}

          {/* Order History */}
          {activeTab === 'orders' && (
            <div className="bg-white shadow rounded-lg overflow-hidden">
              {orders.length === 0 ? (
                <div className="p-6 text-center">
                  <p className="text-gray-500">No orders found.</p>
                </div>
              ) : (
                <ul role="list" className="divide-y divide-gray-200">
                  {orders.map((order) => (
                    <li key={order.id} className="p-4 hover:bg-gray-50">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-900">Order #{order.id}</p>
                          <p className="text-sm text-gray-500">{order.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-900">${order.total.toFixed(2)}</p>
                          <p className={`text-sm ${
                            order.status === 'Delivered' ? 'text-green-600' : 
                            order.status === 'Processing' ? 'text-yellow-600' :
                            order.status === 'Shipped' ? 'text-blue-600' : 'text-red-600'
                          }`}>
                            {order.status}
                          </p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <h4 className="text-sm font-medium text-gray-900">Items:</h4>
                        <ul className="mt-2 divide-y divide-gray-200">
                          {order.items.map((item) => (
                            <li key={item.id} className="py-2">
                              <div className="flex justify-between">
                                <div className="text-sm text-gray-500">
                                  {item.quantity}x {item.name}
                                </div>
                                <div className="text-sm text-gray-900">
                                  ${(item.price * item.quantity).toFixed(2)}
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
