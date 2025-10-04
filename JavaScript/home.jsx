import React from 'react'
import {Link,Routes,Route} from 'react-router-dom'
import About from './About'
export default function Routing(){
    function Home(){return(<h2>Home Component</h2>)}
    function About(){return(<h2>About Component</h2>)}
     function Contact(){return(<h2>Contact Component</h2>)}
    return(
        <div>
            <h2>Home Page</h2>
           <nav>
  <link to="/">Home</link>|{" "}
  <link to="/about">About</link>|{" "}
  <link to="/contact">Contact</link>
</nav>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/" element={<about/>}/>
<Route path="/" element={<contact/>}/>
</Routes>

        </div>
    )
}