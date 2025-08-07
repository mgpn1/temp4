import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="hero-height relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-luxury-hotel-lobby-with-elegant-lighting-4083-large.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-hero-overlay/60"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between p-6 lg:p-8">
        {/* Logo */}
        <div className="text-hero-text">
          <div className="w-12 h-12 relative">
            <div className="absolute inset-0 border-2 border-hero-accent transform rotate-45"></div>
            <div className="absolute inset-1 bg-hero-accent transform rotate-45"></div>
            <span className="absolute inset-0 flex items-center justify-center text-hero-text font-bold text-xl transform -rotate-45">UP</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <Button variant="outline" className="border-hero-accent text-hero-accent hover:bg-hero-accent hover:text-hero-bg">
            Get in Touch
          </Button>
          <button className="text-hero-text flex items-center space-x-2">
            <span className="text-lg">Menu</span>
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <Menu className="w-6 h-6 text-hero-text" />
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="hero-text text-hero-text text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light mb-6 lg:mb-8">
            We're UP Hotel Agency
          </h1>
          
          <h2 className="hero-text text-hero-accent text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light mb-8 lg:mb-12">
            Hotel Web Design and<br />
            Digital Marketing Specialists
          </h2>
          
          <p className="text-hero-text/80 text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed mb-12 lg:mb-16">
            UP Hotel Agency is a specialist hotel web design company based in London offering bespoke 
            Hotel Website Design, Hotel Digital Marketing and Hotel Web Development services in
          </p>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            <div className="group">
              <div className="border border-hero-accent/30 bg-hero-bg/20 backdrop-blur-sm p-6 lg:p-8 transition-all duration-300 hover:border-hero-accent hover:bg-hero-accent/10">
                <h3 className="text-hero-accent text-xl lg:text-2xl font-light mb-4">
                  Hotel Web Design & UX
                </h3>
                <p className="text-hero-text/70 text-sm lg:text-base leading-relaxed">
                  Bespoke hotel website design that converts visitors into bookings with exceptional user experience.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="border border-hero-accent/30 bg-hero-bg/20 backdrop-blur-sm p-6 lg:p-8 transition-all duration-300 hover:border-hero-accent hover:bg-hero-accent/10">
                <h3 className="text-hero-accent text-xl lg:text-2xl font-light mb-4">
                  Hotel Web Development
                </h3>
                <p className="text-hero-text/70 text-sm lg:text-base leading-relaxed">
                  Technical excellence in hotel web development with seamless booking integrations.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="border border-hero-accent/30 bg-hero-bg/20 backdrop-blur-sm p-6 lg:p-8 transition-all duration-300 hover:border-hero-accent hover:bg-hero-accent/10">
                <h3 className="text-hero-accent text-xl lg:text-2xl font-light mb-4">
                  Hotel Digital Marketing
                </h3>
                <p className="text-hero-text/70 text-sm lg:text-base leading-relaxed">
                  Strategic digital marketing solutions to increase your hotel's online visibility and bookings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;