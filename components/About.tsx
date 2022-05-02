export const About = () => {
  const URL = 'https://worklygroup.com';
  const mailURL = 'mailto:johanhanses@gmail.com';
  const linkedInURL = 'https://www.linkedin.com/in/johanhanses/';

  const Content = () => (
    <p className="mb-4 text-xl">
      React and TypeScript developer based in Falun, Sweden. Building HR-Tech at{' '}
      <a
        href={URL}
        target="_blank"
        rel="noreferrer noopener"
        className="megahover"
      >
        Workly
      </a>
    </p>
  );

  const Links = () => (
    <p className="text-base space-x-4">
      <a
        aria-label="Email"
        href={mailURL}
        target="_blank"
        rel="noreferrer noopener"
        className="megahover"
      >
        Email
      </a>

      <a
        aria-label="LinkedIn"
        href="https://www.linkedin.com/in/johanhanses/"
        target="_blank"
        rel="noopener noreferrer"
        className="megahover"
      >
        LinkedIn
      </a>
    </p>
  );

  return (
    <div className="flex items-center justify-center h-[78vh]">
      <div className="text-center">
        <Content />
        <Links />
      </div>
    </div>
  );
};
