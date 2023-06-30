import Link from 'next/link'

export default function Home() {
  return (
    <main >
      <div >
        <p>Hola</p>
        <Link href="/products"> Productos </Link>
      </div>
    </main>
  )
}
