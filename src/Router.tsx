import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/index.tsx'
import { History } from './pages/History/index.tsx'
import { UseEffect } from './pages/UseEffect/index.tsx'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/useEffect" element={<UseEffect />} />
      </Route>
    </Routes>
  )
}
