const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-[50px] max-w-[750px] mx-auto">
      <h2 className="text-[2rem] md:text-[2.5rem] mb-4">{title}</h2>
      <p className="text-[1.1rem] text-text-light">{subtitle}</p>
    </div>
  );
};

export default SectionHeader;
