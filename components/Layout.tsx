import { Header } from './Header'

interface ILayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: ILayoutProps) => (
  <>
    <Header siteTitle="Johan Hanses" />
    <div className="mx-auto max-w-4xl p-4 pt-0 font-nunito">
      <main className="flex items-center justify-center h-[78vh]">
        {children}
      </main>
      <footer className="flex justify-center">
        © {new Date().getFullYear()}
      </footer>
    </div>
  </>
)
