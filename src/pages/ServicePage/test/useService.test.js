import { renderHook, act } from '@testing-library/react-hooks';
import axios from 'axios';
import useService from '../Hooks/useService';

// Mockear Axios
jest.mock('axios');

describe('Pruebas para el hook useService', () => {
    
    beforeEach(() => {
        jest.clearAllMocks(); // Limpiar todos los mocks entre cada prueba
    });
    
  it('fetches service data correctly', async () => {
    // Mockear la respuesta de Axios
    const mockData = [{ id: 1, name: 'Servicio 1' }, { id: 2, name: 'Servicio 2' }];
    axios.get.mockResolvedValueOnce({ data: mockData });

    // Renderizar el hook
    const { result, waitForNextUpdate } = renderHook(() => useService());

    // Verificar que el estado services esté vacío inicialmente
    expect(result.current.services).toEqual([]);
    
    // Esperar a que el hook actualice el estado
    await waitForNextUpdate();
    
    // Verificar que el estado services se haya actualizado correctamente
    expect(result.current.services).toEqual(mockData);
  });

  it('sets hover state correctly', () => {
    // Renderizar el hook
    const { result } = renderHook(() => useService());

    // Verificar que el estado hover se inicialice correctamente
    expect(result.current.hover).toEqual(0);
    
    // Cambiar el estado hover
    act(() => {
      result.current.setHover(1);
    });

    // Verificar que el estado hover se haya actualizado correctamente
    expect(result.current.hover).toEqual(1);
  });

  
  it('updates hover state correctly', () => {
    const { result } = renderHook(() => useService());
  
    // Verificar que el estado hover se inicialice correctamente
    expect(result.current.hover).toEqual(0);
    
    // Cambiar el estado hover a 1
    act(() => {
      result.current.setHover(1);
    });
  
    // Verificar que el estado hover se haya actualizado correctamente a 1
    expect(result.current.hover).toEqual(1);
  
    // Cambiar el estado hover a 2
    act(() => {
      result.current.setHover(2);
    });
  
    // Verificar que el estado hover se haya actualizado correctamente a 2
    expect(result.current.hover).toEqual(2);
  });
  
  


});
