import { Fragment, useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { ShoppingCartIcon, UserIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useCart } from '../context/CartContext'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartItems } = useCart();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('token');
      setIsAuthenticated(!!token);
    };

    checkAuth();
    window.addEventListener('storage', checkAuth);

    return () => {
      window.removeEventListener('storage', checkAuth);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/');
  };

  const isActivePath = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <Disclosure as="nav" className="bg-white shadow sticky top-0 z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/">
                    <img
                      className="h-8 w-auto"
                      src="/images/nintendo.png"
                      alt="Nintendo Store"
                    />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium ${
                        isActivePath(item.href)
                          ? 'border-red-500 text-gray-900'
                          : 'border-transparent text-gray-500 hover:border-red-500 hover:text-gray-900'
                      }`}
                      aria-current={isActivePath(item.href) ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
                <Link
                  to="/cart"
                  className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  aria-label={`Shopping cart with ${cartItemCount} items`}
                >
                  <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-600 flex items-center justify-center text-xs font-medium text-white">
                      {cartItemCount}
                    </span>
                  )}
                </Link>

                {isAuthenticated ? (
                  <div className="flex items-center space-x-4">
                    <Link
                      to="/profile"
                      className={`inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${
                        isActivePath('/profile') ? 'ring-2 ring-red-500 ring-offset-2' : ''
                      }`}
                    >
                      Your Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                      Sign out
                    </button>
                  </div>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                      Sign in
                    </Link>
                    <Link
                      to="/register"
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                      Sign up
                    </Link>
                  </>
                )}
              </div>

              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile cart icon */}
                <Link
                  to="/cart"
                  className="relative rounded-full bg-white p-2 text-gray-400 hover:text-gray-500 mr-2"
                  aria-label={`Shopping cart with ${cartItemCount} items`}
                >
                  <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-600 flex items-center justify-center text-xs font-medium text-white">
                      {cartItemCount}
                    </span>
                  )}
                </Link>

                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block border-l-4 py-2 pl-3 pr-4 text-base font-medium ${
                    isActivePath(item.href)
                      ? 'border-red-500 bg-red-50 text-red-700'
                      : 'border-transparent text-gray-500 hover:border-red-500 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                  aria-current={isActivePath(item.href) ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="border-t border-gray-200 pb-3 pt-4">
              {isAuthenticated ? (
                <div className="space-y-1">
                  <Link
                    to="/profile"
                    className={`block px-4 py-2 text-base font-medium ${
                      isActivePath('/profile')
                        ? 'bg-red-50 text-red-700'
                        : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    Your Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full px-4 py-2 text-left text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                  >
                    Sign out
                  </button>
                </div>
              ) : (
                <div className="space-y-1">
                  <Link
                    to="/login"
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                  >
                    Sign in
                  </Link>
                  <Link
                    to="/register"
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                  >
                    Sign up
                  </Link>
                </div>
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
