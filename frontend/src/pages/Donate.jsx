import PageHeader from '../components/PageHeader';
import SectionHeader from '../components/SectionHeader';
import BorderGlow from '../components/BorderGlow';

const Donate = () => {
  return (
    <main>
      <PageHeader 
        title="Your Support Can Change Lives" 
        subtitle="Building a more inclusive, compassionate, and empowered society through your generous contributions. Together, we make real impact happen."
        backgroundImage="/images/1738048982.jpg"
      >
        <a href="https://pages.razorpay.com/pl_H621G6ea64ZMl7/view" className="inline-flex items-center justify-center px-12 py-4 rounded-xl font-bold text-lg cursor-pointer border-2 border-transparent transition-all duration-300 bg-primary text-white hover:bg-primary-dark hover:-translate-y-1 hover:shadow-lg">Donate Now</a>
      </PageHeader>
      
      <section className="py-[60px] px-0 border-b border-[#edf2f7]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 xl:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <BorderGlow className="text-center">
              <div className="p-8">
                <div className="text-[2.5rem] mb-3">📜</div>
                <p className="font-bold text-[0.95rem]">Section 8 NGO</p>
                <small className="text-text-light">Govt Licensed</small>
              </div>
            </BorderGlow>
            <BorderGlow className="text-center">
              <div className="p-8">
                <div className="text-[2.5rem] mb-3">🛡️</div>
                <p className="font-bold text-[0.95rem]">80G & 12A</p>
                <small className="text-text-light">Tax Exempt</small>
              </div>
            </BorderGlow>
            <BorderGlow className="text-center">
              <div className="p-8">
                <div className="text-[2.5rem] mb-3">🏢</div>
                <p className="font-bold text-[0.95rem]">CSR-1 Registered</p>
                <small className="text-text-light">Compliant</small>
              </div>
            </BorderGlow>
            <BorderGlow className="text-center">
              <div className="p-8">
                <div className="text-[2.5rem] mb-3">🔒</div>
                <p className="font-bold text-[0.95rem]">Secure Payments</p>
                <small className="text-text-light">Verified Gateway</small>
              </div>
            </BorderGlow>
          </div>
        </div>
      </section>

      <section className="py-20 px-0 bg-bg-light">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 xl:px-24">
          <SectionHeader 
            title="Our Collective Impact" 
            subtitle="See how your contributions translate into measurable social change across India." 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <BorderGlow className="text-center">
              <div className="p-8">
                <div className="text-[2.5rem] mb-[15px]">🍲</div>
                <h3 className="text-[2.25rem] text-primary mb-2 font-extrabold leading-tight">50,000+</h3>
                <p>Meals Distributed</p>
              </div>
            </BorderGlow>
            <BorderGlow className="text-center">
              <div className="p-8">
                <div className="text-[2.5rem] mb-[15px]">🎓</div>
                <h3 className="text-[2.25rem] text-primary mb-2 font-extrabold leading-tight">30,000+</h3>
                <p>Interns Trained</p>
              </div>
            </BorderGlow>
            <BorderGlow className="text-center">
              <div className="p-8">
                <div className="text-[2.5rem] mb-[15px]">🌳</div>
                <h3 className="text-[2.25rem] text-primary mb-2 font-extrabold leading-tight">20,000+</h3>
                <p>Trees Planted</p>
              </div>
            </BorderGlow>
            <BorderGlow className="text-center">
              <div className="p-8">
                <div className="text-[2.5rem] mb-[15px]">💪</div>
                <h3 className="text-[2.25rem] text-primary mb-2 font-extrabold leading-tight">900+</h3>
                <p>Women Empowered</p>
              </div>
            </BorderGlow>
          </div>
        </div>
      </section>

      <section id="donate-options" className="py-20 px-0">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 xl:px-24">
          <SectionHeader 
            title="Donation Options" 
            subtitle="Every rupee contributes to a specific initiative designed to create lasting systemic change." 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BorderGlow 
              className="text-center" 
              spotlightColor="rgba(46, 204, 113, 0.15)"
              glowColor="145 63% 49%"
              colors={['#2ecc71', '#27ae60', '#2ecc71']}
            >
              <div className="p-6">
                <div className="w-[70px] h-[70px] bg-bg-light rounded-xl flex items-center justify-center text-[2rem] mb-6 text-primary transition-all duration-300 mx-auto">🥣</div>
                <h3 className="text-[2.5rem] text-primary mb-2 font-extrabold leading-tight">₹500</h3>
                <h4 className="text-[1.3rem] mb-3 font-bold">Support Meals</h4>
                <p>Provide nutritional meals to underprivileged communities through Project SEVA.</p>
              </div>
            </BorderGlow>
            <BorderGlow 
              className="text-center" 
              spotlightColor="rgba(52, 152, 219, 0.15)"
              glowColor="204 70% 53%"
              colors={['#3498db', '#2980b9', '#3498db']}
            >
              <div className="p-6">
                <div className="w-[70px] h-[70px] bg-bg-light rounded-xl flex items-center justify-center text-[2rem] mb-6 text-secondary transition-all duration-300 mx-auto">📚</div>
                <h3 className="text-[2.5rem] text-secondary mb-2 font-extrabold leading-tight">₹1000</h3>
                <h4 className="text-[1.3rem] mb-3 font-bold">Support Education</h4>
                <p>Contribute to digital literacy and life skills mentorship for children nationwide.</p>
              </div>
            </BorderGlow>
            <BorderGlow 
              className="text-center" 
              spotlightColor="rgba(243, 156, 18, 0.15)"
              glowColor="37 90% 51%"
              colors={['#f39c12', '#e67e22', '#f39c12']}
            >
              <div className="p-6">
                <div className="w-[70px] h-[70px] bg-bg-light rounded-xl flex items-center justify-center text-[2rem] mb-6 text-[#f39c12] transition-all duration-300 mx-auto">🌳</div>
                <h3 className="text-[2.5rem] text-[#f39c12] mb-2 font-extrabold leading-tight">₹2000</h3>
                <h4 className="text-[1.3rem] mb-3 font-bold">Support Nature</h4>
                <p>Fuel our massive tree plantation drives to combat climate change through Project PRAKRITI.</p>
              </div>
            </BorderGlow>
          </div>
          <div className="text-center mt-[60px]">
            <a href="https://pages.razorpay.com/pl_H621G6ea64ZMl7/view" className="inline-flex items-center justify-center px-[60px] py-5 rounded-xl font-bold text-[1.2rem] cursor-pointer border-2 border-transparent transition-all duration-300 bg-primary text-white hover:bg-primary-dark hover:-translate-y-[3px] hover:shadow-[0_8px_15px_rgba(46,204,113,0.3)]">Complete Donation</a>
            <p className="mt-[30px] text-[0.95rem] text-text-light max-w-[700px] mx-auto">
              <strong>Transparency Note:</strong> All contributions are used strictly for social initiatives. We maintain the highest standards of financial accountability and transparency.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-0 bg-bg-light">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 xl:px-24">
          <SectionHeader 
            title="Frequently Asked Questions" 
            subtitle="Everything you need to know about donating to InAmigos Foundation." 
          />
          <div className="max-w-[800px] mx-auto">
            <div className="bg-white p-6 rounded-xl mb-4 shadow-sm border border-black/5">
              <h4 className="text-[1.3rem] mb-3 font-bold">Where does my donation go?</h4>
              <p>Your contributions directly fund our ground-level initiatives: Project SEVA (Food), Project BachpanShala (Education), and Project PRAKRITI (Environment).</p>
            </div>
            <div className="bg-white p-6 rounded-xl mb-4 shadow-sm border border-black/5">
              <h4 className="text-[1.3rem] mb-3 font-bold">Is my donation secure?</h4>
              <p>Yes, all transactions are processed through Razorpay, India's leading secure payment gateway, with industry-standard encryption.</p>
            </div>
            <div className="bg-white p-6 rounded-xl mb-4 shadow-sm border border-black/5">
              <h4 className="text-[1.3rem] mb-3 font-bold">Are there tax benefits?</h4>
              <p>Yes, InAmigos Foundation is registered under Section 80G, allowing you to claim tax deductions on your generous contributions.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Donate;
