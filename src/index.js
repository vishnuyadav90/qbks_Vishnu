import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Expenses from "./components/expenses";
import Reports from "./components/reports/reports";
import AllReports from "./components/reports/allReports";
import RecommendedReport from "./components/reports/recommended";
import FrequentlyRun from "./components/reports/frequentlyRun";
import MyCustomReports from "./components/reports/myCustomReports";
import ManagementReports from "./components/reports/managementReports";
import Invoicing from "./components/invoicing/invoicing";
import RecommendedInvoicing from "./components/invoicing/recommended";
import AllSales from "./components/invoicing/allSales";
import Customers from "./components/invoicing/customers";
import Invoices from "./components/invoicing/invoices";
import ProductsAndServices from "./components/invoicing/productsAndServices";
import Accounting from "./components/accounting";
import Apps from "./components/apps";
import Taxes from "./components/taxes";
import Tools from "./components/tools";
import Banking from "./components/banking/banking";
import RecommendedBanking from "./components/banking/recommended";
import BankingTransactions from "./components/banking/bankingTransactions";
import Rules from "./components/banking/rules";
import Receipts from "./components/banking/receipts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Reports />} />
        <Route path="reports" element={<Reports />}>
          <Route index element={<RecommendedReport />} />
          <Route path="recommended" element={<RecommendedReport />} />
          <Route path="frequently_run" element={<FrequentlyRun />} />
          <Route path="my_custom_reports" element={<MyCustomReports />} />
          <Route path="management_reports" element={<ManagementReports />} />
          <Route path="all_reports" element={<AllReports />} />
        </Route>
        <Route path="invoicing" element={<Invoicing />}>
          <Route index element={<RecommendedInvoicing />} />
          <Route path="recommended" element={<RecommendedInvoicing />} />
          <Route path="all_sales" element={<AllSales />} />
          <Route path="customers" element={<Customers />} />
          <Route path="invoices" element={<Invoices />} />
          <Route
            path="products_and_services"
            element={<ProductsAndServices />}
          />
        </Route>
        <Route path="banking" element={<Banking />}>
          <Route index element={<RecommendedBanking />} />
          <Route path="recommended" element={<RecommendedBanking />} />
          <Route
            path="banking_transactions"
            element={<BankingTransactions />}
          />
          <Route path="receipts" element={<Receipts />} />
          <Route path="rules" element={<Rules />} />
        </Route>
        <Route path="expenses" element={<Expenses />} />
        <Route path="accounting" element={<Accounting />} />
        <Route path="apps" element={<Apps />} />
        <Route path="taxes" element={<Taxes />} />
        <Route path="tools" element={<Tools />} />
        <Route
          path="*"
          element={
            <main>
              <p>This page is empty</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
