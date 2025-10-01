import React from "react";

export default function Header() {
    return (
        <header className="text-white relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-pink-600 animate-gradient-x"></div>

            {/* Floating abstract shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
                <span className="absolute w-72 h-72 bg-pink-500 rounded-full opacity-30 animate-float-slow top-10 left-10"></span>
                <span className="absolute w-96 h-96 bg-indigo-400 rounded-full opacity-20 animate-float-slower bottom-20 right-20"></span>
            </div>

            {/* Floating tech icons */}
            <div className="absolute inset-0 pointer-events-none hidden lg:block">
                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                    className="absolute w-16 top-20 left-10 opacity-20 animate-float-slow"
                    alt="HTML5"
                />
                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                    className="absolute w-20 top-40 right-20 opacity-15 animate-float-slower"
                    alt="CSS3"
                />
                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    className="absolute w-12 bottom-10 left-1/3 opacity-25 animate-float-slow"
                    alt="JavaScript"
                />
            </div>

            {/* Main content */}
            <div className="container mx-auto px-6 text-center relative z-10">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 max-w-3xl mx-auto leading-tight md:leading-16 bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-rose-300 to-orange-300 animate-gradient-text">
                    Build Your First Website in Just 30 Days — No Experience Needed!
                </h1>
                <p className="text-base md:text-lg lg:text-xl mb-10 max-w-2xl mx-auto leading-relaxed text-gray-100">
                    Learn HTML, CSS, and JavaScript through live sessions and hands-on
                    projects. Start your journey to becoming a web developer today!
                </p>
                <a
                    href="#register"
                    className="bg-yellow-400 text-gray-900 font-bold py-5 px-12 rounded-full shadow-2xl hover:bg-yellow-500 inline-block transform hover:scale-110 transition"
                >
                    Reserve Your Spot
                </a>
            </div>

            {/* Wave SVG at bottom */}
            {/* I generated the svg at https://getwaves.io */}
            {/* Mobile */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
                className="absolute bottom-0 left-0 w-full h-32 block md:hidden"
            >
                <path
                    fill="#f9fafb"
                    fillOpacity="1"
                    d="M0,192L60,186.7C120,181,240,171,360,181.3C480,192,600,224,720,240C840,256,960,256,1080,250.7C1200,245,1320,235,1380,229.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                />
            </svg>

            {/* Larger screens */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
                className="absolute bottom-0 left-0 w-full h-32 hidden md:block"
            >
                <path
                    fill="#f9fafb"
                    fillOpacity="1"
                    d="M0,0L30,32C60,64,120,128,180,133.3C240,139,300,85,360,85.3C420,85,480,139,540,186.7C600,235,660,277,720,256C780,235,840,149,900,133.3C960,117,1020,171,1080,170.7C1140,171,1200,117,1260,90.7C1320,64,1380,64,1410,64L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
                />
            </svg>
        </header>
    );
}
