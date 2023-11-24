

alert("Hola, bienvenido a control de stock de Libreria Milan!")
    
for (let i=1 ; i<=4 ; i++){

    const Producto = function (nombre){
        this.nombre = nombre
        
    }
    let producto1 = new Producto("regla")
    let producto2 = new Producto("cuaderno")
    let producto3 = new Producto("boligoma")
    let producto4 = new Producto("lapicera")
    let producto5 = new Producto("cartuchera")
    let producto6 = new Producto("tempera")
    let producto7 = new Producto("boligrafo")
    let producto8 = new Producto("hoja")
    let producto9 = new Producto("mochila")
    

    let lista = [producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8,producto9]

    function filtrarProductos(){
        let palabraClave = prompt("Ingresa el producto que estas buscando. Siempre en singular").toLowerCase()
        let resultado = lista.filter((x)=>x.nombre.toLowerCase().includes(palabraClave))

        if(resultado.length >0){
            alert("Todavia hay en stock " + palabraClave + "s")
            prompt ("quieres seguir revisando?")
            
        }else{
            alert ("No se encontro " + palabraClave + " en el stock")
            prompt ("quieres seguir revisando?")
        }
    }

    filtrarProductos()

    


}








