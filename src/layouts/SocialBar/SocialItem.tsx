interface SocialItemProps {
  label: string;
  Icon: React.ReactElement;
  href: string;
}

export default function SocialItem({ label, Icon, href }: SocialItemProps) {
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById(href);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {label === "contact" && (
        <a
          href={`#${href}`}
          onClick={handleContactClick}
          aria-label="Contact par email"
        >
          {Icon}
        </a>
      )}
      {label !== "contact" && (
        <a
          href={href}
          aria-label={label}
          target="_blank"
          rel="noopener noreferrer"
        >
          {Icon}
        </a>
      )}
    </>
  );
}
