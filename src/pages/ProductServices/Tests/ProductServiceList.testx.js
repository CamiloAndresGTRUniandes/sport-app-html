import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ProductServices from "../Pages/ProductServiceList";
import { useProductServiceList } from "../Hooks/useProductServiceList";
afterEach(() => {
  cleanup();
});
jest.mock("../Hooks/useProductServiceList");
describe("ProductServices Component", () => {
  beforeEach(() => {
    useProductServiceList.mockReturnValue({
      initialData: [
        {
          productId: 1,
          name: "Product 1",
          serviceType: "Service Type 1",
          plan: "Plan A",
          price: 10,
        },
        {
          productId: 2,
          name: "Product 2",
          serviceType: "Service Type 2",
          plan: "Plan B",
          price: 20,
        },
      ],
      GetDataAsync: jest.fn(),
      productsLoading: false,
    });
  });
  test("renders 'Nuevo' button", () => {
    render(
      <Router>
        <ProductServices />
      </Router>
    );
    const nuevoButton = screen.getByText("Nuevo");
    expect(nuevoButton).toBeInTheDocument();
  });

  test("renders input field for searching", () => {
    render(
      <Router>
        <ProductServices />
      </Router>
    );
    const searchInput = screen.getByPlaceholderText("Buscar...");
    expect(searchInput).toBeInTheDocument();
  });

  test("renders ProductServicesTable component", () => {
    render(
      <Router>
        <ProductServices />
      </Router>
    );
    const productServicesTable = screen.getByTestId("product-services-table");
    expect(productServicesTable).toBeInTheDocument();
  });
});
