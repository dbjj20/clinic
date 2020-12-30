import React from 'react';
import { ReactSVG } from 'react-svg';

import Footer from '../layouts/footer';

export default function ThankYou () {
  return (
    <div className="columns is-flex-direction-column is-fullheight">
      <div className="column is-flex-grow-1">
        <div className="columns h-100 is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
          <div className="column is-3-desktop">
            <ReactSVG src="../assets/images/undraw_doctors_hwty.svg" className="w-f-full" alt="SVG Doctos" />
            <img src={ require('../assets/images/img-login.jpg') } alt="SVG Doctos" width="500" height="350" />
            <img src="../assets/images/img-login.jpg" alt="SVG Doctos" width="500" height="350" />
            
          </div>
          <div className="column is-8-desktop has-text-centered">
            <h3 className="title-thank">¡Gracias por registrarse!</h3>
            <h5 className="mb-3">Le estaremos enviado su información a los correos suministrados favor de revisar sus bandeja de entrada o de spam.</h5>
            <p>En caso de no haber recibido dicha información, favor de contactarnos, estaríamos encantados de ayudarle.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}