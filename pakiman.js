class Pakiman
{
    constructor(n, v, a)
    {
        this.imagen = new Image();
        this.nombre = n;
        this.vida = v;
        this.ataque= a;
        this.tipo = "tierra";
        this.imagen.src = imagenes[this.nombre];
    }
    hablar()
    {
        alert(this.nombre);
    }
    mostrar()
    {
        document.write("<p>");
        document.body.appendChild(this.imagen);
        document.write("<strong>" + this.nombre + "</script><br />");
        document.write("Vida: " + this.vida + "<br />");
        document.write("Ataque: " + this.ataque + "<hr />");
        document.write("</p>");
    }
}