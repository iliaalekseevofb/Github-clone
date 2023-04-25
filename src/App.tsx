import { Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import { Home, User, Overview, Repositories, Repository } from './pages';

function App () {
  return (
    <main className="bg-white dark:bg-gray-800">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:user" element={<User />}>
          <Route index element={<Overview />} />
          <Route path="/:user/overview" index element={<Overview />}/>
          <Route path="/:user/repositories" element={<Repositories />}/>
        </Route>
        <Route path="/:user/:repository" element={<Repository />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App
