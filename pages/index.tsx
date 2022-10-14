import type { NextPage } from 'next'
import styled from '@emotion/styled';


const PageComplete = styled.div `
  background-image: url('/images/background.png');
  background-size: cover;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`

const TitlePage = styled.h1 `
  margin: 0;
  color: #f8f8f8;
  font-size: 2.2em;
`

const SubtitlePage = styled.h2 `
  color: #6bd4cd;
  font-weight: 400;
`

const GroupH3 = styled.h3 `
  margin: 0;
  color: #eae6e6;
  font-weight: 200;
`

const Home: NextPage = () => {
  return (
      <PageComplete>
          <TitlePage>Executando React com Next.JS</TitlePage>
          <SubtitlePage>Site criado em TypeScript publicado na Vercel.</SubtitlePage>
          <GroupH3>For Group: Andressa Helena, Daylane Carvalho, Gabriel Henrique, Inglide, Priscilla Correa Delfino</GroupH3>
      </PageComplete>
  )
}

export default Home
