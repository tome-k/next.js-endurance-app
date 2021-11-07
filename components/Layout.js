import Footer from "./Footer";
import Navigation from "./Navigation";
import { useRouter } from "next/router";
import Notification from "../components/Notification";
import { useContext } from "react";
import NotificationContext from "../store/notification-context";
import Hero from "./Hero";

function Layout({ children }) {
  const router = useRouter();
  const notificationCtx = useContext(NotificationContext);
  const activeNotification = notificationCtx.notification;
  return (
    <>
      {router.pathname !== "/404" && router.pathname !== "/500" && (
        <Navigation />
      )}
      <Hero />
      <main className="main-content">{children}</main>
      {router.pathname !== "/404" && router.pathname !== "/500" && <Footer />}
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </>
  );
}

export default Layout;
