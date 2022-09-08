import { Button } from '../../components/Button';
import { render, screen } from '../../utils/test-utils';

describe('Button Component test', () => {
  it('should show Test', () => {
    render(<Button />);

    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
