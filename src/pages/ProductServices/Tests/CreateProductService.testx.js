import { useCreateProductService } from "../Hooks/useCreateProductService";
import { CreateProductService } from "../Components/CreateProductService";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
// jest.mock("../Hooks/useCreateProductService"); // Mockear el hook useCreateProductService

describe("CreateProductService component", () => {
  test("submitting the form with valid data", async () => {
    render(
      <Router>
        <CreateProductService />
      </Router>
    );

    await waitFor(() => {
      const form = screen.getByLabelText("Nombre");
      expect(form).toBeInTheDocument();
    });
    await waitFor(() => {
      const form = screen.getByLabelText("Perfil Geografico servicio");
      expect(form).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(
        screen.getByText("Restricciones para alergias")
      ).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText("Tipo de plan")).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText("Guardar")).toBeInTheDocument();
    });
  });
});
