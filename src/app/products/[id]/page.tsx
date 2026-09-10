import Link from "next/link"
import { notFound, redirect } from "next/navigation"
import { products } from "../page"

interface Props{
    params: Promise<{id:string}>;
}

export default async function({params} : Props){
    const {id} = await params
    const product = products.find((p) => p.id === id);

    if (!product) {
        redirect('/products') 
    }

    return(
        <>
            <h1>{`Estás dentro del producto ${product?.name}`}</h1>
            <h2>{`La descripción de este producto es ${product?.description} y su precio es ${product?.price}`}</h2>
            <Link href={`/products`}>return</Link>
        </>
    )
}