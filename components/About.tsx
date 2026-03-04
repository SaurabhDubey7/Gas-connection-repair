import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="pt-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <h3 className="text-3xl font-bold text-gray-900 text-center">
          Why Choose Us?
        </h3>

        {/* Main Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 mt-7 items-center">
          
          {/* LEFT SIDE – Content */}
          <div className="grid sm:grid-cols-2 gap-10">
            <div>
              <h4 className="text-lg font-semibold text-blue-700">
                Quick Response
              </h4>
              <p className="mt-2 text-gray-600">
                30–60 minute response time across Hyderabad with same-day service.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-blue-700">
                Experienced Technicians
              </h4>
              <p className="mt-2 text-gray-600">
                Skilled professionals ensuring safe and proper gas repairs.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-blue-700">
                Affordable Pricing
              </h4>
              <p className="mt-2 text-gray-600">
                Transparent and competitive pricing with no hidden charges.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-blue-700">
                Safety First Approach
              </h4>
              <p className="mt-2 text-gray-600">
                Strict safety standards followed for all services.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE – Brands */}
          <div className="text-center">

            <div className="mt-8 flex justify-center">
              <Image
                src="/images/brands.png"
                alt="Gas stove brands we service including Sunflame, Prestige, Bosch, Faber and more"
                width={700}
                height={450}
                className="object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}