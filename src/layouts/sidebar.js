import React from 'react';

export default function Sidebar () {
  return (
    <>
      <aside className="column column-sidebar">
      <h3>Dashboard</h3>
      <hr className="divider is-inverted" />
      <nav className="nav-sidebar">
        <ul className="nav-sidebar-content">
          <li>
            <a className="sidebar-link is-active" href="/dashboard/index.html">
              <i className="fas fa-home fa-fw"></i> Dashboard
            </a>
          </li>
          <li>
            <a className="sidebar-link" href="/dashboard/dates/dates.html">
              <i className="far fa-calendar-alt fa-fw"></i> Citas
            </a>
          </li>
          <li>
            <a className="sidebar-link" href="./clinicHistory/clinic-history.html">
              <i className="fas fa-file-medical fa-fw"></i> Historial clínico
            </a>
          </li>
          <li>
            <a className="sidebar-link" href="./especiality/especiality.html">
              <i className="fas fa-notes-medical fa-fw"></i> Especialidades
            </a>
          </li>
          <li>
            <a className="sidebar-link" href="./doctors/doctors.html">
              <i className="fas fa-user-md fa-fw"></i> Doctores
            </a>
          </li>
          <li>
            <a className="sidebar-link" href="./users/users.html">
              <i className="fas fa-users fa-fw"></i> Usuarios
            </a>
          </li>
          <li>
            <a className="sidebar-link" href="/dashboard/history/history.html">
              <i className="fas fa-history fa-fw"></i> Historial
            </a>
          </li>
          <li>
            <a className="sidebar-link" href="./profile/profile.html">
              <i className="fas fa-cogs fa-fw"></i> Perfil
            </a>
          </li>
          <li>
            <a className="sidebar-link" href="#">
              <i className="fas fa-sign-out-alt fa-fw"></i> Salir
            </a>
          </li>
        </ul>
      </nav>
    </aside>
    </>
  )
}