import { test, expect } from 'vitest';
import { getFormattedDate, getTomorrow } from '../utils';
import { render } from '@testing-library/vue';

test('getFormattedDate returns date in format dd/mm/yy', () => {
  const date = new Date('2023-02-27');
  const formattedDate = getFormattedDate(date);
  expect(formattedDate).toBe('27/02/23');
});

test('getTomorrow returns the date of tomorrow', () => {
  const today = new Date();
  const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
  expect(getTomorrow().getTime()).toBe(tomorrow.getTime());
});

test('getFormattedDate is called with a date and renders the correct formatted date', async () => {
  const date = new Date('2023-02-27');
  const { getByText } = render({
    template: '<div>{{ formattedDate }}</div>',
    data: () => ({
      formattedDate: getFormattedDate(date),
    }),
  });

  expect(getByText('27/02/23')).toBeTruthy();
});
