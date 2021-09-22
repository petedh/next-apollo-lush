import Footer from './Footer'
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom'

it('renders Footer unchanged', () => {
  const tree = renderer.create(<Footer />).toJSON()
  expect(tree).toMatchSnapshot()
})
