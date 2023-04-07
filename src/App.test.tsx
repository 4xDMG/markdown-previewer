import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

it('converts markdown input to html', () => {
  render(<App />);

  const markdownInput = screen.getByTestId("input__markdown");

  userEvent.type(markdownInput, "# Heading 1");

  const markdownOutput = screen.getByTestId("ouput__markdown");

  expect(markdownOutput).toContainHTML("<h1 id=\"heading-1\">Heading 1</h1>")
});
