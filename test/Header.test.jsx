import Header from '../src/components/Header/Header';
import {render, screen} from '@testing-library/react';
import { MemoryRouter} from 'react-router-dom';



describe('Header', () => {
    it('Debe renderizarse', () => {
    render(<Header/>, {wrapper: MemoryRouter});
    const headers = screen.getByText('Burger Queen')
    expect(headers).toBeDefined();
    }
  );

});

