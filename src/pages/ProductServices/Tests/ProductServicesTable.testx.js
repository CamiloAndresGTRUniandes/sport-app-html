import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { useProductServiceList } from "../Hooks/useProductServiceList";
import ServicesTable from "../Components/ProductServicesTable";
import { BrowserRouter as Router } from "react-router-dom";

jest.mock("../Hooks/useProductServiceList");

describe("ProductServicesTable component", () => {
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

  test("renders table with product service data correctly", () => {
    render(
      <Router>
        <ServicesTable />
      </Router>
    );
    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();

    const rows = screen.getAllByRole("row");
    // Verify headers
    const headerRow = rows[0];
    expect(headerRow).toHaveTextContent("Nombre");
    expect(headerRow).toHaveTextContent("Producto/Servicio");
    expect(headerRow).toHaveTextContent("Tipo de Plan");
    expect(headerRow).toHaveTextContent("Costo");
    expect(headerRow).toHaveTextContent("Editar");
    expect(headerRow).toHaveTextContent("Eliminar");

    // Verify data rows
    const dataRows = rows.slice(1); // Skip header row
    expect(dataRows).toHaveLength(2); // Two data rows
    dataRows.forEach((row, index) => {
      expect(row).toHaveTextContent(`Product ${index + 1}`);
      expect(row).toHaveTextContent(`Service Type ${index + 1}`);
      expect(row).toHaveTextContent(`${10 * (index + 1)}`);
    });
  });

  test("displays loading spinner while loading data", () => {
    useProductServiceList.mockReturnValue({
      initialData: [],
      GetDataAsync: jest.fn(),
      productsLoading: true,
    });

    render(
      <Router>
        <ServicesTable />
      </Router>
    );
    const spinner = screen.getByTestId("spinner");
    expect(spinner).toBeInTheDocument();
  });
});
