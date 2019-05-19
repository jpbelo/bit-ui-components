import React from 'react'
import { storiesOf } from '@storybook/react'

import StarRating from '.'

storiesOf('StarRating')
  .add('keep rating', () => <StarRating rating={4} />)
  .add('keep my vote', () => <StarRating keepVote={true} rating={2.4} />)
  .add('star text', () => <StarRating starText={'A'} rating={1.3} />)
  .add('colored', () => <StarRating colorPrimary={'red'} colorSecondary={'blue'} rating={4.3} />)
