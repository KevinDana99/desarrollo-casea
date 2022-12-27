import React from 'react'
import { Text } from 'react-native-elements'
import { Container, StyledText } from './styled'


const PrimaryButton = ({title} : {title: string}) => {
  return (
<Container>
<StyledText>{title}</StyledText>
</Container>
  )
}

export default PrimaryButton