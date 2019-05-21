import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.a`
  display: inline-block;
  width: 400px;
  padding: 20px;
  border: 1px solid #333;
  &:hover {
    border: 1px solid #999;
  }
  & > img {
    width: 100%;
  }
`

class ProductCard extends Component {
  render() {
    const { name, price, currency, images, url } = this.props
    return (
      <Container href={url} target="_blank" rel="noopener">
        <img src={images.cover} alt={name} />
        <p>{name}</p>
        <p>
          {currency} {price}
        </p>
      </Container>
    )
  }
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  currency: PropTypes.string,
  images: PropTypes.shape({
    cover: PropTypes.string,
  }),
  url: PropTypes.string.isRequired,
}

ProductCard.defaultProps = {
  currency: '€',
  images: {
    cover: '',
  },
}

export default ProductCard
