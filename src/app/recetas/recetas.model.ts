export class recetas {
  public nombre: string
  public descripcion: string
  public imagenesPath: string

  constructor (name: string, desc: string, imagen: string) {
    this.nombre = name
    this.descripcion = desc
    this.imagenesPath = imagen
  }
}
