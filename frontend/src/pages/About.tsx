import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const stats = [
    { label: 'Founded', value: '1889' },
    { label: 'Employees', value: '6,500+' },
    { label: 'Countries', value: '100+' },
    { label: 'Games Published', value: '4,500+' },
  ];

  const values = [
    {
      name: 'Innovation',
      description: 'Pioneering new ways to play and create unforgettable gaming experiences.',
    },
    {
      name: 'Quality',
      description: 'Delivering polished, engaging, and family-friendly entertainment.',
    },
    {
      name: 'Fun',
      description: 'Creating joy and bringing smiles to people of all ages worldwide.',
    },
    {
      name: 'Community',
      description: 'Building connections through shared gaming experiences.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          src="/images/nintendo.png"
          alt="Nintendo"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center opacity-25 mix-blend-overlay"
        />
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">About Nintendo</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Nintendo is a Japanese multinational consumer electronics and video game company headquartered in Kyoto, Japan.
              Founded in 1889 by Fusajiro Yamauchi as a playing card company, Nintendo has become one of the most influential
              and valuable companies in the video game industry.
            </p>
          </div>
        </div>
      </div>

      {/* Stats section */}
      <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">{stat.label}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Mission section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Mission</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            At Nintendo, we are dedicated to delivering unique entertainment experiences that put smiles on the faces of
            people all around the world. Through our commitment to innovation and quality, we strive to create games and
            systems that push the boundaries of play and imagination.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {values.map((value) => (
            <div key={value.name}>
              <dt className="font-semibold text-gray-900">{value.name}</dt>
              <dd className="mt-1 text-gray-600">{value.description}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* History section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our History</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            From humble beginnings as a playing card manufacturer to becoming a global leader in interactive entertainment,
            Nintendo's journey spans over 130 years of innovation and creativity.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:mx-0">
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-gray-900">1889</h3>
              <p className="mt-2 text-gray-600">Founded as a playing card company in Kyoto, Japan</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">1985</h3>
              <p className="mt-2 text-gray-600">Release of the Nintendo Entertainment System (NES)</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">1989</h3>
              <p className="mt-2 text-gray-600">Launch of the Game Boy handheld console</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">2017</h3>
              <p className="mt-2 text-gray-600">Introduction of the Nintendo Switch</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ready to start your Nintendo journey?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Explore our latest games and consoles, and join millions of players worldwide in experiencing the joy of Nintendo.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/products"
              className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Browse Products
            </Link>
            <Link to="/contact" className="text-sm font-semibold leading-6 text-gray-900">
              Contact Us <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-32"></div>
    </div>
  );
};

export default About;
