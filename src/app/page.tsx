import Link from 'next/link'

export default function Home() {
  return (
    <div>
      
      <div className='prose'>
          <h1>Bienvenido al catalogo</h1>
          <Link href= "/products"> Ver catalogo </Link>
      </div>
      
    </div>
  );
}
