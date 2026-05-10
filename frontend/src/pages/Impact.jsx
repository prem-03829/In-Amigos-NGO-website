import PageHeader from '../components/PageHeader';
import SectionHeader from '../components/SectionHeader';
import BorderGlow from '../components/BorderGlow';

const Impact = () => {
  const stats = [
    { icon: '🍲', value: '50,000+', label: 'Meals & Clothing Distributed', sublabel: 'Project SEVA' },
    { icon: '🎓', value: '30,000+', label: 'Interns Professionally Trained', sublabel: 'Project VIKAS' },
    { icon: '🌳', value: '20,000+', label: 'Indigenous Trees Planted', sublabel: 'Project PRAKRITI' },
    { icon: '💪', value: '900+', label: 'Women Financially Empowered', sublabel: 'Project UDAAN' },
    { icon: '🐾', value: '50+', label: 'Stray Animals Fed Daily', sublabel: 'Project JEEV' },
    { icon: '🇮🇳', value: '50,000+', label: 'Direct Beneficiaries', sublabel: 'Nationwide Reach' }
  ];

  return (
    <main>
      <PageHeader 
        title="Measurable Social Impact" 
        subtitle="Transparency through data. Here is what we have achieved through collaborative community action since 2020."
        backgroundImage="/images/1738054440.jpg"
      />
      
      <section className="py-20 px-0">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 xl:px-24">
          <SectionHeader 
            title="Our Numbers" 
            subtitle="Every number represents a life touched, a tree planted, or a community empowered through collective effort." 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <BorderGlow key={index}>
                <div className="p-8 text-center">
                  <div className="text-[2.5rem] mb-3">{stat.icon}</div>
                  <h3 className="text-[2.25rem] text-primary mb-2 font-extrabold leading-tight">{stat.value}</h3>
                  <p className="font-semibold text-dark mb-1">{stat.label}</p>
                  <small className="block text-text-light font-medium uppercase tracking-wider">{stat.sublabel}</small>
                </div>
              </BorderGlow>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-0 bg-bg-light">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 xl:px-24">
          <SectionHeader 
            title="Our Presence" 
            subtitle="Spanning across the length and breadth of the country to ensure no community is left behind." 
          />
          <BorderGlow className="text-center max-w-[850px] mx-auto" backgroundColor="#f9fafb">
            <div className="py-[60px] px-10">
              <p className="text-[2rem] font-extrabold text-primary mb-6">Operating in 15+ States across India.</p>
              <p className="text-[1.1rem] leading-[1.8]">While our base is in Chhattisgarh, our impact reaches thousands across the nation through community-led action and professional internships. We believe in the power of local leadership combined with national vision to drive systemic social change.</p>
            </div>
          </BorderGlow>
        </div>
      </section>
    </main>
  );
};

export default Impact;
