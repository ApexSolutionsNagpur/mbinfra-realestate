export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">
            What Our Clients Say About Us
          </h2>
          <div className="p-8 bg-white rounded-lg shadow-sm">
            <p className="mb-6 italic leading-relaxed text-gray-600">
              "For buyers, real estate agents can help them find properties that meet their 
              needs and budget, negotiate with sellers to get the best possible price, and 
              navigate the complex paperwork."
            </p>
            <button className="px-6 py-2 text-white transition duration-300 bg-blue-600 rounded-lg hover:bg-blue-700">
              View More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}