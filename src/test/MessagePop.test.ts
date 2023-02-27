import MessagePop from '../components/MessagePop.vue';
import { render, screen } from '@testing-library/vue';

describe('MessagePop', () => {
  test('should render without error', () => {
    const renderResult = render(MessagePop);
    expect(renderResult).toBeTruthy();
  });
  test('renders alert with title and message props', () => {
    const title = 'Alert Title';
    const message = 'This is the alert message';
    render(MessagePop, {
      props: {
        title,
        message,
      },
    });
    const alertTitle = screen.getByText(title);
    const alertMessage = screen.getByText(message);
    expect(alertTitle).toBeTruthy();
    expect(alertMessage).toBeTruthy();
  });
});
