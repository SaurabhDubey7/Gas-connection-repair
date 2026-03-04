import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "LPG Gas Stove Repair",
      image: "/images/stove-repair.jpg",
    },
    {
      title: "Gas Pipeline Installation",
      image: "/images/pipeline-installation.jpg",
    },
    {
      title: "Gas Leakage Detection",
      image: "/images/gas-leakage.jpg",
    },
    {
      title: "Burner Cleaning & Servicing",
      image: "/images/burner-cleaning.jpg",
    },
    {
      title: "Regulator Replacement",
      image: "/images/regulator-replacement.jpg",
    },
    {
      title: "Commercial Kitchen Gas Setup",
      image: "/images/commercial-kitchen.jpg",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold text-gray-900">
          Our Gas Services
        </h3>

        <p className="mt-4 text-gray-600">
          Professional gas stove repair and pipeline services across Hyderabad.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              {/* Service Image */}
              <div className="relative w-full h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h4 className="text-lg font-semibold text-blue-700">
                  {service.title}
                </h4>
                <p className="mt-3 text-gray-600 text-sm">
                  Safe, efficient, and affordable service handled by experienced technicians.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}