import Footer from "./Footer";
import Navigation from "./Navigation";
import { useRouter } from "next/router";

function Layout({ children }) {
  const router = useRouter();
  return (
    <>
      {router.pathname !== "/404" && <Navigation />}
      <main className="main-content">{children}</main>
      {router.pathname !== "/404" && <Footer />}
    </>
  );
}

export default Layout;
