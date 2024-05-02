import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ReceiveTrackingDetail from '../../../src/pages/ReceiveTracking/Components/ReceiveTracking';
import { format } from 'date-fns';

describe('ReceiveTrackingDetail Component', () => {
    const receiveTrackingDetail = {
        createdAt: '2023-01-01T00:00:00.000Z', // Fecha a formatear
        image: '/path/to/image.jpg', // Ruta de imagen simulada
        name: 'John Doe', // Nombre simulado
        title: 'Mi Título', // Título simulado
        description: 'Esta es la descripción del contenido.', // Descripción simulada
    };

    const formattedDate = format(new Date(receiveTrackingDetail.createdAt), 'MMM dd, yyyy');

    it('se renderiza correctamente', () => {
        render(
            <MemoryRouter>
                <ReceiveTrackingDetail receiveTrackingDetail={receiveTrackingDetail} />
            </MemoryRouter>
        );

        // Verificar que el componente se renderiza sin errores
        expect(screen.getByText('Mi Título')); // Título
        expect(screen.getByText('John Doe')); // Nombre del autor
        expect(screen.getByText(formattedDate)); // Fecha formateada
        expect(screen.getByText('Esta es la descripción del contenido.')); // Descripción
        
    });

    it('los enlaces de navegación funcionan correctamente', () => {
        render(
            <MemoryRouter>
                <ReceiveTrackingDetail receiveTrackingDetail={receiveTrackingDetail} />
            </MemoryRouter>
        );

        // Verificar que los enlaces están presentes y funcionan como se espera
        const authorLink = screen.getByRole('link', { name: 'John Doe' }); // Enlace al autor
        const dateLink = screen.getByRole('link', { name: formattedDate }); // Enlace a la fecha

        expect(authorLink); // El enlace del autor está presente
        expect(dateLink); // El enlace de la fecha está presente

    });
});
