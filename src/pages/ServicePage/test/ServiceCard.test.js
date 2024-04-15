import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ServiceCard from "../Components/ServiceCard";

describe("ServiceCard component", () => {
  const item = {
    id: 1,
    name: "Test Service",
    picture: "test-picture.jpg",
  };

  test("renders service card correctly", () => {
    render(
      <Router>
        <ServiceCard item={item} hover={0} setHover={() => {}} />
      </Router>
    );

    // Verificar que el nombre del servicio esté presente
    expect(screen.getByText("Test Service")).toBeInTheDocument();

    // Verificar que el enlace de "Leer más" esté presente
    expect(screen.getByText("Leer más")).toBeInTheDocument();

    // Simular el evento de mouse entrar para activar el hover
    fireEvent.mouseEnter(screen.getByText("Test Service"));

 

  });
});
