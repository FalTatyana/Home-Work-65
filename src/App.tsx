import { Route, Routes, useParams } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import ContentPage from './components/header/ContentPage/ContentPage'

function App() {



  return (
    <div>
      <Header />
      <Routes>
        {/* <Route path={`/${id}`} element={
          <ContentPage
            title={id.title}
            content={id.content}
          />}
        /> */}
      </Routes>
    </div>

  )
}

export default App
