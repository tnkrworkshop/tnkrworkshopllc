
import { Button } from "@/components/ui/button";
import { ChevronRight, ShoppingCart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-stone/20 to-oak/20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #5C3A21 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="mb-4">
              <span className="inline-block bg-walnut text-poplar px-4 py-2 rounded-full text-sm font-medium mb-4">
                Veteran Owned • Family Run • Premium Quality
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-walnut mb-6 leading-tight">
              Craft Meets
              <span className="text-cherry block font-pacifico text-4xl md:text-5xl lg:text-6xl mt-2">
                Code
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-walnut/80 mb-8 leading-relaxed">
              Where traditional woodworking meets modern precision. 
              <span className="block mt-2 font-medium text-walnut">
                Handcrafted basket bases and cutting boards, perfected with digital fabrication.
              </span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-cherry hover:bg-cherry/90 text-poplar text-lg px-8 py-3">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Shop on Amazon
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-walnut text-walnut hover:bg-walnut hover:text-poplar text-lg px-8 py-3"
              >
                See Our Process
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-walnut/70">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-maker-green rounded-full"></div>
                <span>CNC Precision</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-maker-blue rounded-full"></div>
                <span>3D Printing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cherry rounded-full"></div>
                <span>Traditional Craft</span>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative animate-slide-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-oak to-walnut flex items-center justify-center">
                <div className="text-center text-poplar p-8">
                  <div className="w-20 h-20 bg-poplar/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-poplar" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-playfair mb-2">Placeholder — Hero Image</h3>
                  <p className="text-poplar/80">CNC Machine in Action or Basket Weaving Process</p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-cherry rounded-full flex items-center justify-center shadow-lg">
              <span className="text-poplar font-bold">★</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-maker-blue rounded-full flex items-center justify-center shadow-lg">
              <span className="text-poplar text-sm">⚡</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
