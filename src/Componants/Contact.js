import React from "react";
import git from "../image/git.png"



export default function Contact (){
    return (
        <section id="contact" className="relative">
          <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                title="map"
                className="absolute inset-0"
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                style={{ filter: "opacity(0.7)" }}
                src="https://www.google.com/maps/embed/v1/place?q=Sillicon+Valley+&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              />
              <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  Location 
                  </h2>
                 {/*} <p className="mt-1">
                  <td><a href={"https://www.linkedin.com/in/saidaafroj/"}>Click </a></td>
                 
    </p>*/}
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                    
                  </h2>
                 
                  <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                    
                  </h2>
                  <p className="leading-relaxed"></p>
                </div>
              </div>
            </div>
            <form
              netlify
              name="contact"
              className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                Hire Me
              </h2>
              <p className="leading-relaxed mb-5">
               Contact Details 
              </p>
              <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                 LinkedIn : 
                 <td><a  className="text-indigo-400 leading-relaxed" href={"https://www.linkedin.com/in/saidaafroj/"}>Click Here</a></td>
                  </label>
               
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                  Email :   
                    <a className="text-indigo-400 leading-relaxed">
                    saida.afroj@gmail.com
                  </a>
                </label>
                
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-400">
                 Github  :
                  <a className="text-indigo-400 leading-relaxed" href="https://github.com/saidaAfroj">
                  Click Here
                  </a>
                </label>
                
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-400">
                  Twitter :
                  <a className="text-indigo-400 leading-relaxed" href="https://twitter.com/AfrojSaida">
                   Click Here
                  </a>
                </label>
                
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-400">
                  Phone Number :
                  <a className="text-indigo-400 leading-relaxed">
                   669-237-8711
                  </a>
                </label>
                
              </div>
              


            </form>
          </div>
        </section>
      );
}