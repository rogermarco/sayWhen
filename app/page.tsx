import Nav from './ui/nav';
import Button from './ui/button';

export default function Home() {
  return (
    <main>
      <Nav />
      <h1 className="text-green-500 text-7xl text-center h-96 pt-32 w-1/2 m-auto mt-20 border-4 border-indigo-500">Logo</h1>
      <h2 className="text-blue-500 text-2xl text-center py-10">Organise your mates. Get on with the important stuff.</h2>
      <div className='flex space-x-4 justify-center'>
        <Button />
        <Button />
      </div>
    </main>
  )
}