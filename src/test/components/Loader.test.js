import {render} from '@testing-library/react';
import Loader from '../../components/Loader';

describe('Loader', () => {
  it('renders loader component', () => {
    const {container} = render(<Loader />);

    // Check if the loader container is rendered correctly
    const loaderContainer = container.querySelector('.loaderContainer');
    expect(loaderContainer).toBeInTheDocument();

    // Check if the loader elements are rendered correctly
    const loaderElements = container.querySelectorAll('.lds-ring div');
    expect(loaderElements).toHaveLength(4);
  });
});
