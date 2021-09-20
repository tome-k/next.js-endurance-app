import Footer from "./Footer";
import Navigation from "./Navigation";
import { useRouter } from "next/router";

function Layout({ children }) {
  const router = useRouter();
  return (
    <>
      {router.pathname !== "/_error" && <Navigation />}
      <main className="main-content">{children}</main>
      {router.pathname !== "/_error" && <Footer />}
    </>
  );
}

export default Layout;
