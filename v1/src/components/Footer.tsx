
import { Link } from 'react-router-dom';
import { FileText, PenTool } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4 group">
              <div className="w-10 h-10 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                <FileText className="w-6 h-6" />
              </div>
              <div className="flex items-center">
                <span className="text-xl font-bold text-yellow-400">My</span>
                <span className="text-xl font-bold text-white">Typist</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              Fast document automation and e-signatures for businesses of all sizes. 
              Streamline your workflow with MyTypist's powerful AutoType and AutoSign features.
            </p>
            <div className="text-sm text-gray-500">
              © 2024 MyTypist. All rights reserved.
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/how-to-use" className="text-gray-400 hover:text-white transition-colors">
                  How to Use
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/legal/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/legal/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
