import React from 'react';

export default function Navbar () {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item has-dropdown is-hoverable">
              <a href="#" className="navbar-link">
                Clínica Doctor Cedano
              </a>
              <div className="navbar-dropdown">
                <a href="#" className="navbar-item">
                  Perfíl
                </a>
                <a href="#" className="navbar-item">
                  Configuración
                </a>
                <hr className="navbar-divider" />
                <a href="#" className="navbar-item">
                  Salir
                </a>
              </div>
            </div>
            <div className="nav-burger">
              <span className="burger">
                <i className="fas fa-bars"></i>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}