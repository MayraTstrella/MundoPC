class DispositivoEntrada {

    constructor(tipoEntrada, marca) {
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada() {
        return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada) {
        this._tipoEntrada = tipoEntrada;
    }

    get marca() {
        return this._tipoEntrada;
    }

    set marca( marca) {
        this._marca = marca;
    }

    toString() {
        return `${this._tipoEntrada} ${this._tipoEntrada}`;
    }
}

class Raton extends DispositivoEntrada{

    static contadorRaton = 0;
    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRaton;
    }

    get idRaton() {
        return this._idRaton;
    }

    toString() {
        return ` Id: ${this._idRaton} Tipo de Entrada: ${this._tipoEntrada} Marca: ${this._marca}`;
    }
}

class Teclado extends DispositivoEntrada {

    static contadorTeclado = 0;
    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclado;
    }

    get idTeclado() {
        return this._idTeclado;
    }

    toString() {
        return ` Id: ${this._idTeclado} Tipo de Entrada: ${this._tipoEntrada} Marca: ${this._marca}`;
    }
}

class Monitor {

    static contadorMonitor = 0;
    constructor(marca, tamaño) {
        this._idMonitor = ++Monitor.contadorMonitor;
        this._marca = marca;
        this._tamaño = tamaño;
    }

    get idMonitor() {
        return this._idMonitor;
    }

    get marca() {
        return this._marca;
    }

    set marca(marca) {
        this._marca = marca;
    }

    get tamaño() {
        return this._tamaño;
    }

    set tamaño(tamaño) {
        this._tamaño = tamaño;
    }

    toString() {
        return ` Id: ${this._idMonitor} Marca: ${this._marca} Tamaño: ${this._tamaño}`;
    }
}

class Computadora {

    static contadorComp = 0;
    constructor(nombre, monitor, teclado, raton) {
        this._idComputadora = ++Computadora.contadorComp;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }

    get idComputadora() {
        return this._idComputadora;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    toString() {
    return `Producto Id: ${this._idComputadora} Nombre: ${this._nombre} \n Monitor: ${this._monitor} \n Mouse: ${this._raton} \n Teclado: ${this._teclado}`;
    }
}


class Orden {

    static contadorOrden = 0;
    constructor() {
        this._idOrden = ++Orden.contadorOrden;
        this._computadoras = [];
    }

    get idOrden() {
        return this._idOrden;
    }

    agregarComputadora(computadora) {
        this._computadoras.push(computadora);
    }

    mostrarOrden() {
        let ordenComputadoras = '';
        for (let computadora of this._computadoras) {
            ordenComputadoras += '\n{' + computadora.toString() + '} ';
        }
      
        console.log(`Orden: ${this._idOrden}, Productos: ${ordenComputadoras} `);
    }
}


