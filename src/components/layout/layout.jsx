import { Footer } from '@/components/layout/components/footer';
import { Header } from '@/components/layout/components/header';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
