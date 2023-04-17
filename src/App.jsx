import Wrapper from './components/Wrapper/Wrapper'
import Header from './components/Header/Header'
import Form from './components/Form/Form'
import { GlobalStyle } from './styles/GlobalStyles'

function App() {
  return (
    <>
      <Wrapper>
        <Header/>
        <Form/>
      </Wrapper>
      <GlobalStyle />
    </>
  )
}

export default App