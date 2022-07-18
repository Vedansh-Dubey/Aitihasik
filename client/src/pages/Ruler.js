import React, { Component } from 'react'
import styled from 'styled-components'
export const Ruler = () => {
  return (
    <Wrapper>
        <div class = 'info'>
            <p>
                <h1>Chatrapati Shivaji Maharaj</h1>
            </p>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.div
`
.info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2%;
    margin-bottom: 10%;  
}
`