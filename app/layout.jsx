import "@/assets/styles/globals.css";
import "materialize-css/dist/css/materialize.min.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export const metadata = {
  title: "My Pension Tree",
  description: "Find the perfect pension plan for you",
  keywords: "pension, retirement, savings",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
