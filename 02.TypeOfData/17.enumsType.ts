// ENUMS: colección de datos finita

// En JS
const ERROR_TYPES = {
  NOT_FOUND: 'not found',
  UNAUTHORIZED: 'unauthorized',
  FORBIDDEN: 'forbidden',
};

function mostrarMensaje(tipoDeError) {
  if (tipoDeError === ERROR_TYPES.NOT_FOUND) {
    console.log('No se encuentra el recurso');
  } else if (tipoDeError === ERROR_TYPES.UNAUTHORIZED) {
    console.log('No estás autorizado para acceder');
  } else if (tipoDeError === ERROR_TYPES.FORBIDDEN) {
    console.log('No tienes los permisos para acceder');
  } else {
    console.log('Tipo de error desconocido');
  }
}

// TS permite usar ENUMS

// enum ERROR_TYPES_TS {
//   NOT_FOUND,
//   UNAUTHORIZED,
//   FORBIDDEN,
// }

//! Esto generaría mucho código js innecesario

// "use strict";
// var ERROR_TYPES_TS;
// (function (ERROR_TYPES_TS) {
//     ERROR_TYPES_TS[ERROR_TYPES_TS["NOT_FOUND"] = 0] = "NOT_FOUND";
//     ERROR_TYPES_TS[ERROR_TYPES_TS["UNAUTHORIZED"] = 1] = "UNAUTHORIZED";
//     ERROR_TYPES_TS[ERROR_TYPES_TS["FORBIDDEN"] = 2] = "FORBIDDEN";
// })(ERROR_TYPES_TS || (ERROR_TYPES_TS = {}));
// function mostrarMensajeTS(tipoDeError) {
//     if (tipoDeError === ERROR_TYPES_TS.NOT_FOUND) {
//         console.log('No se encuentra el recurso');
//     }
//     else if (tipoDeError === ERROR_TYPES_TS.UNAUTHORIZED) {
//         console.log('No estás autorizado para acceder');
//     }
//     else if (tipoDeError === ERROR_TYPES_TS.FORBIDDEN) {
//         console.log('No tienes los permisos para acceder');
//     }
//     else {
//         console.log('Tipo de error desconocido');
//     }
// }


const enum ERROR_TYPES_TS {
  NOT_FOUND,
  UNAUTHORIZED,
  FORBIDDEN,
}

function mostrarMensajeTS(tipoDeError: ERROR_TYPES_TS) {
  if (tipoDeError === ERROR_TYPES_TS.NOT_FOUND) {
    console.log('No se encuentra el recurso');
  } else if (tipoDeError === ERROR_TYPES_TS.UNAUTHORIZED) {
    console.log('No estás autorizado para acceder');
  } else if (tipoDeError === ERROR_TYPES_TS.FORBIDDEN) {
    console.log('No tienes los permisos para acceder');
  } else {
    console.log('Tipo de error desconocido');
  }
}

//! Este código compilaría lo siguiente 

// "use strict";
// function mostrarMensajeTS(tipoDeError) {
//     if (tipoDeError === 0 /* ERROR_TYPES_TS.NOT_FOUND */) {
//         console.log('No se encuentra el recurso');
//     }
//     else if (tipoDeError === 1 /* ERROR_TYPES_TS.UNAUTHORIZED */) {
//         console.log('No estás autorizado para acceder');
//     }
//     else if (tipoDeError === 2 /* ERROR_TYPES_TS.FORBIDDEN */) {
//         console.log('No tienes los permisos para acceder');
//     }
//     else {
//         console.log('Tipo de error desconocido');
//     }
// }


//! ES IMPORTANTE USAR CONST ENUM SI VAMOS A UTILIZARLO DENTRO DE NUESTRA APLICACIÓN
//! EN CAMBIO SI SE VA A CONSUMIR FUERA DE NUESTRA APLICACIÓN DEBERÍAMOS UTILIZAR SIN 'CONST' AUNQUE ESTO GENERE MÁS CÓDIGO