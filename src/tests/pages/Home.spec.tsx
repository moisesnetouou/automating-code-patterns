import { App } from '../../App';
import { render, screen } from '../../utils/test-utils';

describe('Home page test', () => {
  it('should show React Image', () => {
    render(<App />);

    expect(screen.getByAltText('React logo')).toBeInTheDocument();
  });

  it('should show Vite Image', () => {
    render(<App />);

    expect(screen.getByAltText('Vite logo')).toBeInTheDocument();
  });
});
