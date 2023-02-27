import Footer from '../components/Footer.vue';
import { cleanup, render, screen } from '@testing-library/vue';
import { afterEach, describe, test, expect } from 'vitest';

describe('Footer component', () => {
  afterEach(() => {
    cleanup();
  });

  test('should render without error', () => {
    const renderResult = render(Footer);
    expect(renderResult).toBeTruthy();
  });

  test('should render all links', () => {
    const { getByText } = render(Footer);
    expect(getByText('Terms and Conditions')).toBeTruthy();
    expect(getByText('Privacy Policy')).toBeTruthy();
    expect(getByText('About us')).toBeTruthy();
    expect(getByText('Partners')).toBeTruthy();
  });

  test('should render the correct email and phone number', () => {
    const { getByText } = render(Footer);

    expect(getByText('reservations@loscocosbungalows.com')).toBeTruthy();
    expect(getByText('Tlf: +34 555 555 555')).toBeTruthy();
  });

  test('should render the Los Cocos logo', () => {
    render(Footer);
    const iconsElement = screen.getAllByRole('img', {
      alt: 'Hotel Los Cocos',
    });
    expect(iconsElement).toBeTruthy();
  });

  test('should render the social media icons', () => {
    render(Footer);
    const iconsElement = screen.getAllByRole('img', {
      alt: 'Social media icons',
    });
    expect(iconsElement).toBeTruthy();
  });
});
