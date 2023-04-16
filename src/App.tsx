import { Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import { User, Overview, Repositories, Repository } from './pages';

function App () {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/:user" element={<User />}>
          <Route index element={<Overview />} />
          <Route path="/:user/overview" element={<Overview />}/>
          <Route path="/:user/repositories" element={<Repositories />}/>
        </Route>
        <Route path="/:user/:repository" element={<Repository />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
