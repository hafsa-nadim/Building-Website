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
<nav
   class="flex py-2 px-4 md:px-8 min-h-[68px] relative z-20"
   aria-label="Main navigation">
   <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-4 w-full">
      <div className="flex-1 flex">
         <a href="#"
            className="min-w-9 inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded">
            
            <img src={logo} alt="readymadeui logo" className="h-9 w-auto icon" /><span className="text-white font-bold logo">EduFord</span>

         </a>
      </div>

      <div id="collapseMenu" tabindex="-1"
         class="hidden lg:block max-lg:bg-white dark:max-lg:bg-neutral-900 max-lg:border-l max-lg:border-slate-300 dark:max-lg:border-neutral-700 max-lg:w-1/2 max-lg:fixed max-lg:top-0 max-lg:right-0 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto max-sm:w-full z-50 outline-none">

         <div
            className="py-2 px-4 flex justify-between items-center border-b border-slate-300 sticky top-0 bg-white dark:border-neutral-700 dark:bg-neutral-900 lg:hidden max-lg:min-h-[68px]">
            <a href="#"
               className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded">
               <span className="sr-only">Your Company</span>
               <img src="https://readymadeui.com/logo-alt.svg" alt="readymadeui logo" className="h-9 w-auto" />
            </a>
            <button type="button" aria-controls="collapseMenu" id="toggleClose"
               className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded">
               <span className="sr-only">Close main menu</span>
               <svg xmlns="http://www.w3.org/2000/svg" className="size-4 fill-slate-900 dark:fill-slate-50"
                  aria-hidden="true" viewBox="0 0 329.269 329">
                  <path
                     d="M194.8 164.77 323.013 36.555c8.343-8.34 8.343-21.825 0-30.164-8.34-8.34-21.825-8.34-30.164 0L164.633 134.605 36.422 6.391c-8.344-8.34-21.824-8.34-30.164 0-8.344 8.34-8.344 21.824 0 30.164l128.21 128.215L6.259 292.984c-8.344 8.34-8.344 21.825 0 30.164a21.27 21.27 0 0 0 15.082 6.25c5.46 0 10.922-2.09 15.082-6.25l128.21-128.214 128.216 128.214a21.27 21.27 0 0 0 15.082 6.25c5.46 0 10.922-2.09 15.082-6.25 8.343-8.34 8.343-21.824 0-30.164zm0 0"
                     data-original="#000000" />
               </svg>
            </button>
         </div>

         <ul className="flex flex-col gap-8 font-semibold text-sm text-slate-900 dark:text-slate-50 lg:flex-row max-lg:p-6">
            <li>
               <a href="#"
                  className="hover:text-red-700 dark:hover:text-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded"
                  aria-current="page">Home</a>
            </li>
            <li>
               <a href="#"
                  className="hover:text-red-700 dark:hover:text-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded">Features</a>
            </li>
            <li>
               <a href="#"
                  className="hover:text-red-700 dark:hover:text-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded">Blog</a>
            </li>
            <li>
               <a href="#"
                  className="hover:text-red-700 dark:hover:text-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded">About</a>
            </li>
            <li>
               <a href="#"
                  className="hover:text-red-700 dark:hover:text-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded">Contact</a>
            </li>
            <li>
               <a href="#"
                  className="hover:text-red-700 dark:hover:text-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded">Log
                  in</a>
            </li>
         </ul>
      </div>

      <div className="flex items-center gap-4 lg:ml-4">
         

         <button type="button" aria-controls="collapseMenu" aria-expanded="false" aria-haspopup="true" id="toggleOpen"
            className="cursor-pointer lg:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded">
            <span className="sr-only">Open main menu</span>
            <svg className="size-7 fill-slate-900 dark:fill-slate-50" aria-hidden="true" viewBox="0 0 20 20"
               xmlns="http://www.w3.org/2000/svg">
               <path fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"></path>
            </svg>
         </button>
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

{/* map */}

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.3363305195867!2d67.07962110915012!3d24.852360077842498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33c04ab327747%3A0x7a5e727c542b60fa!2sJamia%20Masjid%20Tayyaba!5e0!3m2!1sen!2s!4v1790764155836!5m2!1sen!2s" width="1900" height="600" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
        </>
    )
}
export default App;