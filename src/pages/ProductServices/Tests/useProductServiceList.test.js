import { renderHook, act } from "@testing-library/react-hooks";
import axios from "axios";
import { useProductServiceList } from "../Hooks/useProductServiceList";

// Mockear Axios
jest.mock("axios");

describe("Pruebas para el hook useProductServiceList", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("empty ProductServiceList", async () => {
    const mockData = [];
    axios.get.mockResolvedValueOnce({ data: mockData });

    const { result, waitForNextUpdate } = renderHook(() =>
      useProductServiceList()
    );

    await act(async () => {
      await result.current.GetDataAsync();
    });

    expect(result.current.initialData).toEqual(mockData);
  });
  it("productsLoading initial", () => {
    const { result } = renderHook(() => useProductServiceList());

    expect(result.current.productsLoading).toEqual(true);
  });

  it("fetches product service data correctly", async () => {
    const mockProductServicesData = [
      { productId: 1, name: "Product 1", price: 10 },
      { productId: 2, name: "Product 2", price: 20 },
    ];
    axios.post.mockResolvedValueOnce({ data: mockProductServicesData });
    const mockPlanData = { name: "Plan A" };
    const mockServiceTypeData = { name: "Type A" };
    axios.get
      .mockResolvedValueOnce({ data: mockPlanData })
      .mockResolvedValueOnce({ data: mockServiceTypeData });
    const { result, waitForNextUpdate } = renderHook(() =>
      useProductServiceList()
    );
    await act(async () => {
      await result.current.GetDataAsync();
    });
  });
});
