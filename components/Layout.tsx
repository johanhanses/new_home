import { Header } from './Header';

interface ILayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: ILayoutProps) => (
  <>
    <Header siteTitle="Johan Hanses" />
    <div className="mx-auto max-w-4xl p-4 pt-0 font-nunito">
      <main>{children}</main>
      <footer className="flex justify-center">
        © {new Date().getFullYear()}
      </footer>
    </div>
  </>
);
