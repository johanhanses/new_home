import Link from 'next/link';

interface IHeaderProps {
  siteTitle: string;
}

export const Header = ({ siteTitle }: IHeaderProps) => {
  return (
    <div className="bg-transparent flex items-center justify-center">
      <div className="max-w-4xl p-4 text-xl">
        <nav className="space-x-4">
          <Link href="/">
            <a className="megahover">{siteTitle}</a>
          </Link>
          <Link href="/blog">
            <a className="megahover">Blog</a>
          </Link>
          <a
            href="https://github.com/johanhanses"
            target="_blank"
            rel="noreferrer"
            className="megahover"
          >
            GitHub
          </a>
        </nav>
      </div>
    </div>
  );
};
