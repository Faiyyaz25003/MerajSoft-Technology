export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8">
        {/* Company */}
        <div>
          <h2 className="text-xl font-bold mb-3">DevCompany</h2>
          <p className="text-gray-400">
            We build modern websites, apps, and software solutions for
            businesses.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Web Development</li>
            <li>App Development</li>
            <li>UI/UX Design</li>
            <li>SEO</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="text-gray-400">Mumbai, India</p>
          <p className="text-gray-400">email@example.com</p>
          <p className="text-gray-400">+91 98765 43210</p>
        </div>
      </div>

      <div className="text-center text-gray-500 border-t border-gray-700 py-4">
        © 2026 DevCompany. All rights reserved.
      </div>
    </footer>
  );
}
