

import { Suspense } from 'react';
import './App.css'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Technologies from './components/technologies/Technologies';
import type ITechnology from './types/type';
import Footer from './components/Footer';


const technologieFetch = async (): Promise<ITechnology[]> => {
  const response = await fetch('/public/technologies.json');
  const data = await response.json()
  return data;
}

function App() {

  
  const technologiePromise = technologieFetch();

  return (
    <div>
      <Nav></Nav>
      <Hero></Hero>
      <Suspense fallback={<p>Loading...</p>}>

      <Technologies technologiePromise={technologiePromise}></Technologies>
      </Suspense>
      <Footer></Footer>
    </div>
  )
}

export default App
