import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  // state for take form data
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Message submitted successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="px-4 sm:px-6 lg:px-20 py-16 space-y-16">
      {/*=====================Header=======================*/}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Contact Us</h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          We'd love to hear from you. Fill out the form or reach us directly through the contact info below.
        </p>
      </div>

      {/*==========================Grid Layout============================*/}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* ----------------Contact Form------------------ */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-gray-50 dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow transition"
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            />
          </div>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            />
          </div>
          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            />
          </div>
          {/* Submit */}
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition w-full"
          >
            Send Message
          </button>
        </form>

        {/* ------------------Contact Info------------------- */}
        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <div>
            <h3 className="text-lg font-semibold">CreativeX Agency</h3>
            <p>Empowering businesses through digital innovation.</p>
          </div>
          <div>
            <h4 className="font-medium">📍 Address</h4>
            <p>123 Startup Street, Innovation City, India</p>
          </div>
          <div>
            <h4 className="font-medium">📞 Phone</h4>
            <p>+91 98765 43210</p>
          </div>
          <div>
            <h4 className="font-medium">✉️ Email</h4>
            <p>hello@creativex.com</p>
          </div>
        </div>
      </div>

      {/*===================start conversation======================== */}
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Let’s Work Together</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Whether you're ready to start or just want to explore ideas — we're here to talk.
        </p>
        <a
          href="#"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
        >
          Start a Conversation
        </a>
      </div>

      <ToastContainer position="top-right" autoClose={1500} />
    </section>
  );
};

export default Contact;
