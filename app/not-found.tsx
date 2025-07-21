'use client'
import styled from 'styled-components'

/*---> Components <---*/
export default function NotFound() {
  return (
    <Wrapper>
      <Title>404</Title>
      <Subtitle>Page Not Found</Subtitle>
      <Message>Sorry, the page you are looking for does not exist.</Message>
      <HomeLink href='/'>Go Home</HomeLink>
    </Wrapper>
  )
}

/*---> Styles <---*/
const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #282825;
  color: #fff;
`

const Title = styled.h1`
  font-size: 64px;
  margin-bottom: 16px;
`

const Subtitle = styled.h2`
  font-size: 32px;
  margin-bottom: 24px;
`

const Message = styled.p`
  font-size: 18px;
  margin-bottom: 32px;
`

const HomeLink = styled.a`
  color: #0075aa;
  font-weight: 600;
  font-size: 18px;
  text-decoration: underline;
`
