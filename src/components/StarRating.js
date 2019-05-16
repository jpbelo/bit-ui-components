import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	border-radius: 8px;
	color: #fff;
	background: mediumvioletred;
	padding: 8px 15px;
	border: none;
	outline: none;
`

function StarRating(props) {
	return <Container {...props}>{props.children}</Container>
}

export default StarRating
