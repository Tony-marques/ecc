import { useEffect } from "react";
import { generateLocalBusinessSchema } from "../utils/localBusinessSchema";
import { generateOrganizationSchema } from "../utils/schemaOrg";

/**
 * Hook to inject JSON-LD structured data (schema.org) into document head
 * This helps search engines understand your business better
 */
export const useStructuredData = () => {
  useEffect(() => {
    // Add LocalBusiness schema
    const localBusinessScript = document.createElement("script");
    localBusinessScript.type = "application/ld+json";
    localBusinessScript.textContent = JSON.stringify(generateLocalBusinessSchema());
    document.head.appendChild(localBusinessScript);

    // Add Organization schema
    const organizationScript = document.createElement("script");
    organizationScript.type = "application/ld+json";
    organizationScript.textContent = JSON.stringify(generateOrganizationSchema());
    document.head.appendChild(organizationScript);

    return () => {
      // Cleanup
      document.head.removeChild(localBusinessScript);
      document.head.removeChild(organizationScript);
    };
  }, []);
};
