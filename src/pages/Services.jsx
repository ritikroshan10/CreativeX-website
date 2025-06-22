import { FaLaptopCode, FaPaintBrush, FaBullhorn, FaMobileAlt, FaSearch, FaCloud } from 'react-icons/fa';
const Services = () => {

  //Service data
  const servicesList = [
    {
      icon: <FaLaptopCode className="text-3xl text-blue-600 dark:text-blue-400" />,
      title: 'Web Development',
      desc: 'Custom, scalable websites built with performance and modern technologies.',
    },
    {
      icon: <FaPaintBrush className="text-3xl text-blue-600 dark:text-blue-400" />,
      title: 'UI/UX Design',
      desc: 'Beautiful, user-friendly interfaces focused on engagement and usability.',
    },
    {
      icon: <FaMobileAlt className="text-3xl text-blue-600 dark:text-blue-400" />,
      title: 'Mobile Apps',
      desc: 'Cross-platform apps for Android & iOS using modern frameworks like React Native.',
    },
    {
      icon: <FaSearch className="text-3xl text-blue-600 dark:text-blue-400" />,
      title: 'SEO Optimization',
      desc: 'Improve your visibility on search engines with smart on-page and off-page SEO.',
    },
    {
      icon: <FaCloud className="text-3xl text-blue-600 dark:text-blue-400" />,
      title: 'Cloud Hosting',
      desc: 'Fast and secure hosting solutions to keep your website running 24/7.',
    },
    {
      icon: <FaBullhorn className="text-3xl text-blue-600 dark:text-blue-400" />,
      title: 'Digital Marketing',
      desc: 'Run smart ad campaigns and grow your brand across digital platforms.',
    },
  ];

  return (
    <section className="px-4 py-16 space-y-12">

      {/*====================== Header==================== */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Our Services</h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg">
          We offer a full suite of digital services to help you launch, grow, and thrive in the modern web.
        </p>
      </div>

      {/*======================Services Grid==========================*/}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

        {servicesList.map((service, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 text-center shadow hover:shadow-md transition"
          >
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{service.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{service.desc}</p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Services;
