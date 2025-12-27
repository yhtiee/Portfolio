"use client";

import { Code2, Globe, Heart, Lightbulb, Terminal, Zap, Coffee } from "lucide-react";

const About = () => {
    return (
        <section id="about" className="relative py-24 bg-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                
                {/* Section Header */}
                <div className="mb-16 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                    <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter">
                        More Than Just <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-400">
                            Code.
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl font-light leading-relaxed">
                        I design digital experiences that blend technical precision with creative flair. 
                        Here's a glimpse into the human behind the screen.
                    </p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                    {/* 1. The "What I Do" Card (Large) */}
                    <div className="md:col-span-8 bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-black transition-all duration-500 group hover:shadow-lg">
                        <div className="flex flex-col h-full justify-between space-y-8">
                            <div className="flex items-start justify-between">
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-bold">The Craftsman</h3>
                                    <p className="text-gray-500 font-medium">Engineering robust solutions.</p>
                                </div>
                                <div className="p-3 bg-white rounded-full border border-gray-100 group-hover:bg-black group-hover:text-white transition-colors duration-500">
                                    <Terminal className="w-6 h-6" />
                                </div>
                            </div>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                I'm a Software Engineer who thrives on complexity. Whether it's architecting scalable backends or refining pixel-perfect frontends, I treat every line of code as a brushstroke. I do not work with fixed technologies which means I can adapt learn and ship with whatever technologies required. My goal isn't just to make things work, it's to make them work <i>beautifully and seamlessly</i>.
                            </p>
                            <div className="flex gap-2 flex-wrap">
                                {['Full Stack', 'Frontend', 'Backend', 'System Architecture'].map((tag) => (
                                    <span key={tag} className="px-4 py-1.5 rounded-full bg-white border border-gray-200 text-sm font-medium shadow-sm hover:bg-black hover:text-white transition-colors cursor-default">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* 2. The "Stats" Card (Tall) */}
                    <div className="md:col-span-4 md:row-span-2 bg-black text-white rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group shadow-2xl">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-gray-800 rounded-full blur-3xl opacity-20 -mr-10 -mt-10 transition-opacity group-hover:opacity-40" />
                        
                        <div>
                            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"/>
                                Status
                            </h3>
                            <div className="space-y-8">
                                <div className="group/stat">
                                    <div className="text-5xl font-extrabold tracking-tight group-hover/stat:text-gray-300 transition-colors">3+</div>
                                    <div className="text-gray-500 mt-1 font-medium">Years Experience</div>
                                </div>
                                <div className="group/stat">
                                    <div className="text-5xl font-extrabold tracking-tight group-hover/stat:text-gray-300 transition-colors">20+</div>
                                    <div className="text-gray-500 mt-1 font-medium">Projects Shipped</div>
                                </div>
                                <div className="group/stat">
                                    <div className="text-5xl font-extrabold tracking-tight group-hover/stat:text-gray-300 transition-colors">∞</div>
                                    <div className="text-gray-500 mt-1 font-medium">Coffees Consumed</div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-8 pt-8 border-t border-gray-800">
                            <div className="flex items-center gap-2 text-gray-400 text-sm font-medium">
                                <Globe className="w-4 h-4" />
                                <span>Based in the Cloud</span>
                            </div>
                        </div>
                    </div>

                    {/* 3. The "Journey" Card (Wide) */}
                    <div className="md:col-span-8 bg-white rounded-3xl p-8 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-300">
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                            <Zap className="w-6 h-6" />
                            My Journey
                        </h3>
                        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">

                            {/* Timeline Item 1 */}
                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-black shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                    <div className="w-2 h-2 bg-white rounded-full" />
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl bg-gray-50 border border-gray-100 hover:bg-gray-100 transition-colors">
                                    <div className="flex items-center justify-between space-x-2 mb-1">
                                        <div className="font-bold text-gray-900">Senior Software Engineer</div>
                                        <time className="font-mono text-xs text-gray-500 bg-white px-2 py-1 rounded border border-gray-200">Future</time>
                                    </div>
                                    <div className="text-gray-600 text-sm">Aiming at leading more teams, expanding my knowledge in areas like mobile development (already building PWAs but I want to be very comforatable with native app building), blockchain development, AI + ML, Masters in Software Engineering. Building as much products to solve real world problems out there</div>
                                </div>
                            </div>
                            
                            {/* Timeline Item 1 */}
                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-black shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                    <div className="w-2 h-2 bg-white rounded-full" />
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl bg-gray-50 border border-gray-100 hover:bg-gray-100 transition-colors">
                                    <div className="flex items-center justify-between space-x-2 mb-1">
                                        <div className="font-bold text-gray-900">Full Stack Developer</div>
                                        <time className="font-mono text-xs text-gray-500 bg-white px-2 py-1 rounded border border-gray-200">Now</time>
                                    </div>
                                    <div className="text-gray-600 text-sm">Building scalable architectures, collaboarated as a backend developer more and also leading my second team, its been a fantastic journey.</div>
                                </div>
                            </div>

                            
                            {/* Timeline Item 2 */}
                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-gray-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl bg-gray-50 border border-gray-100 hover:bg-gray-100 transition-colors">
                                    <div className="flex items-center justify-between space-x-2 mb-1">
                                        <div className="font-bold text-gray-900">Full Stack Developer</div>
                                        <time className="font-mono text-xs text-gray-500 bg-white px-2 py-1 rounded border border-gray-200">2024</time>
                                    </div>
                                    <div className="text-gray-600 text-sm">Began working more on backend + frontend systems, lead my first team (too early? Yeah thought so too but I did well). Also explored web automation.</div>
                                </div>
                            </div>

                            {/* Timeline Item 2 */}
                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-gray-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl bg-gray-50 border border-gray-100 hover:bg-gray-100 transition-colors">
                                    <div className="flex items-center justify-between space-x-2 mb-1">
                                        <div className="font-bold text-gray-900">Frontend Developer</div>
                                        <time className="font-mono text-xs text-gray-500 bg-white px-2 py-1 rounded border border-gray-200">2023</time>
                                    </div>
                                    <div className="text-gray-600 text-sm">Collaboarated on different frontend projects for clients, companies and side projects.</div>
                                </div>
                            </div>

                             {/* Timeline Item 3 */}
                             <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-gray-200 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl bg-gray-50 border border-gray-100 hover:bg-gray-100 transition-colors">
                                    <div className="flex items-center justify-between space-x-2 mb-1">
                                        <div className="font-bold text-gray-900">Hello World</div>
                                        <time className="font-mono text-xs text-gray-500 bg-white px-2 py-1 rounded border border-gray-200">2022</time>
                                    </div>
                                    <div className="text-gray-600 text-sm">Wrote my first line of code. Realized this is my superpower.</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 4. The "Superpowers" Card */}
                    <div className="md:col-span-4 bg-gray-900 text-white rounded-3xl p-8 relative overflow-hidden group">
                         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
                         <h3 className="text-xl font-bold mb-6 flex items-center gap-2 relative z-10">
                            <Lightbulb className="w-5 h-5 text-yellow-400" />
                            Superpowers
                        </h3>
                        <ul className="space-y-4 relative z-10">
                            {['Problem Solving', 'Communication', 'Clean Architecture', 'Team Leadership'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-300 group-hover:text-white transition-colors">
                                    <span className="w-1.5 h-1.5 bg-white rounded-full" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 5. The "Kryptonite" Card (Fun) */}
                    <div className="md:col-span-4 bg-gray-50 rounded-3xl p-8 border border-gray-200 flex flex-col justify-center items-center text-center hover:bg-gray-100 transition-colors group">
                        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-2xl group-hover:scale-110 transition-transform duration-300">
                            <Coffee className="w-6 h-6 text-gray-700" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">My Kryptonite</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            I cannot function without coffee. Also, I have a bad habit of creating repos and folders for projects I'll probably start next month"
                        </p>
                    </div>

                    {/* 6. The "Offline Mode" Card (Hobbies) */}
                    <div className="md:col-span-4 bg-white rounded-3xl p-8 border border-gray-200 relative overflow-hidden group hover:border-black transition-colors duration-300">
                        <div className="absolute -top-4 -right-4 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Heart className="w-32 h-32 rotate-12" />
                        </div>
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <Heart className="w-5 h-5 text-red-500 fill-current" />
                            Offline Mode
                        </h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {['Movies', 'Gaming', 'Music', 'Reading', "Forex Trading"].map((hobby) => (
                                <span key={hobby} className="px-3 py-1 bg-gray-100 rounded-md text-xs font-bold uppercase tracking-wider text-gray-600">
                                    {hobby}
                                </span>
                            ))}
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            When I'm not coding, I'm usually exploring new worlds either virtually or physically.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About;
