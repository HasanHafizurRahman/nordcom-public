import MobileNavbar from "@/components/Header/MobileNavbar";
import Nav1 from "@/components/Header/Nav1";
import Nav2 from "@/components/Header/Nav2";
import TopNav from "@/components/Header/TopNav";
import HomePage from "@/components/HomePage";

export default function Home() {
  return (
    <main>
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
      <HomePage />
      <h1>This is The Nordcom Ecommerce Public Panel</h1>
      <p>API base url get from env '{process.env.API_BASE_URL}'</p>
    </main>
  );
}
