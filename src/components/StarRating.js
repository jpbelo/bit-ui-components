import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StarsContainer = styled.div`
  font-size: 80px;
  display: inline-block;
  pointer-events: auto;
  &:not(:hover) {
    ${({ keepVote, rating, myRate }) =>
      keepVote && myRate !== null
        ? `
      color: #fff000;
      span:nth-child(${myRate}) ~ span {
        color: #333;
      }
    `
        : `
      background: linear-gradient(90deg, #fff000 ${rating * 20}%, #333 ${rating * 20}%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    `}
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
      <StarsContainer {...this.props} myRate={this.state.myRate}>
        <Star onClick={() => this.setMyRating(1)} />
        <Star onClick={() => this.setMyRating(2)} />
        <Star onClick={() => this.setMyRating(3)} />
        <Star onClick={() => this.setMyRating(4)} />
        <Star onClick={() => this.setMyRating(5)} />
      </StarsContainer>
    )
  }
}

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
  keepVote: PropTypes.bool,
}

StarRating.defaultProps = {
  keepVote: false,
}

export default StarRating
