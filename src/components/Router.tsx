import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { History } from '../pages/History'
import { DefaultLayout } from '../layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}

//DefaultLayout para utilizar um layout padrão compartilhado entre todas as rotas
// Supodo que houvesse um outro layout padrão no caminho /admin
// utilizaria <Route path="/admin" element={<AdminLayout />}>
// e nesse caso, os path abaixo dessa rota ficariam path='dashboard'
// seria utilizado para a rota /admin/dashboard
