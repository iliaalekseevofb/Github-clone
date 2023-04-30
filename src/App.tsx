import { Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import { Home, Overview, Repositories, Repository, Stars, User } from './pages';

function App () {
  return (
    <main className="flex flex-col justify-between w-full min-h-screen bg-white dark:bg-gray-800">
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:user" element={<User />}>
            <Route index element={<Overview />} />
            <Route path="/:user/overview" index element={<Overview />}/>
            <Route path="/:user/repositories" element={<Repositories />}/>
            <Route path="/:user/stars" element={<Stars />}/>
          </Route>
          <Route path="/:user/:repository" element={<Repository />} />
        </Routes>
      </div>
      <Footer />
    </main>
  )
}

export default App
