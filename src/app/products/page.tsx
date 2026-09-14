import Link from "next/link";

export const products = [
  { id: "1", name: "Celular", descripcion: "Un celu pa llamar" },
  { id: "2", name: "Cargador", descripcion: "Un cargador pa cargar" },
  { id: "3", name: "audifonos", descripcion: "Unos audífonos pa escuchar" },
];

export default function productsPage() {
  return (
    <section>
      <Link href={"/"} className="inline-block my-5 bg-blue-600 px-2 py-2 rounded">Echa pa tras</Link>
      <h1 className="gap-y-8">Lista de productos</h1>
      <section className="flex flex-row gap-4">
        {products.map((p) => (
          <article key={p.id}>
            <h2>Nombre: {p.name}</h2>
            <p>Descripción: {p.descripcion}</p>
            <Link href={`products/${p.id}`}>Ver detalles</Link>
          </article>
        ))}
      </section>
    </section>
  );
}
