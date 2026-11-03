import { useState } from 'react'


function App() {

  return (
    <>
      <nav className="navbar md:navbar-expand bg-1" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Instagram</a>
    <button className="btn-icon navbar-toggler" type="button" data-bs-toggle="drawer" data-bs-target="#navbarDarkDrawer" aria-controls="navbarDarkDrawer" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" aria-hidden="true"></span>
    </button>
    
        <form className="hstack gap-2 d-flex justify-content-end " >
          <button className="btn-solid  theme-secondary " type="submit">
            <a>Cadastrar-se</a>
          </button>
          <button className="btn-subtle theme-secondary" type="submit">
            <a>Login</a>
          </button>

        </form>
      </div>
   
 
</nav>
<div class="card">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h4 class="card-title">Special title treatment</h4>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn-solid theme-primary">Go somewhere</a>
  </div>
</div>
    </>
  )
}

export default App
