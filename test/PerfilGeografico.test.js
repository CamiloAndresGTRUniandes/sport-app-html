
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 

import { PerfilGeografico } from '../src/pages/EdicionServiciosPage/Pages/PerfilGeografico';

describe('PerfilGeografico', () => {
  test('renders without crashing', () => {
    render(<PerfilGeografico />);
  });

  test('renders with initial values', () => {
    const { getByText, getByLabelText } = render(<PerfilGeografico />);
    
    expect(getByLabelText('País')).toHaveValue('');
    expect(getByLabelText('Estado')).toHaveValue('');
    expect(getByLabelText('Ciudad')).toHaveValue('');
    expect(getByText('Enviar')).toBeDisabled();
  });

  test('updates departments when country is selected', async () => {
    const { getByLabelText, findByText } = render(<PerfilGeografico />);
    
    fireEvent.change(getByLabelText('País'), { target: { value: '1' } });

    // Espera a que los departamentos se actualicen en función del país seleccionado
    const departamentoOption = await findByText('Departamento de Prueba');
    expect(departamentoOption).toBeInTheDocument();
  });

  test('updates cities when department is selected', async () => {
    const { getByLabelText, findByText } = render(<PerfilGeografico />);
    
    fireEvent.change(getByLabelText('País'), { target: { value: '1' } });
    fireEvent.change(getByLabelText('Estado'), { target: { value: '1' } });

    // Espera a que las ciudades se actualicen en función del departamento seleccionado
    const ciudadOption = await findByText('Ciudad de Prueba');
    expect(ciudadOption).toBeInTheDocument();
  });

  test('submits form when "Enviar" button is clicked', async () => {
    const { getByText, getByLabelText } = render(<PerfilGeografico />);

    fireEvent.change(getByLabelText('País'), { target: { value: '1' } });
    fireEvent.change(getByLabelText('Estado'), { target: { value: '1' } });
    fireEvent.change(getByLabelText('Ciudad'), { target: { value: '1' } });

    // Verifica que el botón "Enviar" esté habilitado
    expect(getByText('Enviar')).not.toBeDisabled();

    // Simula el envío del formulario
    fireEvent.click(getByText('Enviar'));

    // Espera a que el formulario sea enviado (puedes ajustar esto según tu lógica específica)
    await waitFor(() => {
      expect(console.log).toHaveBeenCalledWith('formulario enviado');
    });
  });
});
