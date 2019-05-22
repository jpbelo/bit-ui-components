import { configure, addDecorator } from '@storybook/react'
import { jsxDecorator } from 'storybook-addon-jsx'
import centered from '@storybook/addon-centered'

const req = require.context('../src', true, /stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)

addDecorator(jsxDecorator)
addDecorator(centered)
