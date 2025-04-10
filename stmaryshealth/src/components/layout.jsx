import Navbar from './navbar/navbar';
import Header from './header/header';
import Footer from './footer/footer';

function Layout({ children }) {
  return (
    <div id="root">
      <Navbar />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
