import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcStripe,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="pt-10 pb-5 bg-gray-900 text-gray-300">
      <div className="container">
        {/* ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
          {/* COL 1 - CONTACT */}
          <div>
            <h3 className="text-lg font-light mb-4">Contact us</h3>

            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <FaLocationDot className="mt-1" />
                <span>8500 Lorem Street Chicago, IL 55030 Dolor sit amet</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone />
                <a href="tel:+88001234567">+8(800) 123 4567</a>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope />
                <a href="mailto:themesflat@support.com">
                  themesflat@support.com
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-5 text-lg">
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* COL 2 - SHOPPING */}
          <div>
            <h3 className="text-lg font-light mb-4">Shopping</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#">Shipping</a>
              </li>
              <li>
                <a href="#">Shop by Brand</a>
              </li>
              <li>
                <a href="#">Track order</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Size Guide</a>
              </li>
              <li>
                <a href="#">My Wishlist</a>
              </li>
            </ul>
          </div>

          {/* COL 3 - INFORMATION */}
          <div>
            <h3 className="text-lg font-light mb-4">Information</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Term & Policy</a>
              </li>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">News & Blog</a>
              </li>
              <li>
                <a href="#">Refunds</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>

          {/* COL 4 - SUBSCRIBE */}
          <div>
            <h3 className="text-lg font-light mb-4">Let’s keep in touch</h3>

            <p className="text-sm mb-4">
              Enter your email below to be the first to know about new
              collections and product launches.
            </p>

            <div className="flex items-center mb-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-l-md bg-gray-800 border border-gray-700 text-sm focus:outline-none"
              />
              <button className="px-4 py-2 bg-white text-black rounded-r-md text-sm font-medium">
                Subscribe
              </button>
            </div>

            <p className="text-xs opacity-70">
              By clicking subscribe, you agree to the{" "}
              <a className="underline" href="#">
                Terms of Service
              </a>{" "}
              and{" "}
              <a className="underline" href="#">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="grid justify-center sm:grid-cols-2 gap-4 items-center mt-12 pt-5 border-t border-gray-700">
          <div>
            {/* Copyright */}
            <p className="text-sm opacity-75">
              © {new Date().getFullYear()} Wear Mart. All Rights Reserved.
            </p>
          </div>
          <div>
            {/* Secure Payments */}
            <div className="flex items-center gap-6 justify-end text-4xl">
              <FaCcVisa />
              <FaCcMastercard />
              <FaCcPaypal />
              <FaCcStripe />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
