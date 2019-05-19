import React from 'react'
import { storiesOf } from '@storybook/react'

import StarRating from '.'

storiesOf('StarRating')
  .add('keep myRate', () => <StarRating keepVote={true} rating={2.4} />)
  .add('keep rating', () => <StarRating rating={4} />)
