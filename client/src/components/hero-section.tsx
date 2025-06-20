import { scrollToSection } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1574958269340-fa927503f3dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-pub-brown/60" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-pub-amber/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-pub-gold/15 rounded-full blur-2xl animate-float delay-1000"></div>
      <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-pub-amber rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-pub-gold/30 rounded-full animate-pulse-slow delay-500"></div>
      
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
        {/* Logo/Brand Element */}
        <div className="mb-8">
          <div className="inline-block p-4 border-2 border-pub-amber rounded-full mb-4">
            <div className="w-16 h-16 bg-pub-amber rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-white">F</span>
            </div>
          </div>
        </div>
        
        <h1 className="font-playfair text-6xl md:text-8xl font-bold mb-6 leading-tight">
          <span className="block text-pub-cream">Toronto's</span>
          <span className="block text-pub-amber">Favorite Pub</span>
          <span className="block text-white">Experience</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Discover our collection of neighborhood pubs across Toronto offering exceptional ales, 
          hearty pub fare, and warm hospitality since 1987.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={() => scrollToSection("locations")}
            className="group relative btn-gradient-primary text-white px-12 py-6 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-110 hover:-translate-y-3 shadow-2xl hover:shadow-glow-gold overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/10 rounded-2xl"></div>
            <span className="relative z-10 flex items-center">
              <svg className="w-5 h-5 mr-3 transition-transform group-hover:rotate-12" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="mr-3">Find a Location</span>
              <span className="inline-block transition-transform group-hover:translate-x-2 duration-300">→</span>
            </span>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-white/40 rounded-full"></div>
          </button>
          <button
            onClick={() => scrollToSection("menu")}
            className="group relative btn-glass border-2 border-white/30 text-white hover:bg-white hover:text-pub-brown px-12 py-6 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-110 hover:-translate-y-3 shadow-2xl hover:shadow-glow overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:from-white group-hover:via-white group-hover:to-white transition-all duration-500 rounded-2xl"></div>
            <span className="relative z-10 flex items-center">
              <svg className="w-5 h-5 mr-3 transition-transform group-hover:rotate-12" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="mr-3">View Menu</span>
              <span className="inline-block transition-transform group-hover:translate-x-2 duration-300">→</span>
            </span>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-3/4 h-1 bg-pub-amber rounded-full transition-all duration-500"></div>
          </button>
        </div>
        
        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-pub-amber">5+</div>
            <div className="text-sm text-gray-300">Locations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pub-amber">37+</div>
            <div className="text-sm text-gray-300">Years Serving</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pub-amber">50+</div>
            <div className="text-sm text-gray-300">Menu Items</div>
          </div>
        </div>
        
        {/* Social Media Follow */}
        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-4">Follow us for daily updates, events & specials</p>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://www.instagram.com/firkinpubs/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-white/10 backdrop-blur-sm hover:bg-pub-amber p-3 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <span className="sr-only">Instagram</span>
              <svg className="w-6 h-6 text-white group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a 
              href="https://x.com/FirkinPubs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-white/10 backdrop-blur-sm hover:bg-pub-amber p-3 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <span className="sr-only">X (Twitter)</span>
              <svg className="w-6 h-6 text-white group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a 
              href="https://www.facebook.com/firkinpubs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-white/10 backdrop-blur-sm hover:bg-pub-amber p-3 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <span className="sr-only">Facebook</span>
              <svg className="w-6 h-6 text-white group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
