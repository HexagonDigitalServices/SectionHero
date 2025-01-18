import React from 'react';
import heropic from '../assets/hero.png'

const Hero = () => {
    return (
        <section className="relative py-12 overflow-hidden bg-black sm:pb-16 lg:pb-20 xl:pb-24">
            <div className="px-4 mx-auto relativea sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16">
                    <div>
                        <h1 className="text-4xl font-normal text-white sm:text-5xl lg:text-6xl xl:text-7xl">Connecting Devs with Employers</h1>
                        <p className="mt-4 text-lg font-normal text-gray-400 sm:mt-8">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.</p>

                        <form action="#" method="POST" className="relative mt-8 rounded-full sm:mt-12">
                            <div className="relative">
                                <div className="absolute rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500"></div>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-6">
                                        <svg className="w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>
                                    <input type="email" name="" id="" placeholder="Try Java Developer, React Dev etc." className="block w-full py-4 pr-6 text-white placeholder-gray-500 bg-black border border-transparent rounded-full pl-14 sm:py-5 focus:border-transparent focus:ring-0" />
                                </div>
                            </div>
                            <div className="sm:absolute flex sm:right-1.5 sm:inset-y-1.5 mt-4 sm:mt-0">
                                <button type="submit" className="inline-flex items-center justify-center w-full px-5 py-5 text-sm font-semibold tracking-widest text-black uppercase transition-all duration-200 bg-white rounded-full sm:w-auto sm:py-3 hover:opacity-90">Find A Developer</button>
                            </div>
                        </form>

                        <div className="mt-8 sm:mt-12">
                            <p className="text-lg font-normal text-white">Trusted by 50k+ users</p>
                            <div className="flex items-center mt-3">
                                <span className="ml-2 text-base font-normal text-white"> 4.1/5 </span>
                                <span className="ml-1 text-base font-normal text-gray-500"> (14k Reviews) </span>
                            </div>
                        </div>
                        
                    </div>

                    <div className="relative">
                        <img className="relative w-full max-w-md mx-auto" src={heropic} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;