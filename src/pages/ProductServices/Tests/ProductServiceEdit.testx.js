import React from "react";
import { render, screen } from "@testing-library/react";
import ProductServiceEdit from "../Pages/ProductServiceEdit";
import { BrowserRouter as Router } from "react-router-dom";
describe("ProductServiceEdit Component", () => {
  test("renders card title correctly", () => {
    render(
      <Router>
        <ProductServiceEdit />
      </Router>
    );
    const cardTitle = screen.getByText("Registro de productos y/o servicios");
    expect(cardTitle).toBeInTheDocument();
  });

  test("renders card text correctly", () => {
    render(
      <Router>
        <ProductServiceEdit />
      </Router>
    );
    const cardText = screen.getByText("Agregar un nuevo producto o servicio");
    expect(cardText).toBeInTheDocument();
  });

  test("renders CreateProductService component", () => {
    render(
      <Router>
        <ProductServiceEdit />
      </Router>
    );
    const createProductServiceComponent = screen.getByTestId(
      "create-product-service"
    );
    expect(createProductServiceComponent).toBeInTheDocument();
  });
});
