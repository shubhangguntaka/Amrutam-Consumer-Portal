import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Download from "./Download";
import SearchBar from "../ui/SearchBar";
import CartNotification from "../ui/CartNotification";

function MainLayout() {
  return (
    <div>
      <Header />
      <CartNotification />
      {/* Hero Section */}
      <SearchBar />
      <main>
        <div>
          <Outlet />
        </div>
      </main>
      <Download />
      <Footer />
    </div>
  );
}

export default MainLayout;
