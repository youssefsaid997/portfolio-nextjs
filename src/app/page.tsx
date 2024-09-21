import Footer from "@/frontend/components/Footer";
import Navbar from "@/frontend/components/Navbar";
import HomePage from "@/frontend/views/HomePage";

export default function Home() {
  return (
    <div className="flex flex-col gap-3 ">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}
