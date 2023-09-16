import {
  BANK_MAP_ROUTE,
  CONTACT_ROUTE,
  ROOT_ROUTE,
  TIMELINE_ROUTE,
} from "./routes";

export const NAV_MENU_ITEMS = [
  {
    name: "Home",
    to: ROOT_ROUTE,
  },
  {
    name: "Timeline",
    to: TIMELINE_ROUTE,
  },
  {
    name: "Bank map",
    to: BANK_MAP_ROUTE,
  },
  {
    name: "Contact",
    to: CONTACT_ROUTE,
  },
];
