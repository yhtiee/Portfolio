"use client"

import Image from "next/image"
import { Button } from "../ui/button"

const Hero = () => {
    return (
        <section className="px-4 relative min-h-[90vh] pt-30 pb-16 overflow-hidden bg-white">

            <div className="absolute inset-0 z-0 opacity-[0.03]"
                style={{
                    backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                }}
            />
            
            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-6">
            
                <div className="space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                  
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 shadow-sm transition-transform hover:scale-105 cursor-default">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-black"></span>
                        </span>
                        <span className="text-sm font-medium text-gray-600">Available for new projects</span>
                    </div>

                    <div className="space-y-6">
                        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9]">
                            I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500">Ut</span>. <br />
                            Software <br />
                            Engineer.
                        </h1>
                        <p className="text-xl text-gray-600 max-w-lg leading-relaxed font-light">
                            I specialize in crafting high-performance web applications 
                            with clean code and intuitive user experiences.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <Button 
                            size="lg" 
                            className="h-14 px-8 text-lg bg-black text-white hover:bg-gray-800 rounded-full transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl hover:cursor-pointer"
                            onClick={() => window.location.href = '/projects'}
                        >
                            View My Work
                        </Button>
                        <Button 
                            size="lg" 
                            variant="outline" 
                            className="h-14 px-8 text-lg border-2 border-black text-black hover:bg-gray-50 rounded-full transition-all hover:-translate-y-1 hover:cursor-pointer"
                            onClick={() => window.location.href = '#contact'}
                        >
                            Contact Me
                        </Button>
                    </div>
                </div>

                <div className="relative lg:h-[600px] flex items-center justify-center animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
                    <div className="relative w-full max-w-md aspect-[4/5] group">
                        {/* Abstract shapes/cards */}
                        <div className="absolute inset-0 bg-black rounded-[2rem] rotate-6 opacity-5 group-hover:rotate-12 transition-transform duration-500 ease-out" />
                        
                        <div className="absolute inset-0 bg-white border-2 border-black rounded-[2rem] -rotate-3 group-hover:rotate-0 transition-transform duration-500 ease-out z-10 overflow-hidden shadow-2xl">
                            <Image
                                src="/profile.png"
                                alt="Developer Avatar"
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
                                priority
                            />
                        </div>

                        {/* Floating Sticker */}
                        <div className="absolute -bottom-6 -right-6 z-20 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 rotate-12 group-hover:rotate-6 transition-transform duration-500 hidden sm:block">
                            <div className="flex items-center gap-3">
                                <div className="text-3xl">👋</div>
                                <div>
                                    <p className="text-xs text-gray-500 font-bold uppercase">Say Hello</p>
                                    <p className="text-sm font-bold text-black">Let's Collaborate</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero