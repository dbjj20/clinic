import React from 'react';

export default function Login () {
  return (
    <div className="columns is-fullheight">
      <div className="column is-7-desktop img-login">
        
      </div>
      <div className="column is-5-desktop entry-form is-align-items-center is-flex">
        <h2 className="has-text-centered has-text-white w-f-100">Iniciar Sesión</h2>
        <form className="form w-100">
          <div className="field">
            <label htmlFor="mail" className="label">Correo</label>
            <div className="control">
              <input id="mail" type="email" className="input" placeholder="ejemplo@ejemplo.com" />
            </div>
          </div>
          <div className="field">
            <label htmlFor="pass" className="label">Contraseña</label>
            <div className="control">
              <input id="pass" type="password" className="input" placeholder="Escriba la contraseña" />
            </div>
          </div>
          <div className="field is-half">
            <div className="checkbox">
              <input id="remind" type="checkbox" className="checkbox" />
              <label htmlFor="remind" className="label">Recordar</label>
            </div>
          </div>
          <div className="field is-half">
            <a href="#">Olvidé mi contraseña</a>
          </div>
          <div className="field field-button">
            <button className="button is-primary is-fullwidth">Iniciar Sesión</button>
          </div>
          <hr className="divider" />
          <p>¿Quieres crear una cuenta? <a href="/register">Click Aquí</a>.</p>
        </form>
      </div>
    </div>
  )
}