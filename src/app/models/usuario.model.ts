import { Rol } from "./rol.model";

export interface Usuario {
    id: number;
    nombre: string;
    apellido: string;
    contraseña: string;
    nombre_usuario: string;
    idRol: number;
    rol?: Rol; 
    creadoEn: Date;
    actualizadoEn: Date;
}