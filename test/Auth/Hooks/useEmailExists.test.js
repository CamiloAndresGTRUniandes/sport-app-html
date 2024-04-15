import axios from 'axios'; // Mock for external API calls
import useEmailExists from '../../../src/pages/Auth/hooks/useEmailExists'; // Assuming the hook is in the same directory
import 'intersection-observer';
import React from 'react'; 
jest.mock('axios'); // Mock the axios library
import { renderHook, act } from '@testing-library/react';

jest.mock('axios');

describe('useEmailExists hook', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Reset mock functions before each test
  });


  it('should return initial state', () => {
    const { result } = renderHook(() => useEmailExists());

    expect(result.current.isSubmitting).toBe(false);
    expect(result.current.emailExists).toBe(false);
    expect(result.current.errorMessage).toBe('');
  });

  it('should validate email', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useEmailExists());

    axios.get.mockResolvedValueOnce({ data: false });

    await act(async () => {
      result.current.validateEmail('test@example.com');
      
    });

    expect(axios.get).toHaveBeenCalledWith(`${process.env.REACT_APP_API_URL}/api/V1/Account/is-email-unique/test@example.com`);
    expect(result.current.isSubmitting).toBe(false);
    expect(result.current.emailExists).toBe(false);
    expect(result.current.errorMessage).toBe('');
  });


  it('should handle error when validating email', async () => {
    const { result } = renderHook(() => useEmailExists());

    axios.get.mockRejectedValueOnce(new Error('Network Error'));

    await act(async () => {
      result.current.validateEmail('test@example.com');
   
    });

    expect(result.current.isSubmitting).toBe(false);
    expect(result.current.emailExists).toBe(false);
    expect(result.current.errorMessage).toBe('Network Error');
  });


  
});