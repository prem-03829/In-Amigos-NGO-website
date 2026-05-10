import BlurText from './BlurText';

const PageHeader = ({ title, subtitle, backgroundImage, className = "", children }) => {
  const defaultBg = '/images/1738048982.jpg';
  const style = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${backgroundImage || defaultBg})`,
  };

  return (
    <header className={`bg-cover bg-top text-white pt-32 pb-20 md:pt-40 md:pb-28 text-center min-h-[350px] md:min-h-[450px] flex items-center justify-center ${className}`} style={style}>
      <div className="max-w-6xl mx-auto px-6 lg:px-12 xl:px-24 w-full">
        <BlurText 
          text={title}
          className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] text-white mb-5 font-extrabold leading-tight justify-center"
          animateBy="words"
          direction="top"
          delay={150}
        />
        <p className="text-lg md:text-[1.2rem] mb-8 max-w-[800px] mx-auto opacity-[0.95] text-white">{subtitle}</p>
        {children && <div className="mt-8">{children}</div>}
      </div>
    </header>
  );
};

export default PageHeader;
