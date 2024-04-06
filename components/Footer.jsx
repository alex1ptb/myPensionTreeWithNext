import React from "react";
import "@/assets/styles/footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-green-700 border-b border-green-500">
      <p>&copy; {year} My Pension Tree</p>
    </footer>
  );
};

export default Footer;
