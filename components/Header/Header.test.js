import Header from './Header'
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom'

it('renders Header unchanged', () => {
  const tree = renderer.create(<Header />).toJSON()
  expect(tree).toMatchSnapshot()
})
