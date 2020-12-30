import React from 'react';

export default function Footer () {
  return (
    <>
      <footer className="main-footer">
        <div className="columns">
          <div className="column">
            <p className="copyroght">Freelance RD.</p>
          </div>
          <div className="column">
            <ul className="links-content">
              <li><a className="footer-link" href="#">Sobre nosotros</a></li>
              <li><a className="footer-link" href="#">Soporte</a></li>
              <li><a className="footer-link" href="#">Contacto</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}