import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"; // Para usar métodos como `toBeInTheDocument`
import ServiceCard from "../Components/ServiceCard";

// Mock data para las pruebas
const mockItem = {
  id: 1,
  picture: "https://example.com/image.jpg",
  name: "Test Service",
};

describe("ServiceCard - onMouseEnter", () => {
  test("should call setHover with item.id on mouse enter", () => {
    const setHoverMock = jest.fn(); // Mock para la función setHover

    const { getByTestId } = render(
      <BrowserRouter>
        <ServiceCard item={mockItem} hover={null} setHover={setHoverMock} />
      </BrowserRouter>
    );

    // Elemento al que se aplicará el evento 'mouseEnter'
    const cardWrapper = getByTestId("service-card-wrapper");

    // Simula el evento 'onMouseEnter'
    fireEvent.mouseEnter(cardWrapper);

    // Verifica que se llamó a la función setHover con el ID correcto
    expect(setHoverMock).toHaveBeenCalledWith(mockItem.id); // Debería ser `1`
  });
});
