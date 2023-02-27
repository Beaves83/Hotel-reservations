import Rooms from '../components/Rooms.vue';
import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import { myRooms } from '../mockData';

describe('Rooms component', () => {
  test('should render without error', () => {
    const renderResult = render(Rooms);
    expect(renderResult).toBeTruthy();
  });

  test('renders all rooms', () => {
    render(Rooms, {
      props: {
        myRooms,
      },
    });
    const roomElement = screen.getAllByRole('room', { className: 'room', });
    expect(roomElement).toHaveLength(myRooms.length);
  });

  test('renders correctly', () => {
    const { getByText } = render(Rooms);

    expect(getByText(myRooms[0].name)).toBeTruthy();
    expect(getByText(myRooms[1].name)).toBeTruthy();
    expect(getByText(myRooms[2].name)).toBeTruthy();
  });

  test('should emit selectRoom event when a room is clicked', async () => {
    const { emitted } = render(Rooms, {
      props: {
        myRooms,
      },
    });
    const roomElement = screen.getByText(myRooms[0].name);
    await userEvent.click(roomElement);
    expect(emitted().selectRoom).toBeTruthy();
    expect(emitted().selectRoom[0]).toEqual([myRooms[0]]);
  });
});
