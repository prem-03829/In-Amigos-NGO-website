import PageHeader from '../components/PageHeader';
import SectionHeader from '../components/SectionHeader';
import BorderGlow from '../components/BorderGlow';

const Projects = () => {
  const projects = [
    {
      icon: '🍲',
      category: 'Welfare',
      title: 'Project SEVA',
      description: 'Providing food and clothing to the underprivileged. Distributed over 50,000 nutritional meals to urban and rural communities across India.'
    },
    {
      icon: '📖',
      category: 'Education',
      title: 'Project BachpanShala',
      description: 'Educational support focusing on digital literacy, life skills, and comprehensive mentorship for children across multiple regions in India.'
    },
    {
      icon: '🐾',
      category: 'Animal Welfare',
      title: 'Project JEEV',
      description: 'Animal welfare initiative dedicated to rescuing, sheltering, and feeding over 50 stray animals daily with compassion and care.'
    },
    {
      icon: '💪',
      category: 'Empowerment',
      title: 'Project UDAAN',
      description: 'Empowering women through vocational skill training and entrepreneurship, impacting over 900 women across various states.'
    },
    {
      icon: '🌳',
      category: 'Environment',
      title: 'Project PRAKRITI',
      description: 'Environmental conservation through massive tree plantation drives, with over 20,000 indigenous trees planted nationwide.'
    },
    {
      icon: '🚀',
      category: 'Skill Development',
      title: 'Project VIKAS',
      description: 'Internship and skill development programs for youth, having trained over 30,000 interns in various professional fields.'
    }
  ];

  return (
    <main>
      <PageHeader 
        title="Our Key Programs" 
        subtitle="Focused initiatives addressing education, empowerment, and environmental sustainability."
        backgroundImage="/images/1738238755.JPG"
      />
      
      <section className="py-20 px-0">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 xl:px-24">
          <SectionHeader 
            title="Transforming Communities" 
            subtitle="Explore our diverse range of projects designed to create meaningful and lasting change across India." 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <BorderGlow key={index}>
                <div className="p-6">
                  <div className="w-[70px] h-[70px] bg-bg-light rounded-xl flex items-center justify-center text-[2rem] mb-6 text-primary transition-all duration-300">
                    {project.icon}
                  </div>
                  <p className="text-primary font-extrabold uppercase tracking-[1.5px] text-[0.8rem] mb-3">
                    {project.category}
                  </p>
                  <h4 className="text-[1.3rem] mb-3 font-bold">{project.title}</h4>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </BorderGlow>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
