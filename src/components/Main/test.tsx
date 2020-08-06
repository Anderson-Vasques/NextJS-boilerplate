import { screen, render } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('Should render a heading', () => {
    const { container } = render(<Main />)

    expect(screen.getByRole('heading', { name: /foobar/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
