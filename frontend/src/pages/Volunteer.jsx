import PageHeader from '../components/PageHeader';
import SectionHeader from '../components/SectionHeader';
import BorderGlow from '../components/BorderGlow';

const Volunteer = () => {
  return (
    <main>
      <PageHeader 
        title="Be the Change You Want to See" 
        subtitle="Impactful volunteering starts with a single step. Join our nationwide network of change-makers and make a real difference today."
        backgroundImage="/images/1738054440.jpg"
      >
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScAgWgiWEjMm5N5HO9f-kF5_MNCsFu0AjfF9-sFnWGYdJG7Jg/viewform" className="inline-flex items-center justify-center px-12 py-4 rounded-xl font-bold text-lg cursor-pointer border-2 border-transparent transition-all duration-300 bg-primary text-white hover:bg-primary-dark hover:-translate-y-1 hover:shadow-lg">Join as Volunteer</a>
      </PageHeader>
      
      <section className="py-20 px-0">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 xl:px-24">
          <SectionHeader 
            title="Why Join InAmigos?" 
            subtitle="More than just volunteering, it's a journey of personal growth and collective social impact." 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <BorderGlow className="text-center">
              <div className="p-6">
                <div className="w-[70px] h-[70px] bg-bg-light rounded-xl flex items-center justify-center text-[2rem] mb-6 text-primary transition-all duration-300 mx-auto">🚀</div>
                <h4 className="text-[1.3rem] mb-3 font-bold">Gain Experience</h4>
                <p className="leading-relaxed">Work on real-world social projects and build a strong professional background while creating value.</p>
              </div>
            </BorderGlow>
            <BorderGlow className="text-center">
              <div className="p-6">
                <div className="w-[70px] h-[70px] bg-bg-light rounded-xl flex items-center justify-center text-[2rem] mb-6 text-primary transition-all duration-300 mx-auto">🌍</div>
                <h4 className="text-[1.3rem] mb-3 font-bold">Make Impact</h4>
                <p className="leading-relaxed">See the direct results of your efforts in the lives of children and communities we serve across India.</p>
              </div>
            </BorderGlow>
            <BorderGlow className="text-center">
              <div className="p-6">
                <div className="w-[70px] h-[70px] bg-bg-light rounded-xl flex items-center justify-center text-[2rem] mb-6 text-primary transition-all duration-300 mx-auto">🤝</div>
                <h4 className="text-[1.3rem] mb-3 font-bold">Build Network</h4>
                <p className="leading-relaxed">Connect with like-minded individuals, professionals, and social leaders from diverse backgrounds.</p>
              </div>
            </BorderGlow>
            <BorderGlow className="text-center">
              <div className="p-6">
                <div className="w-[70px] h-[70px] bg-bg-light rounded-xl flex items-center justify-center text-[2rem] mb-6 text-primary transition-all duration-300 mx-auto">💡</div>
                <h4 className="text-[1.3rem] mb-3 font-bold">Learn Skills</h4>
                <p className="leading-relaxed">Develop leadership, communication, and technical skills through practical application on social missions.</p>
              </div>
            </BorderGlow>
          </div>
        </div>
      </section>

      <section className="py-20 px-0 bg-bg-light">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 xl:px-24">
          <SectionHeader 
            title="Core Opportunities" 
            subtitle="We offer diverse roles that match your unique skills and passions for social good." 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <BorderGlow className="border-l-[6px] border-primary" backgroundColor="#f9fafb" spotlightColor="rgba(46, 204, 113, 0.15)">
              <div className="p-6">
                <div className="text-[2rem] mb-5">📖</div>
                <h4 className="text-[1.3rem] mb-3 font-bold">Education Programs</h4>
                <p className="leading-relaxed">Mentor children in digital literacy and life skills through our Project BachpanShala mission.</p>
              </div>
            </BorderGlow>
            <BorderGlow className="border-l-[6px] border-secondary" backgroundColor="#f9fafb" spotlightColor="rgba(52, 152, 219, 0.15)" colors={['#3498db', '#2980b9', '#3498db']} glowColor="204 70% 53%">
              <div className="p-6">
                <div className="text-[2rem] mb-5">📣</div>
                <h4 className="text-[1.3rem] mb-3 font-bold">Social Campaigns</h4>
                <p className="leading-relaxed">Lead awareness drives for environmental conservation and nationwide women's empowerment initiatives.</p>
              </div>
            </BorderGlow>
            <BorderGlow className="border-l-[6px] border-[#f39c12]" backgroundColor="#f9fafb" spotlightColor="rgba(243, 156, 18, 0.15)" colors={['#f39c12', '#e67e22', '#f39c12']} glowColor="37 90% 51%">
              <div className="p-6">
                <div className="text-[2rem] mb-5">🎭</div>
                <h4 className="text-[1.3rem] mb-3 font-bold">Event Management</h4>
                <p className="leading-relaxed">Plan and execute ground-level initiatives, workshops, and large-scale social awareness events.</p>
              </div>
            </BorderGlow>
            <BorderGlow className="border-l-[6px] border-[#e74c3c]" backgroundColor="#f9fafb" spotlightColor="rgba(231, 76, 60, 0.15)" colors={['#e74c3c', '#c0392b', '#e74c3c']} glowColor="6 78% 57%">
              <div className="p-6">
                <div className="text-[2rem] mb-5">💻</div>
                <h4 className="text-[1.3rem] mb-3 font-bold">Digital Support</h4>
                <p className="leading-relaxed">Contribute through content creation, design, and professional social media management support.</p>
              </div>
            </BorderGlow>
          </div>
        </div>
      </section>

      <section className="py-20 px-0">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 xl:px-24">
          <SectionHeader 
            title="How It Works" 
            subtitle="A simple and transparent onboarding process to start your social contribution journey." 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BorderGlow className="text-center">
              <div className="p-6">
                <div className="w-[60px] h-[60px] bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 font-extrabold text-[1.5rem]">1</div>
                <h4 className="text-[1.3rem] mb-3 font-bold">Apply</h4>
                <p className="leading-relaxed">Fill out our simple online application form with your interests and skills.</p>
              </div>
            </BorderGlow>
            <BorderGlow className="text-center">
              <div className="p-6">
                <div className="w-[60px] h-[60px] bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 font-extrabold text-[1.5rem]">2</div>
                <h4 className="text-[1.3rem] mb-3 font-bold">Onboarding</h4>
                <p className="leading-relaxed">Attend a brief session to understand our mission and your specific role.</p>
              </div>
            </BorderGlow>
            <BorderGlow className="text-center">
              <div className="p-6">
                <div className="w-[60px] h-[60px] bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 font-extrabold text-[1.5rem]">3</div>
                <h4 className="text-[1.3rem] mb-3 font-bold">Contribute</h4>
                <p className="leading-relaxed">Start your project and begin creating meaningful social impact on the ground.</p>
              </div>
            </BorderGlow>
          </div>
        </div>
      </section>

      <section className="py-20 px-0 bg-bg-light">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 xl:px-24">
          <SectionHeader 
            title="What You Receive" 
            subtitle="We value our volunteers and ensure they are recognized for their dedication and time." 
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-black/5 hover:-translate-y-1 transition-all duration-300">
              <div className="text-[3rem] mb-4">📜</div>
              <h4 className="text-[1.1rem] mb-2 font-bold">Certificate</h4>
              <p className="text-[0.9rem]">Official recognition.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-black/5 hover:-translate-y-1 transition-all duration-300">
              <div className="text-[3rem] mb-4">📊</div>
              <h4 className="text-[1.1rem] mb-2 font-bold">Experience</h4>
              <p className="text-[0.9rem]">Hands-on work.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-black/5 hover:-translate-y-1 transition-all duration-300">
              <div className="text-[3rem] mb-4">🌐</div>
              <h4 className="text-[1.1rem] mb-2 font-bold">Networking</h4>
              <p className="text-[0.9rem]">Global circles.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-black/5 hover:-translate-y-1 transition-all duration-300">
              <div className="text-[3rem] mb-4">⚒️</div>
              <h4 className="text-[1.1rem] mb-2 font-bold">Skill Dev</h4>
              <p className="text-[0.9rem]">Leadership.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Volunteer;
