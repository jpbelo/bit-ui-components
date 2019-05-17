import React from 'react'
import { storiesOf } from '@storybook/react'

import StarRating from '../components/StarRating'

storiesOf('StarRating')
  .add('2.4', () => <StarRating rating={2.4} />)
  .add('4', () => <StarRating rating={4} />)
