import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StarsContainer = styled.div`
  font-size: 80px;
  display: inline-block;
  pointer-events: auto;
  &:not(:hover) {
    background: ${props => `linear-gradient(90deg, #fff000 ${props.rating * 20}%, #333 ${props.rating * 20}%);`};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  &:hover {
    color: #fff000;
    span:hover ~ span {
      color: #333;
    }
  }
`

const Star = styled.span`
  line-height: 1;
  border: none;
  outline: none;
  font-size: 80px;
  cursor: pointer;
  &::before {
    content: '★';
  }
`

class StarRating extends Component {
  constructor(props) {
    super(props)
    this.state = {
      myRate: null,
    }
    this.setMyRating = this.setMyRating.bind(this)
  }

  setMyRating(value) {
    this.setState({
      myRate: value,
    })
  }

  render() {
    return (
      <Fragment>
        <StarsContainer {...this.props}>
          <Star onClick={() => this.setMyRating(1)} />
          <Star onClick={() => this.setMyRating(2)} />
          <Star onClick={() => this.setMyRating(3)} />
          <Star onClick={() => this.setMyRating(4)} />
          <Star onClick={() => this.setMyRating(5)} />
        </StarsContainer>
        <p>my rating: {this.state.myRate ? this.state.myRate : 'not set'}</p>
      </Fragment>
    )
  }
}

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
}

export default StarRating
