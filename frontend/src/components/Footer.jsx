import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] text-[#a0a0a0] py-20 px-0 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 xl:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-[50px] mb-[60px]">
          <div className="flex flex-col items-start text-left">
            <Link to="/" className="mb-6 flex" style={{ marginBottom: '24px', display: 'flex' }}>
              <img src="/images/logo.jpg" alt="InAmigos Foundation" className="h-[60px] max-w-full object-contain" />
            </Link>
            <p>A Section 8 non-profit licensed by the Govt. of India, working nationwide from Chhattisgarh.</p>
          </div>
          <div className="flex flex-col items-start text-left">
            <h4 className="text-white mb-6 text-[1.1rem] font-bold">Quick Links</h4>
            <ul className="list-none p-0">
              <li className="mb-3.5"><Link to="/about" className="hover:text-primary transition-colors duration-300">Our Story</Link></li>
              <li className="mb-3.5"><Link to="/projects" className="hover:text-primary transition-colors duration-300">Projects</Link></li>
              <li className="mb-3.5"><Link to="/gallery" className="hover:text-primary transition-colors duration-300">Gallery</Link></li>
              <li className="mb-3.5"><Link to="/impact" className="hover:text-primary transition-colors duration-300">Impact</Link></li>
              <li className="mb-3.5"><Link to="/donate" className="hover:text-primary transition-colors duration-300">Donate Now</Link></li>
              <li className="mb-3.5"><Link to="/volunteer" className="hover:text-primary transition-colors duration-300">Join Us</Link></li>
            </ul>
          </div>
          <div className="flex flex-col items-start text-left">
            <h4 className="text-white mb-6 text-[1.1rem] font-bold">Contact</h4>
            <ul className="list-none p-0">
              <li className="mb-3.5">Bilaspur, Chhattisgarh</li>
              <li className="mb-3.5">support@inamigosfoundation.org.in</li>
              <li className="mb-3.5">+91 626 730 9902</li>
            </ul>
          </div>
          <div className="flex flex-col items-start text-left">
            <h4 className="text-white mb-6 text-[1.1rem] font-bold">Newsletter</h4>
            <p className="mb-5">Stay updated with our latest news and events.</p>
            <div className="flex gap-2.5 w-full max-w-[400px] md:max-w-[550px]">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full p-4 border-none rounded-xl font-inherit text-base bg-[#1a1a1a] text-white focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all duration-300" 
              />
              <button className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold text-base cursor-pointer border-2 border-transparent transition-all duration-300 bg-primary text-white hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-[0_8px_15px_rgba(46,204,113,0.3)]">Join</button>
            </div>
          </div>
        </div>
        <div className="border-top border-[#222] pt-10 text-center text-[0.9rem]">
          <p>&copy; 2026 InAmigos Foundation. 80G, 12A & CSR-1 Registered. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
