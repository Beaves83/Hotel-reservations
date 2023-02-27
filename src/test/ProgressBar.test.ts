import ProgressBar from '../components/ProgressBar.vue';
import { render, screen } from '@testing-library/vue';
import { describe, test, expect } from 'vitest';

describe('ProgressBar component', () => {
  test('should render without error', () => {
    const renderResult = render(ProgressBar);
    expect(renderResult).toBeTruthy();
  });

  test('should render all links', () => {
    const { getByText } = render(ProgressBar);
    expect(getByText('Rooms & Rates')).toBeTruthy();
    expect(getByText('Plan your perfect stay at your hotel')).toBeTruthy();
  });

  test('should render the Path image', () => {
    render(ProgressBar);
    const iconsElement = screen.getAllByRole('img', {
      alt: 'Path',
    });
    expect(iconsElement).toBeTruthy();
  });
});
