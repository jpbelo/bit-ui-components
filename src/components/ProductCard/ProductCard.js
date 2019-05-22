import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import 'sanitize.css'

const Container = styled.a`
  display: inline-block;
  width: 400px;
  border-radius: 14px;
  box-shadow: 0 0 23px #ccc;
  transition: box-shadow 0.3s ease-in-out;
  overflow: hidden;
  &:hover {
    box-shadow: 0 0 23px #aaa;
  }
  & > img {
    width: 100%;
  }
`

const DescriptionContainer = styled.div`
  width: 100%;
  padding: 20px;
`

class ProductCard extends Component {
  render() {
    const { name, price, currency, images, url } = this.props
    return (
      <Container href={url} target="_blank" rel="noopener">
        <img src={images.cover} alt={name} />
        <DescriptionContainer>
          <p>{name}</p>
          <p>
            {currency} {price}
          </p>
        </DescriptionContainer>
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
