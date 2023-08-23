"use client";
import Nav2 from "./Header/Nav2";
import TopNav from "./Header/TopNav";
import Nav1 from "./Header/Nav1";
import MobileNavbar from "./Header/MobileNavbar";
import Banner from "./Banner/Banner";

const HomePage = () => {
  return (
    <div>
      {/* Mobile View  */}
      <div className="lg:hidden">
        <MobileNavbar />
      </div>
      {/* Desktop View  */}
      <div className="hidden lg:block">
        <TopNav />
        <Nav1 />
        <Nav2 />
      </div>
      <Banner />
    </div>
  );
};

export default HomePage;
