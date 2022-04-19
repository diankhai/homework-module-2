import { render, screen } from '@testing-library/react';
import {Tracklist} from './Searchbar';

test('renders all tracks components', () => {
  render(<Tracklist />);
  const tracksComp = await screen.findAllByText('Queen');
  expect(tracksComp).toBeVisible();
});