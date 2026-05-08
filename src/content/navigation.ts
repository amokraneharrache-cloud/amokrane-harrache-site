import { pages } from "@/content/pages";

export const mainNavigation = [
  pages.services,
  pages.useCases,
  pages.demonstrators,
  pages.method,
  pages.security,
  pages.about,
  pages.contact,
].map(({ label, path }) => ({ label, href: path }));

export const headerNavigation = [
  pages.services,
  pages.useCases,
  pages.demonstrators,
  pages.about,
].map(({ label, path }) => ({ label, href: path }));

export const footerNavigation = [
  ...mainNavigation,
  { label: pages.resources.label, href: pages.resources.path },
];

export const serviceNavigation = [
  pages.audit,
  pages.reporting,
  pages.data,
  pages.emailsDocuments,
  pages.assistant,
].map(({ label, path }) => ({ label, href: path }));
