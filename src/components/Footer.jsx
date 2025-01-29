import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">IWD Kano</h3>
            <p className="text-gray-300">
              Celebrating and empowering women in technology across Kano.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-primary transition">About</Link></li>
              <li><Link to="/schedule" className="hover:text-primary transition">Schedule</Link></li>
              <li><Link to="/speakers" className="hover:text-primary transition">Speakers</Link></li>
              <li><Link to="/sponsors" className="hover:text-primary transition">Sponsors</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">Get Involved</h4>
            <ul className="space-y-2">
              <li><Link to="/get-involved" className="hover:text-primary transition">Volunteer</Link></li>
              <li><Link to="/get-involved" className="hover:text-primary transition">Become a Speaker</Link></li>
              <li><Link to="/sponsors" className="hover:text-primary transition">Become a Sponsor</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition"><FaFacebook size={24} /></a>
              <a href="#" className="hover:text-primary transition"><FaTwitter size={24} /></a>
              <a href="#" className="hover:text-primary transition"><FaInstagram size={24} /></a>
              <a href="#" className="hover:text-primary transition"><FaLinkedin size={24} /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} IWD Kano. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;