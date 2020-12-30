import React from 'react';

export default function Register () {
  return (
    <div className="columns is-fullheight">
    <div className="column is-7-desktop img-register">
    </div>
    <div className="column is-5-desktop entry-form is-align-items-center is-flex">
      <h2 className="has-text-centered has-text-white w-f-100">Registrarse</h2>
      <form className="form w-100">
        <div className="field">
          <label htmlFor="name-comp" className="label">Nombre de la empresa</label>
          <div className="control">
            <input id="name-comp" type="text" className="input" placeholder="ejemplo@ejemplo.com" />
          </div>
        </div>
        <div className="field">
          <label htmlFor="mail-comp" className="label">Correo de la empresa</label>
          <div className="control">
            <input id="mail-comp" type="email" className="input" placeholder="ejemplo@ejemplo.com" />
          </div>
        </div>
        <div className="field">
          <label htmlFor="name-gen" className="label">Nombre del gerente</label>
          <div className="control">
            <input id="name-gen" type="text" className="input" placeholder="ejemplo@ejemplo.com" />
          </div>
        </div>
        <div className="field">
          <label htmlFor="mail-gen" className="label">Correo del gerente</label>
          <div className="control">
            <input id="mail-gen" type="email" className="input" placeholder="ejemplo@ejemplo.com" />
          </div>
        </div>
        <div className="field field-button">
          <button className="button is-primary is-fullwidth">Registrarse</button>
        </div>
        <hr className="divider" />
        <p><a href="/login">Ya tengo mi cuenta</a>.</p>
      </form>
    </div>
  </div>
  )
}