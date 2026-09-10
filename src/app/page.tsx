import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
          <h1>Bienvenido al catalogo</h1>
          <Link href= "/products"> Ver catalogo </Link>
      </div>
      
    </div>
  );
}
