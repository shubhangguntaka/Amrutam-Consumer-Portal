import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="h-[300px] flex items-center justify-center bg-[#d3dfd4] py-12">
      <div className="max-w-6xl mx-auto px-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20">

          {/* ---- Column 1 ---- */}
          <div>
            <h1 className="text-[#214d2f] font-semibold text-[15px] tracking-wide mb-6">
              Get in touch
            </h1>

            <p className="text-[15px] mb-4 leading-relaxed">
              <a href="support@amrutam.global" className="hover:underline hover:text-[#244526]">
                support@amrutam.global
              </a>
            </p>
            <br />
            <p className="text-[15px] leading-relaxed mb-4">
              Amrutam Pharmaceuticals Pvt Ltd., <br />
              chitragupt ganj, Nai Sadak, Lashkar, <br />
              Gwalior - 474001
            </p>
            <br />
            <p className="text-[15px] leading-relaxed mb-6">
              <a href="+91 9713171999" className="hover:underline hover:text-[#244526]">
                +91 9713171999
              </a>
            </p>
            <br />
            {/* Social icons */}
            <div className="mt-6 flex items-center gap-3">
              {[
                { icon: FaFacebookF, label: "Facebook" },
                { icon: FaInstagram, label: "Instagram" },
                { icon: FaYoutube, label: "YouTube" },
                { icon: FaTwitter, label: "Twitter" },
                { icon: FaLinkedinIn, label: "LinkedIn" },
                { icon: FaPinterestP, label: "Pinterest" },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  type="button"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#3c6e3f] text-white text-[13px] hover:bg-[#244526] transition-colors"
                >
                  <Icon />
                </button>
              ))}
            </div>
          </div>

          {/* ---- Column 2 ---- */}
          <div className="">
            <h3 className="mb-4 text-[15px] text-[#214d2f] font-semibold tracking-[0.2em]">
              Information
            </h3>
            <br />
            <ul className="space-y-1.5 text-sm leading-relaxed">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Terms and Conditions</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy for Mobile Apps
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Shipping, return and cancellation Policy
                </a>
              </li>
              <li><a href="#" className="hover:underline">International Delivery</a></li>
              <li>
                <a href="#" className="hover:underline">
                  For Businesses, Hotels, and Resorts
                </a>
              </li>
            </ul>
          </div>

          {/* ---- Column 3 ---- */}
          <div>
            <h1 className="text-[#214d2f] font-semibold text-[15px] tracking-wide mb-6 leading-relaxed">
              Subscribe to our Newsletter and join <br />
              Amrutam Family today!
            </h1>
            <br />
            <div className="flex items-center mt-6 w-full max-w-[350px] rounded-full border border-[#3d6d3c] overflow-hidden">
              <input
                type="text"
                placeholder="     Your Email Address"
                className="flex-1 items-center justify-center w-full px-6 py-3 text-[15px] outline-none bg-transparent text-[#214d2f]"
              />
              <button className="bg-black text-white w-[100px] h-[40px] px-6 py-3 text-[15px] font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
