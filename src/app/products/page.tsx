import Link from "next/link"

export const products = [
    { id: '1', name: 'Audifonos', description: 'Descripción del producto 1', price: 10.99 },
    { id: '2', name: 'Celular', description: 'Descripción del producto 2', price: 19.99 },
    { id: '3', name: 'Teclado', description: 'Descripción del producto 3', price: 5.99 },
    { id: '4', name: 'Mouse', description: 'Descripción del producto 4', price: 15.49 },
    { id: '5', name: 'USB', description: 'Descripción del producto 5', price: 7.99 },
]

export default function ProductsPage() {
    return (
        <div>
            <ul>
                {products.map((product) => 
                    <li key={product.id}>
                        <h2>{`Producto: ${product.name}`}</h2>
                        <p>Descripción: {`${product.description}`}</p>
                        <h1>{`Precio ${product.price}`}</h1>
                        <Link href={`/products/${product.id}`}>Ver detalle</Link>
                        <p>-------------------------------------------------</p>
                    </li>
                )}
            </ul>
        </div>
    )
}
