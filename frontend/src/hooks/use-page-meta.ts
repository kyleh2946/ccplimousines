import { useEffect } from "react";

interface PageMeta {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
}

function setMetaTag(attr: string, attrValue: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${attrValue}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(url: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", url);
}

export function usePageMeta(meta: PageMeta | string, description?: string) {
  useEffect(() => {
    const m: PageMeta = typeof meta === "string"
      ? { title: meta, description: description || "" }
      : meta;

    document.title = m.title;

    if (m.description) {
      setMetaTag("name", "description", m.description);
    }
    if (m.keywords) {
      setMetaTag("name", "keywords", m.keywords);
    }

    setMetaTag("property", "og:title", m.ogTitle || m.title);
    setMetaTag("property", "og:description", m.ogDescription || m.description);
    setMetaTag("property", "og:type", m.ogType || "website");
    setMetaTag("property", "og:site_name", "Prestige Limousines Central Coast");

    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", m.ogTitle || m.title);
    setMetaTag("name", "twitter:description", m.ogDescription || m.description);

    if (m.canonical) {
      setCanonical(m.canonical);
    }

    setMetaTag("name", "geo.region", "AU-NSW");
    setMetaTag("name", "geo.placename", "Central Coast");
  }, [meta, description]);
}
