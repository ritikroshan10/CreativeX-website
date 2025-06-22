const galleryImages = [
  '/images/img1.webp',
  '/images/img2.webp',
  '/images/img3.webp',
  '/images/img4.webp',
  '/images/img5.webp',
  '/images/img6.webp',
];

const Gallery = () => {
  return (
    <section className="px-4 py-16 space-y-10">

      {/* 🔹 Section Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Our Projects</h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          Take a look at some of the work we've crafted for clients around the world.
        </p>
      </div>

      {/* 🔹 Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Project ${idx + 1}`}
            loading="lazy"
            className="w-full h-56 sm:h-64 md:h-72 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
      
    </section>
  );
};

export default Gallery;
