import emailjs from "emailjs-com";
import type { FormEvent } from "react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./ContactForm.module.css";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null,
  );

  useEffect(() => {
    if (submitStatus) {
      const t = setTimeout(() => setSubmitStatus(null), 5000);
      return () => clearTimeout(t);
    }
  }, [submitStatus]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      e.preventDefault();

      const data = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      };

      emailjs
        .send("service_k04k20b", "template_4t2qtoe", data, "q5uC-6vUJ31sLcH-G")
        .then(() => {
          setSubmitStatus("success");

          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
        })
        .catch(() => alert("Erreur lors de l’envoi"))
        .finally(() => {
          setIsSubmitting(false);
        });
    } catch {
      setSubmitStatus("error");
    }
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="name">{t("contact.name")} *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder={t("contact.name")}
        />
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="email">{t("contact.emailAddress")} *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="abc@email.com"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone">{t("contact.phoneNumber")}</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="06 12 34 56 78"
          />
        </div>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="subject">{t("contact.subject")} *</label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        >
          <option value="">{t("contact.selectSubject")}</option>
          <option value="demandes d'informations">
            {t("contact.infoRequest")}
          </option>
          <option value="confier bien">{t("contact.trustProperty")}</option>
          <option value="devenir prestataire">
            {t("contact.becomeProvider")}
          </option>
          <option value="partenariat">{t("contact.partnership")}</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message">{t("contact.message")} *</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          placeholder={t("contact.message")}
        />
      </div>

      {submitStatus === "success" && (
        <div className={styles.successMessage}>
          {t("contact.successMessage")}
        </div>
      )}

      {submitStatus === "error" && (
        <div className={styles.errorMessage}>{t("contact.errorMessage")}</div>
      )}

      <button
        type="submit"
        className={styles.submitButton}
        disabled={isSubmitting}
      >
        {isSubmitting ? t("contact.sending") : t("contact.sendMessage")}
      </button>
    </form>
  );
}
