import React from "react";
import logo from './assets/gr.png';
import build1 from './assets/building1.jpg';
import build2 from './assets/building2.jfif';
import build3 from './assets/building3.jpg';
import fac1 from './assets/fac1.jpg';
import fac2 from './assets/fac2.jpg';
import fac3 from './assets/fac3.webp';
import './App.css';

function App(){
    return(
        <>
<div className="bg">
<nav className="bg-neutral-primary fixed w-full z-20 top-0 inset-s-0">
  <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse" style={{marginLeft:'-270px'}}>
        <img src={logo} className="h-7" alt="Flowbite Logo" />
        <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">Eduford</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/></svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary" style={{marginRight:'-200px'}}>
        <li>
          <a href="#" className="block py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0 home" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Courses</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Blog</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

{/* home content */}
<div className="text-center content">
   <h1 className="h1">World's Biggest University</h1>
   <br />
   <p>Empowering minds, shaping the future Where knowledge meets opportunity Excellence in education, innovation, and research <br /> A global hub for learning and leadership.</p>
   <br /> <br />
<button>Visit us to Know More</button>
</div>

</div>
{/* Courses Section */}
<div className="courses">
<section class="text-gray-600 body-font">
  <br /><br /><br />
  <h1 className="h2">Courses We Offer</h1>
  <p className="p1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, in.</p>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/3">
        <div className="h-full bg-red-50 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative cards">
          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Intermediate</h1>
          <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat deleniti repellendus magnam voluptate pariatur ipsum, praesentium ipsa dolores quibusdam voluptates.</p>
          
          
        </div>
      </div>
      <div className="p-4 lg:w-1/3">
        <div className="h-full bg-red-50 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative cards">
          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Degree</h1>
          <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus aut est vero qui, sequi officiis. Sunt possimus tempore nemo eos!
          </p>
          
          
        </div>
      </div>
      <div className="p-4 lg:w-1/3">
        <div className="h-full bg-red-50 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative cards">
         
          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Post Graduation</h1>
          <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoatl Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore quis ipsam tempora at quidem fugit quia nesciunt, eius libero iusto</p>
          
          
        </div>
      </div>
    </div>
  </div>
</section>
</div>

{/* Global Section */}

<div className="global">
  
   <h1 className="h2">Our Global campus</h1>
  <p className="p1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, in.</p>
  <br /><br /><br />

<div className="grid grid-cols-2 md:grid-cols-3 gap-4 build">
    <div>
        <img className="h-auto max-w-full rounded-base" src={build1} width={500} style={{height:'700px'}}/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-base" src={build2} width={500} style={{height:'700px'}}/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-base" src={build3} width={500} style={{height:'700px'}}/>
    </div>
    
</div>

</div>

{/* facilities section */}

<section class="text-gray-600 body-font">
  <br /><br /><br />
  <h1 className="h2">Our Facilities</h1>
  <p className="p1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, in.</p>
  
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3">
        <div class="h-full rounded-lg overflow-hidden">
          <img class="lg:h-[300px] md:h-36 w-full object-cover object-center" src={fac2} alt="blog"/>
          <div class="p-6">
           
            <h1 class="title-font text-2xl font-medium text-gray-900 mb-3">World Class Library</h1>
            <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full rounded-lg overflow-hidden">
          <img class="lg:h-[300px] md:h-36 w-full object-cover object-center" src={fac3} alt="blog"/>
          <div class="p-6">
            
            <h1 class="title-font text-2xl font-medium text-gray-900 mb-3">Largest Play Ground</h1>
            <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full rounded-lg overflow-hidden">
          <img className="lg:h-[300px] md:h-36 w-full object-cover object-center" src={fac1} alt="blog"/>
          <div className="p-6">
            <h1 className="title-font text-2xl font-medium text-gray-900 mb-3">Tasty and Healthy Food</h1>
            <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


        </>
    )
}
export default App;