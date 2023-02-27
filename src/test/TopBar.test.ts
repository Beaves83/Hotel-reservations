import TopBar from '../components/TopBar.vue';
import { render, screen } from '@testing-library/vue';
import { describe, test, expect } from 'vitest';

describe('TopBar component', () => {
  test('should render without error', () => {
    const renderResult = render(TopBar);
    expect(renderResult).toBeTruthy();
  });

  test('should render all links', () => {
    const { getByText } = render(TopBar);
    expect(getByText('Home')).toBeTruthy();
    expect(getByText('Rooms')).toBeTruthy();
    expect(getByText('Restaurant')).toBeTruthy();
    expect(getByText('Weedings')).toBeTruthy();
    expect(getByText('Membership')).toBeTruthy();
    expect(getByText('Contact')).toBeTruthy();
  });

  test('should render the Los Cocos logo', () => {
    render(TopBar);
    const iconsElement = screen.getByRole('img', {
      alt: 'Hotel Los Cocos',
    });
    expect(iconsElement).toBeTruthy();
  });
});
