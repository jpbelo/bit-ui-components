import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import 'sanitize.css'

const StarsContainer = styled.div`
  font-size: 80px;
  display: inline-block;
  pointer-events: auto;
  & > span::before {
    content: "${props => props.starText}";
  }
  &:not(:hover) {
    ${({ keepVote, rating, myRate, colorPrimary, colorSecondary }) =>
      keepVote && myRate !== null
        ? `
      color: ${colorPrimary};
      span:nth-child(${myRate}) ~ span {
        color: ${colorSecondary};
      }
    `
        : `
      background: linear-gradient(90deg, ${colorPrimary} ${rating * 20}%, ${colorSecondary} ${rating * 20}%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    `}
  }
  &:hover {
    color: ${props => props.colorPrimary};
    span:hover ~ span {
      color: ${props => props.colorSecondary};
    }
  }
`

const Star = styled.span`
  line-height: 1;
  border: none;
  outline: none;
  font-size: 80px;
  cursor: pointer;
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
  starText: PropTypes.string,
  colorPrimary: PropTypes.string,
  colorSecondary: PropTypes.string,
}

StarRating.defaultProps = {
  keepVote: false,
  starText: '★',
  colorPrimary: '#fff000',
  colorSecondary: '#333',
}

export default StarRating
