import { useEffect } from "react";

const SCRIPT_ID = "structured-data-jsonld";

export function useStructuredData(data: object | object[]) {
  useEffect(() => {
    let existing = document.getElementById(SCRIPT_ID);
    if (existing) {
      existing.remove();
    }
    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
    return () => {
      script.remove();
    };
  }, [data]);
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LimousineBusService",
  "name": "Prestige Limousines Central Coast",
  "description": "Central Coast's premier limousine and hire car service offering wedding limos, airport transfers, corporate travel, and cruise ship transfers across the Central Coast, Sydney, Hunter Valley and Newcastle.",
  "url": "https://prestigelimousines.com.au",
  "telephone": "+61417024271",
  "email": "info@prestigelimos.com.au",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Central Coast",
    "addressRegion": "NSW",
    "addressCountry": "AU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -33.4264,
    "longitude": 151.3419
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Central Coast",
      "containedInPlace": { "@type": "State", "name": "New South Wales" }
    },
    { "@type": "City", "name": "Sydney" },
    { "@type": "City", "name": "Newcastle" },
    { "@type": "City", "name": "Gosford" },
    { "@type": "City", "name": "Terrigal" },
    { "@type": "City", "name": "Wyong" },
    { "@type": "City", "name": "Hunter Valley" }
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "priceRange": "$$",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Limousine Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Wedding Limousine Hire Central Coast",
          "description": "Luxury wedding limousine hire on the Central Coast NSW. Stretch limos, sedans and people movers for your special day."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Airport Transfer Central Coast",
          "description": "Reliable airport transfer service from the Central Coast to Sydney Domestic and International airports."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Corporate Limousine Hire",
          "description": "Professional corporate car hire and chauffeur service for business travel on the Central Coast and Sydney."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cruise Ship Transfer Central Coast",
          "description": "Luxury cruise ship terminal transfers from the Central Coast to Sydney cruise terminals."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "School Formal Limousine Hire",
          "description": "Stretch limousine hire for school formals and events on the Central Coast NSW."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Hunter Valley Wine Tour Transport",
          "description": "Luxury transport for Hunter Valley wine tours from the Central Coast."
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "150",
    "bestRating": "5"
  }
};

export function useLocalBusinessSchema() {
  useStructuredData(localBusinessSchema);
}

export function useServiceSchema(serviceName: string, serviceDescription: string) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": serviceDescription,
    "provider": {
      "@type": "LimousineBusService",
      "name": "Prestige Limousines Central Coast",
      "telephone": "+61417024271",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Central Coast",
        "addressRegion": "NSW",
        "addressCountry": "AU"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Central Coast",
      "containedInPlace": { "@type": "State", "name": "New South Wales" }
    },
    "serviceType": "Limousine Hire"
  };
  useStructuredData(data);
}

export function useBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": item.name,
      "item": item.url
    }))
  };
  useStructuredData(data);
}
