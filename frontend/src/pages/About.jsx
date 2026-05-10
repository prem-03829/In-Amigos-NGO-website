import PageHeader from '../components/PageHeader';
import SectionHeader from '../components/SectionHeader';
import BorderGlow from '../components/BorderGlow';

const About = () => {
  return (
    <main>
      <PageHeader 
        title="Our Story" 
        subtitle="Building a more inclusive, compassionate, and empowered society through community-driven action."
        backgroundImage="/images/1738048982.jpg"
      />

      <section className="py-20 px-0">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 xl:px-24">
          <BorderGlow className="max-w-[900px] mx-auto text-center">
            <div className="p-6">
              <p className="text-[1.25rem] mb-6 text-dark font-medium leading-relaxed">
                InAmigos Foundation is a Section 8 non-profit organization licensed by the Government of India. Founded on 23 September 2020 by Govind Shukla, the foundation operates nationwide from its base in Chhattisgarh.
              </p>
              <p className="leading-relaxed">
                We focus on critical social pillars including education, women's empowerment, environmental sustainability, and animal welfare to create a lasting social impact through community-driven action and professional development.
              </p>
            </div>
          </BorderGlow>
        </div>
      </section>

      <section className="py-20 px-0 bg-bg-light">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 xl:px-24">
          <SectionHeader 
            title="Trust & Transparency" 
            subtitle="Registered and verified by major Indian regulatory bodies, ensuring the highest standards of accountability and social responsibility." 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <BorderGlow className="text-center" backgroundColor="#f9fafb">
              <div className="p-6">
                <div className="w-[70px] h-[70px] bg-bg-light rounded-xl flex items-center justify-center text-[2rem] mb-6 text-primary transition-all duration-300 mx-auto">📜</div>
                <h4 className="text-primary text-[1.5rem] mb-2.5 font-bold">80G & 12A</h4>
                <p className="font-semibold">Tax-Exempt Status</p>
              </div>
            </BorderGlow>
            <BorderGlow className="text-center" backgroundColor="#f9fafb">
              <div className="p-6">
                <div className="w-[70px] h-[70px] bg-bg-light rounded-xl flex items-center justify-center text-[2rem] mb-6 text-primary transition-all duration-300 mx-auto">🛡️</div>
                <h4 className="text-primary text-[1.5rem] mb-2.5 font-bold">CSR-1</h4>
                <p className="font-semibold">Registered for CSR</p>
              </div>
            </BorderGlow>
            <BorderGlow className="text-center" backgroundColor="#f9fafb">
              <div className="p-6">
                <div className="w-[70px] h-[70px] bg-bg-light rounded-xl flex items-center justify-center text-[2rem] mb-6 text-primary transition-all duration-300 mx-auto">🏢</div>
                <h4 className="text-primary text-[1.5rem] mb-2.5 font-bold">NITI Aayog</h4>
                <p className="font-semibold">Verified Registration</p>
              </div>
            </BorderGlow>
            <BorderGlow className="text-center" backgroundColor="#f9fafb">
              <div className="p-6">
                <div className="w-[70px] h-[70px] bg-bg-light rounded-xl flex items-center justify-center text-[2rem] mb-6 text-primary transition-all duration-300 mx-auto">✅</div>
                <h4 className="text-primary text-[1.5rem] mb-2.5 font-bold">ISO 9001:2015</h4>
                <p className="font-semibold">Certified Quality</p>
              </div>
            </BorderGlow>
          </div>
        </div>
      </section>

      <section className="py-20 px-0">
        <div className="max-w-container mx-auto px-6 lg:px-12 xl:px-24 text-center">
          <SectionHeader 
            title="Our Founder" 
            subtitle="Leading the vision of a better tomorrow with dedication and purpose." 
          />
          <BorderGlow className="inline-block max-w-[500px]">
            <div className="py-[60px] px-10">
              <div className="w-[100px] h-[100px] rounded-full flex items-center justify-center mx-auto mb-6 font-extrabold text-[2.5rem] border-4 border-primary bg-bg-light text-primary">GS</div>
              <h4 className="text-[1.75rem] mb-2 font-bold">Govind Shukla</h4>
              <p className="text-primary font-bold uppercase tracking-[1.5px] text-[0.9rem]">Founder & CEO</p>
              <p className="mt-6 italic text-text-light leading-relaxed">"Dedicated to creating a sustainable and empowered society through collaborative social action and grassroots empowerment."</p>
            </div>
          </BorderGlow>
        </div>
      </section>
    </main>
  );
};

export default About;
