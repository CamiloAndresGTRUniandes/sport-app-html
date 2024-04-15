import React from 'react';
import { useFormikContext } from 'formik';
import { render, fireEvent,screen } from "@testing-library/react";
import { ArrayCheckBoxes } from "../../src/pages/Utils/ArrayCheckBoxes";
import 'intersection-observer';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-test-renderer';
import { renderHook } from '@testing-library/react-hooks';
// Mock de useFormikContext para proporcionar setFieldValue
jest.mock('formik', () => ({
  ...jest.requireActual('formik'),
  useFormikContext: jest.fn(),
}));

describe('ArrayCheckBoxes', () => {
  const setFieldValueMock = jest.fn(); // Mock de setFieldValue
  const values = { nameGroup: [] }; // Valores iniciales para el formulario

  beforeEach(() => {
    useFormikContext.mockReturnValue({
      setFieldValue: setFieldValueMock,
      values,
    }); // Configura el mock de useFormikContext
  });

  afterEach(() => {
    jest.clearAllMocks(); // Limpia los mocks después de cada prueba
  });

  const setFieldValue2 = jest.fn();
  const handleSubmit2 = jest.fn();



  it('updates selected options correctly', () => {

    const dataArray=[
      { id: '1', name: 'Option 1' },
      { id: '2', name: 'Option 2' },
      { id: '3', name: 'Option 3' },
      
    ];
    let values={
      "id":"1",
      "nutricionalAllergies":[]

    }

    jest.mock('formik', () => ({
      useFormik: () => ({
        setFieldValue:jest.fn(),
        handleSubmit:jest.fn(),
        values: {
          dataArray
        },
      }),
    }));
    
/*
  data={nutricionalAllergiesUP}
                            nameGroup="nutricionalAllergies"
                            label="Cuales alergias?"
                            classDivMain={classEditTextBox}
                            values={formik.values}
*/


    const { result } = renderHook(
      
      <ArrayCheckBoxes
        data={dataArray}
        nameGroup="nutricionalAllergies" // Asegúrate de pasar nameGroup como una propiedad
        label="Test Label"
        classDivMain="test-div"
        values={values}
      />
    );

    //screen.debug();
    console.log("resultxxxxxxxxxxxxxxxxxxx ",result)
    /*

    const checkbox1 = getByLabel('Option 1');
    const checkbox2 = getByLabel('Option 2');

    fireEvent.click(checkbox1);
    expect(setFieldValueMock).toHaveBeenCalledWith('nameGroup', [1]);

    fireEvent.click(checkbox2);
    expect(setFieldValueMock).toHaveBeenCalledWith('nameGroup', [1, 2]);

    fireEvent.click(checkbox1);
    expect(setFieldValueMock).toHaveBeenCalledWith('nameGroup', [2]);

    */
  });
});