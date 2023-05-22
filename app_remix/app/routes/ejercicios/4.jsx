/* Ejercicio 4: Filtrar una lista de elementos
- Objetivo: Filtrar una lista de elementos en función de un criterio específico utilizando React.
- Instrucciones:
- Crea un componente Product que acepte una prop product y muestre el nombre del producto
dentro de un elemento <li>.
- Crea un componente ProductList que reciba un array de productos como prop products. Utiliza
la función .map() para generar un array de componentes Product a partir del array de
productos.
- Añade un input de tipo "text" y un botón "Filtrar" en el componente ProductList. Cuando el
usuario escriba un texto en el input y presione el botón "Filtrar", la lista de productos debe
actualizarse para mostrar solo aquellos productos cuyo nombre incluya el texto ingresado.
- Asegúrate de asignar una key única a cada componente Product dentro del componente
ProductList.
- Renderiza el componente ProductList en tu aplicación y proporciona un array de productos de
ejemplo.
*/

    //SOLUCIÓN

import {useState} from "react";

//no es necesario tener el array dentro del componente a renderizar ya que es estático.
const productsArray = [ //lista de productos
        {id:1, nombre:"Plátano"},
        {id:2, nombre:"Manzana"},
        {id:3, nombre:"Pera"}
    ]

export default function Ejercicio4() {
    //primero queremos almacenar lo que el usuario escriba:
    const [filtro, setFiltro] = useState(""); 

    //queremos mostrar los productos cuyo nombre escriba el usuario: filtrar
    const productosFiltrados = productsArray.filter ((product) => //filter construye un array nuevo con la condición que se establece en la función...
        product.nombre.toLowerCase().includes(filtro.toLowerCase()) //la cuál es .includes -> si nombre incluye lo que esta dentro de filtro
        //está función nos devuelve true o false dependiendo si cumplen y según eso los añade en el array
        //.toLowerCase() pasa el nombre y el filtro en mínuscula para que eso no intervenga al filtrar.
    ); 

  return (
    <div>
        <ul>
            <p>{filtro}</p> {/* //pintamos en el html el filtro para asegurarnos de que se actualiza */}

            {/* //creamos un input para filtrar: */}
            <input 
            type="text" 
            placeholder="Buscar" 
            onInput={(event) => {
                setFiltro(event.target.value) //target == referencia al elemento html sobre el que ocurre el evento // value == sacamos el valor de ese elemento
            }}/>
        </ul>

        {/* renderizamos lo siguiente: 
        si productosFiltrados es mayor que 0 se muestran los productos filtrados, si no, se muestra la lista entera de productos */}
        <ProductList products = {filtro.length > 0 ? productosFiltrados : productsArray} /> 
    </div>
  );
}

function Product({ nombre }) { // creamos componente product con props= el nombre del producto
    return (
        <div>
            <ul>
            <li>El nombre del producto es: {nombre}</li>
            </ul>
        </div>
    )
}

function ProductList({ products }) { //creamos componente lista de productos que recibe un array de props=productos
    return (
    <div>
    {products.map ((product) => (//devuelve un array con los elementos que devuelva la función que le pasemos
        <Product key={product.id} nombre={product.nombre}/>
            ))}
    </div>
    )
}
