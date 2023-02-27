import { render } from '@testing-library/vue';
import Summary from '../components/Summary.vue';

describe('Summary', () => {
  test.skip('should render reservation summary', () => {
    const room = {
      name: 'Test Room',
      description: 'Test description',
      size: '20 m2',
      beds: 2,
      people: 2,
      amount: 100,
      image: 'test-image.jpg',
    };
    const reservation = {
      startDate: new Date('2023-03-01'),
      endDate: new Date('2023-03-04'),
      adults: 2,
      children: 0,
    };
    const { getByText } = render(Summary, {
      props: {
        room,
      },
      global: {
        provide: {
          reservation: {
            reservation: {
              ...reservation,
            },
            updateReservation: () => {},
          },
        },
      },
    });

    expect(getByText('Reservation summary')).toBeTruthy();
    expect(getByText(room.name)).toBeTruthy();
    expect(getByText('From 15.00h')).toBeTruthy();
    expect(getByText('Before 12.00h')).toBeTruthy();
    expect(
      getByText(
        `From ${reservation.startDate.toLocaleDateString()} to ${reservation.endDate.toLocaleDateString()}`,
      ),
    ).toBeTruthy();
    expect(getByText(`${reservation.adults} Adults`)).toBeTruthy();
    expect(getByText(`${reservation.children} Children`)).toBeTruthy();
    expect(getByText(`${room.amount} €`)).toBeTruthy();
    expect(getByText('Save')).toBeTruthy();
  });
});
