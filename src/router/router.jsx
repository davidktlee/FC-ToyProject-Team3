import React from 'react'
import { Route, Routes } from 'react-router-dom'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<ViewUserArea />} />
      <Route path="/signin" element={<ViewAllArea />} />
    </Routes>
  )
}

export default Router
