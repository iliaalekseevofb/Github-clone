import { Navigate, Routes, Route } from 'react-router-dom'
import { Navbar, Footer } from './components'
import { Overview, Repositories, Repository, User } from './pages'

const App = (): JSX.Element => {
  return (
    <main className="flex flex-col justify-between w-full min-h-screen bg-white dark:bg-gray-800">
      <div>
        <Navbar />
        <Routes>
          <Route path="/:user" element={<User />}>
            <Route index element={<Overview />} />
            <Route path="/:user/overview" index element={<Overview />}/>
            <Route path="/:user/repositories" element={<Repositories />}/>
          </Route>
          <Route path="/:user/:repository" element={<Repository />} />
          <Route path="*" element={<Navigate to="/iliaalekseevofb/overview" replace />} />
        </Routes>
      </div>
      <Footer />
    </main>
  )
}

export default App
