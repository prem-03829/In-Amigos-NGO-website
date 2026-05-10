import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import BorderGlow from '../components/BorderGlow';

const Home = () => {
  return (
    <main>
      <Hero />
      
      <section className="py-20 px-0">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 xl:px-24">
          <SectionHeader 
            title="Our Impact" 
            subtitle="Ground-level initiatives driving real change across India." 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <BorderGlow>
              <div className="p-8 text-center">
                <h3 className="text-[2.25rem] text-primary mb-2 font-extrabold leading-tight">50,000+</h3>
                <p className="font-semibold text-dark mb-1">Meals & Clothing</p>
                <small className="block text-text-light font-medium uppercase tracking-wider">Project SEVA</small>
              </div>
            </BorderGlow>
            <BorderGlow>
              <div className="p-8 text-center">
                <h3 className="text-[2.25rem] text-primary mb-2 font-extrabold leading-tight">30,000+</h3>
                <p className="font-semibold text-dark mb-1">Interns Trained</p>
                <small className="block text-text-light font-medium uppercase tracking-wider">Project VIKAS</small>
              </div>
            </BorderGlow>
            <BorderGlow>
              <div className="p-8 text-center">
                <h3 className="text-[2.25rem] text-primary mb-2 font-extrabold leading-tight">20,000+</h3>
                <p className="font-semibold text-dark mb-1">Trees Planted</p>
                <small className="block text-text-light font-medium uppercase tracking-wider">Project PRAKRITI</small>
              </div>
            </BorderGlow>
            <BorderGlow>
              <div className="p-8 text-center">
                <h3 className="text-[2.25rem] text-primary mb-2 font-extrabold leading-tight">900+</h3>
                <p className="font-semibold text-dark mb-1">Women Empowered</p>
                <small className="block text-text-light font-medium uppercase tracking-wider">Project UDAAN</small>
              </div>
            </BorderGlow>
          </div>
        </div>
      </section>

      <section className="py-20 px-0 bg-bg-light">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 xl:px-24">
          <SectionHeader 
            title="Upcoming Events 2025" 
            subtitle="Join us in our upcoming initiatives and be part of the change." 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BorderGlow>
              <div className="p-6">
                <h4 className="text-[1.3rem] mb-3">World Water Day</h4>
                <p className="text-primary font-bold mb-3">22 Mar 2025</p>
                <p>Highlights the importance of water conservation and collective action for sustainability.</p>
              </div>
            </BorderGlow>
            <BorderGlow>
              <div className="p-6">
                <h4 className="text-[1.3rem] mb-3">International Day of Happiness</h4>
                <p className="text-primary font-bold mb-3">20 Mar 2025</p>
                <p>Spreading joy, positivity, and well-being through engaging community activities and workshops.</p>
              </div>
            </BorderGlow>
            <BorderGlow>
              <div className="p-6">
                <h4 className="text-[1.3rem] mb-3">Women and Girls in Science</h4>
                <p className="text-primary font-bold mb-3">11 Feb 2025</p>
                <p>Celebrating and encouraging the vital contributions of women and girls in the field of science.</p>
              </div>
            </BorderGlow>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
