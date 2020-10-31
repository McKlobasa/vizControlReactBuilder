import React from 'react'
import Styled from 'style-components'


const Button = styled.button`

`

export default commandButton (props) {
  return (
    <Button onClick={() => {
      fetch(`http://localhost:5678/sendcommand/${props.command}`)
    }}>
      {props.text}
    </Button>
  )
}
