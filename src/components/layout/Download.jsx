import { FaApple, FaGooglePlay } from 'react-icons/fa';
import AppMockup from '../../assets/app-mockup.png';

const Download = () => {
  const features = [
    { title: 'Access To', subtitle: 'Prescriptions' },
    { title: 'Track Health', subtitle: 'Efficiently' },
    { title: 'Direct Chat With', subtitle: 'Doctors' },
    { title: 'In-App Reminders', subtitle: 'For Consultations' },
  ];

  return (
    <section className="bg-[#FFF7E2] py-12 px-6 md:px-12 lg:px-20">
      <div className="flex flex-col items-center justify-center max-w-8xl mx-auto">
        <div className='flex lg:flex-row gap-8'>
        <div className='felx-1 text-center lg: text-left'>
        <h2 
          className="text-[32px] md:text-[36px] font-bold text-[#3A643B] mb-5 leading-[1.2]" 
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Download Amrutam Ayurveda<br />App Now
        </h2>
        
        {/* Description */}
        <p className="text-[#4A4A4A] text-[15px] leading-[1.6] mb-8 max-w-[420px]">
          The Amrutam Ayurveda App is your one-stop app for all things Ayurveda! Apart from mimicking the website, the app has added benefits
        </p>
        
        {/* Features Grid */}
        <div className="grid grid-cols-2 h-[120px] mb-10 max-w-[420px]">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center h-12 w-46 gap-3 border border-[#D9D9D9] rounded-[12px] px-4 py-3"
            >
              {/* Pill Icon */}
              <div className="w-7 h-7 flex-shrink-0">
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="14" cy="14" r="13" stroke="#3A643B" strokeWidth="1"/>
                  <ellipse cx="14" cy="11" rx="4" ry="2.5" stroke="#3A643B" strokeWidth="1" fill="none" transform="rotate(-45 14 14)"/>
                  <ellipse cx="14" cy="17" rx="4" ry="2.5" stroke="#3A643B" strokeWidth="1" fill="none" transform="rotate(-45 14 14)"/>
                  <path d="M11 11L17 17" stroke="#3A643B" strokeWidth="1"/>
                </svg>
              </div>
              {/* Text */}
              <div>
                <p className="text-[#4A4A4A] text-[12px] leading-[1.3]">{feature.title}</p>
                <p className="text-[#4A4A4A] text-[12px] font-semibold leading-[1.3]">{feature.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Download Buttons */}
        <div className="flex gap-4">
          {/* Google Play Button */}
          <a
            href="#"
            className="flex items-center justify-center gap-3 bg-black text-white px-4 py-2.5 h-[40px] w-[160px] rounded-[8px] hover:bg-gray-800 transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
            </svg>
            <div className="text-left">
              <p className="text-[8px] uppercase tracking-wide leading-none">Get it on</p>
              <p className="text-[14px] font-semibold leading-tight">Google Play</p>
            </div>
          </a>
          
          {/* App Store Button */}
          <a
            href="#"
            className="flex items-center justify-center gap-3 bg-black text-white px-4 py-2.5 h-[40px] w-[160px] rounded-[8px] hover:bg-gray-800 transition-colors"
          >
            <FaApple className="text-[28px]" />
            <div className="text-left">
              <p className="text-[8px] uppercase tracking-wide leading-none">Download on the</p>
              <p className="text-[14px] font-semibold leading-tight">App Store</p>
            </div>
          </a>
          </div>
          </div>

          {/* Right Content - App Mockup */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone Mockup Design */}
              <div className="w-64 h-128 md:w-82 md:h-144 lg:w-100 lg:h-120">
                {/* Phone Screen */}
                <img src={AppMockup}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
