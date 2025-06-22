import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {

  return (

    <footer
      className="mt-10 px-4 py-8 text-center border-t bg-white text-gray-900 border-gray-200
      dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700"
    >

      {/*================Branding====================*/}
      <p className="font-bold text-lg mb-1 dark:text-gray-100">CreativeX Agency</p>
      <p className="mb-4 text-sm">Building beautiful digital experiences 🚀</p>

      {/*=====================Social Links=====================*/}
      <div className="flex justify-center gap-6 text-xl mb-4">
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-500 transition"
        >
          <FaFacebook />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-500 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-500 transition"
        >
          <FaGithub />
        </a>
      </div>

      {/*=======================Copyright====================*/}
      <p className="text-xs">
        &copy; {new Date().getFullYear()} CreativeX. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
