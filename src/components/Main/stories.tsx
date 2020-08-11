import { withKnobs, text } from '@storybook/addon-knobs'

import Main from '.'

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs]
}

export const Basic = () => (
  <Main
    title={text('title', 'React avançado')}
    description={text(
      'description',
      'Typescript, ReactJS, NextJS e Styled Components'
    )}
  />
)
