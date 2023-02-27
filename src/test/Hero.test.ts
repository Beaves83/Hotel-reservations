import Hero from '../components/Hero.vue';
import { render, screen } from '@testing-library/vue';
import { describe, test, expect } from 'vitest';
import userEvent from '@testing-library/user-event';

describe.skip('Hero component', () => {
  test('should render without error', () => {
    const renderResult = render(Hero);
    expect(renderResult).toBeTruthy();
  });

  test.skip('renders two Datepicker components', () => {
    render(Hero);

    const datepickers = screen.getAllByRole('textbox', {
      name: /Datepicker/i,
    });
    expect(datepickers).toHaveLength(2);
  });

  test('renders two CustomSelect components', () => {
    render(Hero);

    const customSelects = screen.getAllByRole('combobox');
    expect(customSelects).toHaveLength(2);
  });

  test('displays success message after modifying reservation', async () => {
    const reservation = {
      startDate: '2022-03-01',
      endDate: '2022-03-03',
      adults: 2,
      children: 1,
    };
    //const updateReservation = jest.fn();

    render(Hero, {
      global: {
        provide: {
          reservationKey: {
            updateReservation,
            reservation: {
              value: reservation,
            },
          },
        },
      },
    });
    const modifyButton = screen.getByRole('button', { name: /Modify/i });
    userEvent.click(modifyButton);

    const successMessage = await screen.findByText(
      /Your reservation summary has been updated/i,
    );
    expect(successMessage).toBeTruthy();

    expect(updateReservation).toHaveBeenCalledWith(reservation);
  });
});
