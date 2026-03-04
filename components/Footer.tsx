export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        
        {/* Business Info */}
        <div>
          <h4 className="text-lg font-semibold">
            Hyderabad Gas Services
          </h4>
          <p className="mt-3 text-sm text-gray-200">
            Fast and reliable gas stove repair and pipeline services across Hyderabad.
            30–60 minute response time with same-day service.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-200">
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold">Contact</h4>
          <p className="mt-3 text-sm text-gray-200">
            📍 Serving All Areas in Hyderabad
          </p>
          <a
            href="tel:+917800755637"
            className="mt-2 inline-block bg-white text-blue-900 font-semibold px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition"
            >
            📞 Call +91 78007 55637
        </a>
        </div>
      </div>

      <div className="text-center text-sm text-gray-300 mt-8 border-t border-blue-700 pt-6">
        © {new Date().getFullYear()} Hyderabad Gas Services. All rights reserved.
      </div>
    </footer>
  );
}