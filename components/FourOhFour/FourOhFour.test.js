import FourOhFour from './FourOhFour'
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom'

it('renders FourOhFour unchanged', () => {
  const tree = renderer.create(<FourOhFour />).toJSON()
  expect(tree).toMatchSnapshot()
})
