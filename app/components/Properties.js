export default function Properties() {
  const properties = [
    {
      title: "Residence with Patio",
      description: "Our real estate agency is a business that specializes in helping clients buy, sell, or rent properties.",
    },
    {
      title: "Luxury Penthouse",
      description: "Our real estate agency is a business that specializes in helping clients buy, sell, or rent properties.",
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {properties.map((property, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{property.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{property.description}</p>
              <button className="text-blue-600 hover:text-blue-800 font-semibold">
                View More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}