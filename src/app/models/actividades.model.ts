export interface  Actividades{
    id: number;
    titulo: string;
    descripcion: string;
    items: { nombre: string; completado: boolean }[];
   
    
    
}