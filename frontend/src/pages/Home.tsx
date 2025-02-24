import { Link } from 'react-router-dom';

export default function Home() {
  const featuredCategories = [
    {
      name: 'Games',
      description: 'Latest Nintendo Switch games',
      imageSrc: '/images/supermarioodyssey.jpg',
      href: '/products?category=games',
    },
    {
      name: 'Consoles',
      description: 'Nintendo Switch and accessories',
      imageSrc: '/images/switch-console.webp',
      href: '/products?category=consoles',
    },
    {
      name: 'Merchandise',
      description: 'Official Nintendo merchandise',
      imageSrc: '/images/nintendo.png',
      href: '/products?category=merchandise',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <div className="hidden sm:mb-10 sm:flex">
                  <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    New Super Mario game available now! <Link to="/products" className="font-semibold text-red-600"><span className="absolute inset-0" aria-hidden="true" />Check it out <span aria-hidden="true">&rarr;</span></Link>
                  </div>
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Welcome to Nintendo Store
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Discover the latest Nintendo games, consoles, and exclusive merchandise. 
                  Your one-stop shop for all things Nintendo.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    to="/products"
                    className="btn"
                  >
                    Shop Now
                  </Link>
                  <Link
                    to="/about"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-full w-full object-contain p-4 lg:object-cover"
            src="/images/supermarioodyssey.jpg"
            alt="Super Mario Odyssey"
          />
        </div>
      </div>

      {/* Featured categories */}
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">Featured Categories</h2>

            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {featuredCategories.map((category) => (
                <div key={category.name} className="group relative">
                  <div className="relative h-64 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75">
                    <img
                      src={category.imageSrc}
                      alt={category.name}
                      className="h-full w-full object-contain p-4"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <Link to={category.href}>
                      <span className="absolute inset-0" />
                      {category.name}
                    </Link>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{category.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
