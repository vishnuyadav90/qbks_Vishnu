const recommendations = {
  reports: ["frequently_run", "management_reports", "my_custom_reports"],
  invoicing: ["customers", "products_and_services", "all_sales", "invoices"],
  banking: ["receipts", "banking_transactions"],
  expenses: [],
  employees: [],
  Taxes: [],
  Accounting: [],
  Apps: [],
  Tools: [],
};

export function getRecommendations(navItem) {
  let navRecommendations = [];
  if (recommendations[navItem]) {
    let set = new Set(recommendations[navItem]);
    navRecommendations = Array.from(set);
  }
  return navRecommendations;
}
