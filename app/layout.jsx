import "@/assets/styles/globals.css";

export const metadata = {
  title: "My Pension Tree",
  description: "Find the perfect pension plan for you",
  keywords: "pension, retirement, savings",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default MainLayout;
