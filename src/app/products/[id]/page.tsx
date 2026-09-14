import { redirect } from "next/navigation";
import { products } from "../page";
import Link from "next/link";


interface Props{
    params: Promise<{id:string}>
}

export default async function productDetail({params} : Props){
    const {id} = await params;


    const product = products.find((p) => p.id===id)
    if (!product) {
        redirect('/products')
    }

    return(
        <section>
            <h1>Estás en la página del poducto {product.name}</h1>
            <p>{product.descripcion}</p>
            <Link href={'/products'}>Volver a productos</Link>
        </section>
    )

}