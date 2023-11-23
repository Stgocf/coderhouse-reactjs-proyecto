const productos = [
    {id:"1", name:"prod1", desc:"desc prod1 example", stock:10},
    {id:"2",name:"prod2", desc:"desc prod2 example", stock: 5},
    {id:"3",name:"prod3", desc:"desc prod3 example", stock: 7},
  ]

  export const getProducts = (id = null) => {

    return new Promise( (resolve, reject)  => {
        if (productos.length > 0 ) {
            setTimeout( () => {
                if ( id != null ) {
                    const prod = productos.filter( (prod) => prod.id == id  ) 
                    resolve(prod)
                }else{
                    resolve(productos)
                }
            }, 2000)
        } else {
            reject("No hay productos")
        }
    })
  }