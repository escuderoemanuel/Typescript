let mesagge: string = 'Estoy en TypeScript';
console.log(mesagge);

//HELICE
class Helice {
  private numHelices: number = 1;
  public constructor(pHelice: number) {
    this.numHelices = pHelice;
  }
  public ToString() {
    let mensaje = 'Hélice compuesta de: ';
    if (this.numHelices) {
      mensaje += ' Hélice Frontal.';
    }
    return mensaje;
  }
}

//TREN ATERRIZAJE
class TrenDeAterrizaje {
  private trenAterrizaje: boolean = true;
  private numNeumaticos: number = 3;
  private numAmortiguadores: number = 3;
  public constructor(
    pTrenAterrizaje: boolean,
    pNumNeumaticos: number,
    pNumAmortiguadores: number
  ) {
    this.trenAterrizaje = pTrenAterrizaje;
    this.numNeumaticos = pNumNeumaticos;
    this.numAmortiguadores = pNumAmortiguadores;
  }
  public ToString() {
    let mensaje = 'Tren de Aterrizaje compuesto de: ';
    if (this.numAmortiguadores) {
      mensaje += ' Amortiguadores';
    }
    if (this.numNeumaticos) {
      mensaje += ' Neumáticos.';
    }
    return mensaje;
  }
}

//ALAS
class Alas {
  private alas: boolean = true;
  private numAlasFrontales: number = 2;
  private numAlasDeCola: number = 3;

  public constructor(
    pAlas: boolean,
    pNumAlasFrontales: number,
    pNumAlasDeCola: number
  ) {
    this.alas = pAlas;
    this.numAlasFrontales = pNumAlasFrontales;
    this.numAlasDeCola = pNumAlasDeCola;
  }
  public ToString() {
    let mensaje = 'Alas compuestas de: ';
    if (this.numAlasFrontales) {
      mensaje += ' Alas Frontales, ';
    }
    if (this.numAlasDeCola) {
      mensaje += ' Alas de Cola.';
    }
    return mensaje;
  }
}

//TURBINA
class Turbina {
  private numTurbinas: number = 0;
  public constructor(n: number) {
    this.numTurbinas = n;
  }
  public ToString() {
    return this.numTurbinas + ' Turbina/s';
  }
}

//CUBIERTA
class Cubierta {
  private cabinaTripulacion: boolean = false;
  private cabinaVuelo: boolean = false;
  private sistemaEmergencia: boolean = false;
  private numTanquesCombustible: number = 0;
  private numPuertasSalidas: number = 0;

  public constructor(
    pCabinaTripulacion: boolean,
    pCabinaVuelo: boolean,
    pSistemaEmergencia: boolean,
    pTanquesCombustible: number,
    pPuertasSalidas: number
  ) {
    this.cabinaTripulacion = pCabinaTripulacion;
    this.cabinaVuelo = pCabinaVuelo;
    this.sistemaEmergencia = pSistemaEmergencia;
    this.numTanquesCombustible = pTanquesCombustible;
    this.numPuertasSalidas = pPuertasSalidas;
  }

  public ToString() {
    let mensaje = 'Cubierta compuesta de: ';
    if (this.cabinaVuelo) {
      mensaje += ' Cubierta de Vuelo';
    }
    if (this.cabinaTripulacion) {
      mensaje += ' Cubierta de Tripulación, ';
    }
    if (this.sistemaEmergencia) {
      mensaje += ' Sistema de Emergencia, ';
    }
    mensaje += this.numTanquesCombustible + ' Tanques de Combustible, ';
    mensaje += this.numPuertasSalidas + ' Puertas de Salida.';
    return mensaje;
  }
}

//AEROPLANO
class Aeroplano {
  private helice: Helice;
  private trenAterrizaje: TrenDeAterrizaje;
  private alas: Alas;
  private cubierta: Cubierta;

  constructor(
    pHelice: Helice,
    pTrenDeAterrizaje: TrenDeAterrizaje,
    pAlas: Alas,
    pCubierta: Cubierta
  ) {
    this.helice = pHelice;
    this.trenAterrizaje = pTrenDeAterrizaje;
    this.alas = pAlas;
    this.cubierta = pCubierta;
  }
  public ToString() {
    let mensaje = 'Aeroplano compuesto por: ';
    mensaje += this.helice.ToString();
    mensaje += this.alas.ToString();
    mensaje += this.trenAterrizaje.ToString();
    mensaje += this.cubierta.ToString();
    // console.log(mensaje);
    return mensaje;
  }
}
console.log('FIN');
