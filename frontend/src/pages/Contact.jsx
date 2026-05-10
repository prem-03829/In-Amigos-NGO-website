import PageHeader from '../components/PageHeader';
import SectionHeader from '../components/SectionHeader';
import BorderGlow from '../components/BorderGlow';

const Contact = () => {
  return (
    <main>
      <PageHeader 
        title="Get In Touch" 
        subtitle="We are here to help and listen. Connect with us through any of the channels below."
      />
      
      <section className="py-20 px-0">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 xl:px-24">
          <SectionHeader 
            title="Contact Information" 
            subtitle="Reach out to us for collaborations, support, or any inquiries regarding our initiatives." 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BorderGlow innerClassName="flex flex-row items-center gap-5 text-left" style={{ height: 'auto' }}>
              <div className="p-6 flex items-center gap-5">
                <div className="w-[50px] h-[50px] bg-bg-light rounded-xl flex items-center justify-center text-[1.5rem] text-primary transition-all duration-300 flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <h4 className="text-[1.3rem] mb-0 font-bold">Our Office</h4>
                  <p className="text-[0.9rem] leading-relaxed">Ward No.5, Gram Post, Sipat Ujwal Nagar, Bilaspur – 495555 (Chhattisgarh)</p>
                </div>
              </div>
            </BorderGlow>
            <BorderGlow innerClassName="flex flex-row items-center gap-5 text-left" style={{ height: 'auto' }}>
              <div className="p-6 flex items-center gap-5 w-full">
                <div className="w-[50px] h-[50px] bg-bg-light rounded-xl flex items-center justify-center text-[1.5rem] text-primary transition-all duration-300 flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div className="overflow-hidden">
                  <h4 className="text-[1.3rem] mb-0 font-bold">Call Us</h4>
                  <a href="tel:+916267309902" className="text-[0.9rem] leading-relaxed text-text hover:text-primary transition-colors">+91 626 730 9902</a>
                </div>
              </div>
            </BorderGlow>
            <BorderGlow innerClassName="flex flex-row items-center gap-5 text-left" style={{ height: 'auto' }}>
              <div className="p-6 flex items-center gap-5 w-full">
                <div className="w-[50px] h-[50px] bg-bg-light rounded-xl flex items-center justify-center text-[1.5rem] text-primary transition-all duration-300 flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div className="overflow-hidden">
                  <h4 className="text-[1.3rem] mb-0 font-bold">Email Support</h4>
                  <a href="mailto:support@inamigosfoundation.org.in" className="text-[0.9rem] leading-relaxed text-text hover:text-primary transition-colors break-all">support@inamigosfoundation.org.in</a>
                </div>
              </div>
            </BorderGlow>
          </div>
        </div>
      </section>

      <section className="py-20 px-0 bg-bg-light">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 xl:px-24">
          <SectionHeader 
            title="Follow Our Journey" 
            subtitle="Stay connected through our social media platforms for daily updates and stories of impact." 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BorderGlow colors={['#1877F2', '#1877F2', '#1877F2']} glowColor="214 89% 52%">
              <a href="https://www.facebook.com/inamigos.inamigos" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 p-6 w-full no-underline color-inherit group hover:bg-[#1877F2] hover:text-white transition-all duration-300 rounded-xl">
                <div className="w-[45px] h-[45px] bg-bg-light rounded-xl flex items-center justify-center text-[1.5rem] text-primary transition-all duration-300 flex-shrink-0 group-hover:scale-[1.2] group-hover:bg-white/20 group-hover:text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </div>
                <h4 className="text-[1.1rem] font-bold group-hover:text-white">Facebook</h4>
              </a>
            </BorderGlow>
            <BorderGlow colors={['#000000', '#333333', '#000000']} glowColor="0 0% 0%">
              <a href="https://x.com/InamigosF" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 p-6 w-full no-underline color-inherit group hover:bg-black hover:text-white transition-all duration-300 rounded-xl">
                <div className="w-[45px] h-[45px] bg-bg-light rounded-xl flex items-center justify-center text-[1.5rem] text-primary transition-all duration-300 flex-shrink-0 group-hover:scale-[1.2] group-hover:bg-white/20 group-hover:text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16zM4 20l6.768 -6.768M20 4l-6.768 6.768"></path></svg>
                </div>
                <h4 className="text-[1.1rem] font-bold group-hover:text-white">Twitter / X</h4>
              </a>
            </BorderGlow>
            <BorderGlow colors={['#f09433', '#e6683c', '#dc2743']} glowColor="340 75% 50%">
              <a href="https://www.instagram.com/inamigos" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 p-6 w-full no-underline color-inherit group hover:bg-[linear-gradient(45deg,#f09433_0%,#e6683c_25%,#dc2743_50%,#cc2366_75%,#bc1888_100%)] hover:text-white transition-all duration-300 rounded-xl">
                <div className="w-[45px] h-[45px] bg-bg-light rounded-xl flex items-center justify-center text-[1.5rem] text-primary transition-all duration-300 flex-shrink-0 group-hover:scale-[1.2] group-hover:bg-white/20 group-hover:text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </div>
                <h4 className="text-[1.1rem] font-bold group-hover:text-white">Instagram</h4>
              </a>
            </BorderGlow>
          </div>
        </div>
      </section>

      <section className="py-20 px-0">
        <div className="max-w-container mx-auto px-6 lg:px-12 xl:px-24 text-center">
          <SectionHeader 
            title="Get Involved Today" 
            subtitle="Be the change you want to see in the world. Join our mission or support our causes today." 
          />
          <div className="flex justify-center gap-5 flex-col md:flex-row max-w-[300px] md:max-w-none mx-auto">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScAgWgiWEjMm5N5HO9f-kF5_MNCsFu0AjfF9-sFnWGYdJG7Jg/viewform" className="inline-flex items-center justify-center px-9 py-3.5 rounded-xl font-bold text-base cursor-pointer border-2 border-transparent transition-all duration-300 bg-primary text-white hover:bg-primary-dark hover:-translate-y-[3px] hover:shadow-[0_8px_15px_rgba(46,204,113,0.3)]">Become A Volunteer</a>
            <a href="https://pages.razorpay.com/pl_H621G6ea64ZMl7/view" className="inline-flex items-center justify-center px-9 py-3.5 rounded-xl font-bold text-base cursor-pointer border-2 border-primary transition-all duration-300 text-primary bg-transparent hover:bg-primary hover:text-white hover:-translate-y-[3px]">Support Our Cause</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
