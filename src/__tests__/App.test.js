import renderer from 'react-test-renderer';
import App from '../App';
it('renders correctly', () => {
  const tree = renderer
    .create(<App></App>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});