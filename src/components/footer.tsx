import { footerSection } from "@/styles/styles.css";

const Footer = () => {
  return (
    <>
      <section>
        <footer className={`${footerSection}`}>
          <p>&copy; {new Date().getFullYear()} Accord. All rights reserved.</p>
        </footer>
      </section>
    </>
  );
};

export default Footer;
