export default function Stats() {
  const stats = [
    { number: "2500+", label: "Square Meters" },
    { number: "150+", label: "SPA" },
    { number: "85%", label: "Green Spaces" },
    { number: "25+", label: "Years of Experience" },
  ];

  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}