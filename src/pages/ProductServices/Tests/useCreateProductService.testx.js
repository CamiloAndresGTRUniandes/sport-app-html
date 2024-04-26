import React from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import axios from "axios"; // Mockear axios
import { useCreateProductService } from "../Hooks/useCreateProductService";

jest.mock("axios");

describe("Pruebas para el hook useCreateProductService", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("fetches initial product information", async () => {
    const mockProduct = {
      productId: "1",
      name: "Product 1",
      // Agrega otras propiedades necesarias para el producto inicial
    };

    axios.get.mockResolvedValueOnce({ data: mockProduct });
  });

  it("updates statesUP and citiesUP when changing country", async () => {
    const mockCountryId = "123"; // ID de país simulado
    const mockStates = [
      { id: 1, name: "State 1" },
      { id: 2, name: "State 2" },
    ];
    const mockCities = [
      { id: 1, name: "City 1" },
      { id: 2, name: "City 2" },
    ];

    axios.get.mockResolvedValueOnce({ data: mockStates });
    axios.get.mockResolvedValueOnce({ data: mockCities });

    const { result, waitForNextUpdate } = renderHook(() =>
      useCreateProductService()
    );

    act(() => {
      result.current.changeNewCountry(mockCountryId);
    });

    await waitForNextUpdate();

    expect(result.current.statesUP).toEqual(mockStates);
  });

  it("updates serviceTypesUP when changing category", async () => {
    const mockCategoryId = "123";
    const mockServiceTypes = [
      { id: 1, name: "Type 1" },
      { id: 2, name: "Type 2" },
    ];

    axios.get.mockResolvedValueOnce({ data: mockServiceTypes });

    const { result, waitForNextUpdate } = renderHook(() =>
      useCreateProductService()
    );

    act(() => {
      result.current.changeNewCategory(mockCategoryId);
    });

    await waitForNextUpdate();

    expect(result.current.serviceTypesUP).toEqual(mockServiceTypes);
  });

  it("handles error when creating product", async () => {
    const mockProduct = {
      name: "Product 1",
    };

    axios.post.mockRejectedValueOnce(new Error("Failed to create product"));

    const { result } = renderHook(() => useCreateProductService());

    await act(async () => {
      await result.current.createProduct(mockProduct);
    });

    expect(result.current.productCreated).toBe(false);
  });
  it("updates product loading state to false after fetching initial product information", async () => {
    const mockProduct = {
      productId: "1",
      name: "Product 1",
    };

    axios.get.mockResolvedValueOnce({ data: mockProduct });

    const { result } = renderHook(() => useCreateProductService());

    expect(result.current.productLoading).toEqual(true);
  });
  it("updates statesUP and citiesUP when changing state", async () => {
    const mockStateId = "456"; // ID de estado simulado
    const mockCities = [
      { id: 1, name: "City 1" },
      { id: 2, name: "City 2" },
    ];

    axios.get.mockResolvedValueOnce({ data: mockCities });

    const { result, waitForNextUpdate } = renderHook(() =>
      useCreateProductService()
    );

    act(() => {
      result.current.changeNewState(mockStateId);
    });

    await waitForNextUpdate();

    expect(result.current.citiesUP).toEqual(mockCities);
  });

  it("handles error when fetching initial product information", async () => {
    axios.get.mockRejectedValueOnce(new Error("Failed to fetch product"));

    const { result, waitForNextUpdate } = renderHook(() =>
      useCreateProductService()
    );

    expect(result.current.initialProduct).toBeUndefined();
    expect(result.current.productLoading).toEqual(true);
  });
});
