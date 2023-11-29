export class Usuario {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    idRol: number;
    rol?: number;
    creadoEn: Date;
    actualizadoEn: Date;

    constructor(
        id: number,
        nombre: string,
        apellido: string,
        email: string,
        password: string,
        idRol: number,
        rol?: number,
        creadoEn: Date = new Date(),
        actualizadoEn: Date = new Date()
    ) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
        this.idRol = idRol;
        this.rol = rol;
        this.creadoEn = creadoEn;
        this.actualizadoEn = actualizadoEn;
    }
}
