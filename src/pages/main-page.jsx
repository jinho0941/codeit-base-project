import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Button = styled.button`
  margin: 10px;
  padding: 8px 16px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`

const MainPage = () => {
  return (
    <CenteredContainer>
      <Container>
        <div>Main page</div>
        <Link to='/apiTest'>
          <Button>ApiTestPage</Button>
        </Link>
        <Link to='/'>
          <Button>MainPage</Button>
        </Link>
        <Link to='/post/:postId/answer'>
          <Button>AnswerPage</Button>
        </Link>
        <Link to='/post/:postId'>
          <Button>PostIdPage</Button>
        </Link>
        <Link to='/list'>
          <Button>ListPage</Button>
        </Link>
      </Container>
    </CenteredContainer>
  )
}

export default MainPage
