import React from "react";
import styles from "./WhatsAppButton.module.css";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton: React.FC = () => {
  const phoneNumber = "0682117625";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappButton}
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp color="white" size={32} />
    </a>
  );
};

export default WhatsAppButton;
