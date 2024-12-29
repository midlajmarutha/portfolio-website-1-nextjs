
import Script from "next/script";
import "./style.css"

export default function Home() {
  return (
    <>
    
    <header className="sticky top-0 bg-white dark:bg-gray-800 z-[1000]">
        <nav className="flex items-center justify-between p-5 max-w-6xl mx-auto font-poppins">
                <button type="button" id="nav-toogle" className=" dark:text-white md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="38px" height="48px"><path d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"/></svg>
                </button>
            <a href="#" className="text-3xl font-bold text-black animate-on-scroll slide-in-left">Hevin<span className="text-primary">.</span></a>
            
            <div className="flex items-center space-x-4">
                <div id="nav-links" className="hidden flex-col md:flex md:flex-row space-x-4 font-medium">
                    <a href="#" className="hover:text-primary animate-on-scroll slide-in-left animate-underline" >Home</a>
                    <a href="#about" className="hover:text-primary  animate-on-scroll slide-in-left animate-underline" data-delay="100ms">About</a>
                    <a href="#blogs" className="hover:text-primary  animate-on-scroll slide-in-left animate-underline" data-delay="250ms">Blog</a>
                </div>
                <a href="#contact" className="scroll-smooth px-5 py-2 bg-primary text-white cursor-pointer rounded-full font-medium hover:bg-opacity-90 transition">Contact Us</a>
                <button id="dark-mode-toggle" aria-label="Toggle Dark Mode" className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition">
                    <svg id="dark-mode-icon" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path id="sun-icon" className="hidden" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m8.66-8.66h-1m-16 0h-1M4.93 4.93l-.707.707m14.14 0l.707-.707M4.93 19.07l-.707-.707m14.14 0l.707.707M12 5a7 7 0 000 14 7 7 0 000-14z" />
                        <path id="moon-icon" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                    </svg>
                </button>
            </div>
        </nav>
    </header>

    <main className="max-w-6xl mx-auto p-5">
        
        <section className="flex flex-col-reverse md:flex-row  mt-10 md:mt-20">
            <div className="md:w-1/2 font-poppins">
                <h1 className="text-8xl font-[124px] font-poppins animate-on-scroll slide-in-left">
                    Hey<span className="text-primary"></span> <br/> I<span className="text-primary">'</span>m Hevin
                </h1>
                <h2 className="text-2xl font-light mt-4 animate-on-scroll slide-in-left" data-delay="50ms">
                    I<span className="text-primary">'</span>m a <span id="typewriter" className="text-primary font-medium blinking"></span>
                </h2>
                <p className="mt-6 text-gray-600 dark:text-gray-400 leading-relaxed animate-on-scroll slide-in-left" data-delay="100ms">
                    I’m a Web developer & I’m very passionate and dedicated to my work. I have acquired the skills and knowledge necessary to make your project a success.
                </p>
                <div className="flex gap-2">
                    <a href="#contact" className="mt-8 px-6 py-3 bg-primary text-white font-medium rounded-full shadow hover:bg-opacity-90 transition animate-on-scroll slide-in-up">
                        Let’s Talk
                    </a>
                    <a href="assets/banner-image1-1.png" download="hevin-cv" className="mt-8 px-6 py-3 bg-primary text-white font-medium rounded-full shadow hover:bg-opacity-90 transition animate-on-scroll slide-in-up">
                        Download CV
                    </a>
                </div>
                <div className="flex flex-col md:flex-row mt-10 md:mt-20 gap-6">
                    <div className="">
                        <div className="text-lg poppins-light">
                            Born in
                        </div>
                        <div className="text-2xl poppins-bold">
                            Newyork
                        </div>
                    </div>
                    <div className="">
                        <div className="text-lg poppins-light">
                            Experience
                        </div>
                        <div className="text-2xl poppins-bold">
                            5+ years
                        </div>
                    </div>
                    <div className="">
                        <div className="text-lg poppins-light">
                            Date of birth
                        </div>
                        <div className="text-2xl poppins-bold">
                            12 June 1998
                        </div>
                    </div>
                  </div>
              </div>
            <div className="md:w-1/2 flex justify-center reletive">
                <img src="/assets/banner-image1-1.png" alt="Hevin" className="animate-on-scroll slide-in-up"/>
                {/* <!-- <div className="absolute bottom-0">
                <div className="relative flex items-center justify-center ">

                    <div className="p-10 rounded-full bg-white/20 backdrop-blur border border-gray-200 shadow-lg flex items-center justify-center">

                      <div className="w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center shadow-md">

                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4m-8 4h8m-4 0v4" />
                        </svg>
                      </div>
                      
                    </div>
                    <div id='circle' data-text="SEE MORE SEE MORE&nbsp;" className="w-82 h-82"></div>


                  </div>
                  </div> --> */}
            </div>
            </section>

        
        <section id="about" className="max-w-6xl mx-auto py-16 px-5">
            <div className="grid md:grid-cols-2 gap-10 items-center">
                
                <div>
                    <h2 className="text-primary text-lg font-semibold uppercase tracking-wide">I Am a Web Developer</h2>
                    <h1 className="text-4xl font-semibold mt-3 animate-underline">About Me</h1>
                    <p className="mt-5 text-gray-600 leading-relaxed">
                        My name is Hevin. I have been studying UI/UX Design since October 2020. I like creating cool design projects.
                    </p>
                    <p className="mt-3 text-gray-600 leading-relaxed">
                        Donec imperdiet risus at tortor consequat maximus et eget magna. Cras ornare sagittis augue, id sollicitudin justo tristique ut. Nullam ex enim, euismod vel bibendum ultrices, fringilla vel eros. Donec euismod leo lectus, et euismod metus euismod sed. Quisque quis suscipit ipsum, at pellentesque velit. Duis a congue sem.
                    </p>
                </div>
        
                
                <div>
                    <h3 className="text-2xl font-medium mb-6">Skills</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        
                        <div className="text-center animate-on-scroll slide-in-down -z-10">
                            <div className="w-20 h-20 mx-auto bg-gray-100 flex items-center justify-center rounded-full shadow">
                                <img src="https://cdn-icons-png.flaticon.com/512/174/174881.png" alt="WordPress" className="w-10 h-10"/>
                            </div>
                            <p className="mt-2 text-lg font-medium">95%</p>
                            <p className="text-sm text-gray-600">WordPress</p>
                        </div>
                        
                        <div className="text-center animate-on-scroll slide-in-down -z-10" data-delay="50ms">
                            <div className="w-20 h-20 mx-auto bg-gray-100 flex items-center justify-center rounded-full shadow">
                                <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="HTML" className="w-10 h-10"/>
                            </div>
                            <p className="mt-2 text-lg font-medium">85%</p>
                            <p className="text-sm text-gray-600">HTML</p>
                        </div>
                        
                        <div className="text-center animate-on-scroll slide-in-down -z-10" data-delay="100ms">
                            <div className="w-20 h-20 mx-auto bg-gray-100 flex items-center justify-center rounded-full shadow">
                                <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="CSS" className="w-10 h-10"/>
                            </div>
                            <p className="mt-2 text-lg font-medium">92%</p>
                            <p className="text-sm text-gray-600">CSS</p>
                        </div>
                        
                        <div className="text-center animate-on-scroll slide-in-down -z-10" data-delay="150ms">
                            <div className="w-20 h-20 mx-auto bg-gray-100 flex items-center justify-center rounded-full shadow">
                                <img src="https://cdn-icons-png.flaticon.com/512/919/919836.png" alt="Angular" className="w-10 h-10"/>
                            </div>
                            <p className="mt-2 text-lg font-medium">94%</p>
                            <p className="text-sm text-gray-600">Angular</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-medium mb-6">Education</h3>
                    <table>
                        <tbody>
                            <tr className="border-t text-lg font-poppins flex gap-3 p-3">
                                <td>2014-18</td>
                                <td>
                                    <div>
                                        <div>
                                            Computer Science
                                        </div>

                                    </div>
                                </td>
                            </tr>
                            <tr className="border-t text-lg font-poppins flex gap-3 p-3">

                                <td>2014-18</td>
                                <td>Computer Science</td>
                                <td>Harvard University</td>
                            </tr>
                            <tr className="border-t text-lg font-poppins flex gap-3 p-3">

                                <td>2014-18</td>
                                <td>Computer Science</td>
                                <td>Harvard University</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <h3 className="text-2xl font-medium mb-6">Experience</h3>
                    <table>
                        <tbody>
                            <tr className="border-t text-lg font-poppins flex gap-3 p-3">
                                <td>2014-18</td>
                                <td>
                                    <div>
                                        <div>
                                            Computer Science
                                        </div>

                                    </div>
                                </td>
                            </tr>
                            <tr className="border-t text-lg font-poppins flex gap-3 p-3">

                                <td>2014-18</td>
                                <td>Computer Science</td>
                                <td>Harvard University</td>
                            </tr>
                            <tr className="border-t text-lg font-poppins flex gap-3 p-3">

                                <td>2014-18</td>
                                <td>Computer Science</td>
                                <td>Harvard University</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
        <section id="blogs" className="max-w-6xl mx-auto py-16 px-5">
            <div className="text-center md:text-left">
                <h2 className="text-primary text-lg font-semibold uppercase tracking-wide">My Blogs</h2>
                <h1 className="text-4xl font-bold mt-3">Blogs and Articles</h1>
                <p className="mt-5 text-gray-600 leading-relaxed">
                    Donec imperdiet risus at tortor consequat maximus et eget magna. Cras ornare sagittis augue, id sollicitudin justo tristique ut.
                </p>
            </div>
        
            <div className="grid gap-8 mt-10 md:grid-cols-2">
                <div className="relative rounded-lg overflow-hidden shadow-lg group">
                    <div className="overflow-hidden h-48">
                        <img src="/assets/digital-branding.avif" alt="Rocky Mountain" className="w-full h-48 object-cover transition group-hover:scale-150"/>
                    </div>
                    <div className="absolute top-4 left-4 bg-gray-800 text-white text-sm px-3 py-1 rounded">Featured</div>
                    <div className="p-4 dark:bg-gray-800  bg-white z-1">
                      <p className="text-sm text-gray-600 dark:text-white uppercase mb-1">Creative</p>
                      <h2 className="text-lg font-semibold dark:text-white text-gray-800">What is Digital Branding?</h2>
                    </div>
                  </div>
                  <div className="relative rounded-lg overflow-hidden shadow-lg group">
                    <div className="overflow-hidden h-48">
                        <img src="/assets/price.jpeg" alt="Rocky Mountain" className="w-full h-48 object-cover transition group-hover:scale-150"/>
                    </div>
                    <div className="absolute top-4 left-4 bg-gray-800 text-white text-sm px-3 py-1 rounded">Featured</div>
                    <div className="p-4 dark:bg-gray-800 bg-white z-1">
                      <p className="text-sm text-gray-600 dark:text-white uppercase mb-1">Creative</p>
                      <h2 className="text-lg font-semibold dark:text-white text-gray-800">How much does it cost?</h2>
                    </div>
                  </div>
                  <div className="relative rounded-lg overflow-hidden shadow-lg group">
                    <div className="overflow-hidden h-48">
                        <img src="/assets/mitravel-blog-card-tranmautritam_4x.png" alt="Rocky Mountain" className="w-full h-48 object-cover transition group-hover:scale-150"/>
                    </div>
                    <div className="absolute top-4 left-4 bg-gray-800 text-white text-sm px-3 py-1 rounded">Featured</div>
                    <div className="p-4 dark:bg-gray-800  bg-white z-1">
                      <p className="text-sm text-gray-600 dark:text-white uppercase mb-1">Creative</p>
                      <h2 className="text-lg font-semibold dark:text-white text-gray-800">Examples to Steal in 2025</h2>
                    </div>
                  </div>
                  <div className="relative rounded-lg overflow-hidden shadow-lg group">
                    <div className="overflow-hidden h-48">
                        <img src="/assets/mobile-app-development.png" alt="Rocky Mountain" className="w-full h-48 object-cover transition group-hover:scale-150"/>
                    </div>
                    <div className="absolute top-4 left-4 bg-gray-800 text-white text-sm px-3 py-1 rounded">Featured</div>
                    <div className="p-4 dark:bg-gray-800 bg-white z-1">
                      <p className="text-sm text-gray-600 dark:text-white uppercase mb-1">Creative</p>
                      <h2 className="text-lg font-semibold dark:text-white text-gray-800">Mobile app development trends 2025</h2>
                    </div>
                  </div>               
            </div>
        
            
            <div className="text-center mt-10">
                <a href="/blogs.html" className="border font-poppins border-yellow-500 text-yellow-500 px-6 py-3 rounded-full font-semibold shadow hover:shadow-lg hover:bg-yellow-500 hover:text-white hover:dark:text-gray-900 transition">
                    All Blogs
                </a>
            </div>
        </section>
        <section className="" id="contact">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              <div>
                <h2 className="text-purple-600 text-sm font-semibold uppercase mb-2">Contact Me</h2>
                <h3 className="text-4xl font-bold mb-6">Let's Discuss Your Project</h3>
                <div className="space-y-6">
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-purple-100 dark:bg-gray-700 rounded-full">
                      <img src="assets/footer-icon1.png" alt="Phone Icon" className="w-6 h-6"/>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Phone</h4>
                      <p className="text-gray-600">+00 001 002 003</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-purple-100 dark:bg-gray-700 rounded-full">
                      <img src="assets/footer-icon2.png" alt="Email Icon" className="w-6 h-6"/>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Email</h4>
                      <p className="text-gray-600">help@example.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-purple-100 dark:bg-gray-700  rounded-full">
                      <img src="assets/footer-icon3.png" alt="Location Icon" className="w-6 h-6"/>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Location</h4>
                      <p className="text-gray-600">Your Address Here</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="rounded-md p-12 shadow-lg flex items-center">
                  <h3 className="text-2xl font-bold mb-6">Fill The Form</h3>
                  <form className="space-y-6">
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      className="w-full px-4 py-3 border-b bg-transparent focus:outline-none focus:border-purple-600"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 border-b bg-transparent focus:outline-none focus:border-purple-600"
                    />
                    <textarea
                      placeholder="Your Message"
                      rows="4"
                      className="w-full px-4 py-3 border-b bg-transparent focus:outline-none focus:border-purple-600"
                    ></textarea>
                    <div className="w-full text-end">
                        <button
                          type="submit"
                          className="border border-yellow-500 text-yellow-500 px-6 py-3 rounded-full font-semibold shadow hover:shadow-lg hover:bg-yellow-500 hover:text-white hover:dark:text-gray-900 transition font-poppins"
                        >
                          Send Message
                        </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>         
    </main>

    <footer className="mt-20 p-5 text-center bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
        © 2024 Hevin. All rights reserved.
    </footer>
    <Script src="/scripts/script.js" strategy="afterInteractive"/>
    <Script src="/scripts/typewrite-animation.js" strategy="afterInteractive"/>
    </>
  );
}
