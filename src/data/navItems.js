import i18n from "../i18n/en_US.json";

const sideNavItems = [
  "reports",
  "invoicing",
  "banking",
  "expenses",
  "employees",
  "taxes",
  "accounting",
  "apps",
  "tools",
];

const allNavItems = {
  reports: [
    "recommended",
    "frequently_run",
    "my_custom_reports",
    "management_reports",
    "all_reports",
  ],
  invoicing: [
    "recommended",
    "all_sales",
    "customers",
    "invoices",
    "products_and_services",
  ],
  banking: ["recommended", "banking_transactions", "rules", "receipts"],
  expenses: [],
  employees: [],
  Taxes: [],
  Accounting: [],
  Apps: [],
  Tools: [],
};

export function getNavItems(navItem) {
  let navItems = [];
  if (allNavItems[navItem]) {
    let set = new Set(allNavItems[navItem]);
    navItems = Array.from(set);
  }
  return navItems;
}
export function getSideNavItems() {
  let set = new Set(sideNavItems);

  return Array.from(set);
}
