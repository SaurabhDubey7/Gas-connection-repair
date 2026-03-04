import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="mt-10 w-full">
      
      {/* Top Gradient Section */}
      <div className="bg-gradient-to-r from-purple-700 via-fuchsia-600 to-purple-800 py-20">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Heading */}
          <h2 className="text-4xl font-bold text-white mb-16">
            GET IN TOUCH
          </h2>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8 text-center">
            
            {/* Location */}
            <div className="relative border border-dashed border-white/40 p-10 rounded-lg">
              
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white w-20 h-20 rounded-full flex items-center justify-center shadow-lg">
                <MapPin size={30} className="text-purple-700" />
              </div>

              <h3 className="text-white text-xl font-semibold mt-12">
                LOCATION
              </h3>
              <p className="text-white/80 mt-2">All Over City</p>
            </div>

            {/* Phone */}
            <div className="relative border border-dashed border-white/40 p-10 rounded-lg">
              
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white w-20 h-20 rounded-full flex items-center justify-center shadow-lg">
                <Phone size={30} className="text-purple-700" />
              </div>

              <h3 className="text-white text-xl font-semibold mt-12">
                TOLL FREE NO.
              </h3>
              <a
                href="tel:+917800755637"
                className="text-white/90 mt-2 block hover:underline"
              >
                +91 7800755637
              </a>
            </div>

            {/* WhatsApp */}
            <div className="relative border border-dashed border-white/40 p-10 rounded-lg">
              
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white w-20 h-20 rounded-full flex items-center justify-center shadow-lg">
                <Mail size={30} className="text-purple-700" />
              </div>

              <h3 className="text-white text-xl font-semibold mt-12">
                WHATSAPP
              </h3>
              <a
                href="https://wa.me/917800755637"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 mt-2 block hover:underline"
              >
                Send Message
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}