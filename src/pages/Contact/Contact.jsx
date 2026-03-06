import ContactForm from "../../components/ContactForm/ContactForm";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-pages">
      <main>
       <Header />
        <div className="main-container">
        <ContactForm />
        </div>
        <Footer />
        </main>
    </div>
  );
}
