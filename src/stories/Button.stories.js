import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from '../components/Button'

storiesOf('Button')
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with emoji', () => <Button onClick={action('clicked')}>🚿 🚿 🐈 🐈</Button>)
