import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className=" flex flex-col items-start">
          <a href="/">
            <img
              src={footerLogo}
              alt="logo"
              width={150}
              height={46}
              className="mt-0"
            />
          </a>
          <p className="text-white-400 mt-6 text-base leading-7 font-montserrat sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div
                className="bg-white flex justify-center items-center w-12 h-12 rounded-full"
                key={icon.alt}
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

         <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-2xl font-montserrat leading-normal font-medium mb-6">{section.title}</h4>
              <ul>
                {section.links.map((link) => (
                  <li key={link.name} className="text-white-400">
                    <a href={link.name}>{link.name}</a>
                  </li>
                ))}
              </ul>
              {section.links.map((link) =>(
                <li key={link.link} className="text-white-400 font-montserrat mt-3 text-base leading-normal hover:text-slate-gray"><a href={link.link}>{link.name}</a></li>
              ))}
            </div>
          ))}
        </div>

        <div className="text-white-400 flex justify-between mt-24 max-sm:flex-col max-sm:items-center">
          <div className="cursor-pointer flex flex-1 justify-start items-center gap-2 font-montserrat">
            <img src={copyrightSign} alt="copyright" width={20} height={20} className="gap-2 rounded-full m-0"/>
            <p>Copyright. All rights reserved</p>
          </div>
          <p className="font-montserrat cursor-pointer"> Terms and Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
