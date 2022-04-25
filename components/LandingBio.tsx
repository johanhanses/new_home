export const LandingBio = () => {
  const title = 'Johan Hanses';
  const subTitle = 'Javascripter';

  return (
    <div className="flex items-center justify-center h-[78vh]">
      <div className="text-center">
        <h1 className="text-6xl mb-0">{title}</h1>
        <p className="mb-4 text-xl">{subTitle}</p>
      </div>
    </div>
  );
};
