import { Link } from 'react-router-dom';
import { MdRocketLaunch } from 'react-icons/md';

// Trusted logos
import microsoftLogo from '../assets/trusted/Microsoft.svg';
import appleLogo from '../assets/trusted/apple.svg';
import googleLogo from '../assets/trusted/google.svg';
import teslaLogo from '../assets/trusted/Tesla-motors.svg';

const Home = () => {

  //Service Preview Cards
  const previewItems = [
    {
      title: 'Design',
      desc: 'Elegant and user-focused UI/UX that boosts engagement.',
    },
    {
      title: 'Development',
      desc: 'Modern, scalable websites with clean, efficient code.',
    },
    {
      title: 'Marketing',
      desc: 'SEO, content, and social strategies to grow your reach.',
    },
  ];

  // Trusted Brand Logos
  const brandLogos = [
    { name: 'Microsoft', src: microsoftLogo },
    { name: 'Apple', src: appleLogo },
    { name: 'Google', src: googleLogo },
    { name: 'Tesla', src: teslaLogo },
  ];

  // Why Choose Us
  const chooseUs = [
    {
      title: 'Tailored Solutions',
      desc: 'We craft digital products that meet your unique business needs.',
    },
    {
      title: 'Experienced Team',
      desc: 'Our experts bring years of experience in design, development, and marketing.',
    },
    {
      title: '24/7 Support',
      desc: 'We’re here to support you anytime, any day — always ready to help.',
    },
  ];

  return (
    <section className="space-y-16 px-4 py-12 sm:px-6 lg:px-20">

      {/* ====================== Hero Section ====================== */}
      <div className="text-center space-y-6">
        <div className="flex justify-center text-5xl text-blue-600">
          <MdRocketLaunch />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Launch Your Digital Future with
          <span className="text-blue-600 dark:text-blue-400"> CreativeX</span>
        </h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
          We’re a creative digital agency building modern websites, brands, and marketing solutions that drive results.
        </p>
        <Link
          to="/services"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
        >
          Explore Our Services
        </Link>
      </div>

      {/* ====================== Service Preview ====================== */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
        {previewItems.map((item, idx) => (
          <div
            key={idx}
            className="p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 transition hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* ====================== Trusted By Section ====================== */}
      <div className="text-center space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Trusted by Teams at
        </h2>
        <div className="flex justify-center flex-wrap gap-8 items-center">
          {brandLogos.map((brand, idx) => (
            <img
              key={idx}
              src={brand.src}
              alt={brand.name}
              className="h-10 w-auto object-contain filter dark:invert dark:brightness-200 transition duration-300"
            />
          ))}
        </div>
      </div>

      {/* ====================== Why Choose Us ====================== */}
      <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-6 md:p-10 space-y-10">
        <h2 className="text-2xl font-semibold text-center text-gray-900 dark:text-gray-100">
          Why Choose CreativeX?
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          {chooseUs.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-md transition"
            >
              <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-2">{item.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ====================== Final call To Action Section ====================== */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Ready to Transform Your Brand?
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Let’s build something amazing together. Contact us today!
        </p>
        <Link
          to="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
        >
          Get in Touch
        </Link>
      </div>

    </section>
  );
};

export default Home;
