// import image
import teamImg from '../assets/about/teamwork.svg';

const About = () => {
  //Core Values
  const coreValues = [
    {
      title: 'Innovation',
      desc: 'We explore modern tools and ideas to stay ahead of digital trends.',
    },
    {
      title: 'Quality',
      desc: 'We focus on clean code, seamless design, and user satisfaction.',
    },
    {
      title: 'Trust',
      desc: 'We believe in building long-term relationships with every client.',
    },
  ];

  return (
    <section className="space-y-16 px-4 py-10 sm:px-6 lg:px-20">

      {/*==================Intro Section===================*/}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100">
          Empowering Brands with Creativity & Code
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          At <span className="text-blue-600 dark:text-blue-400 font-semibold">CreativeX</span>, we specialize in building beautiful, functional, and growth-focused digital products. Since our founding in 2024, our mission has remained simple: design boldly, develop smartly, and deliver results that matter.
        </p>
      </div>

      {/*=========================Team Section==========================*/}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <img
          src={teamImg}
          alt="Our team"
          className="rounded-lg shadow-lg dark:brightness-90 w-full object-contain transition"
        />
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            A Creative Team That Delivers
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Our team is made up of passionate designers, innovative developers, and strategic thinkers — all working together to create experiences that make an impact.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Collaboration, transparency, and client success are the core of everything we do.
          </p>
        </div>
      </div>

      {/*===============================Core Values Section==========================*/}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What We Stand For</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {coreValues.map((value, idx) => (
            <div
              key={idx}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/*===================================Mission & Vision Section=============================*/}
      <div className="bg-gray-100 dark:bg-gray-900 py-10 px-6 rounded-xl text-center space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission & Vision</h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Our mission is to transform brands through innovative digital experiences. We envision a world where technology makes business growth intuitive, accessible, and beautiful.
        </p>
      </div>

    </section>
  );
};

export default About;
