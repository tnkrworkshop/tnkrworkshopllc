
import { Button } from "@/components/ui/button";
import { ChevronRight, ShoppingCart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-stone/20 to-oak/20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #3A6EA5 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="mb-4">
              <span className="inline-block bg-maker-blue text-poplar px-4 py-2 rounded-full text-sm font-medium mb-4">
                Veteran Owned • Family Run • Premium Quality
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-maker-blue mb-6 leading-tight">
              Craft Meets
              <span className="text-maker-green block font-pacifico text-4xl md:text-5xl lg:text-6xl mt-2">
                Code
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-700 mb-8 leading-relaxed">
              Where traditional woodworking meets modern precision. 
              <span className="block mt-2 font-medium text-maker-blue">
                Handcrafted basket bases and cutting boards, perfected with digital fabrication.
              </span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-maker-green hover:bg-maker-green/90 text-poplar text-lg px-8 py-3">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Shop on Amazon
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-maker-blue text-maker-blue hover:bg-maker-blue hover:text-poplar text-lg px-8 py-3"
              >
                See Our Process
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-maker-green rounded-full"></div>
                <span>CNC Precision</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-maker-blue rounded-full"></div>
                <span>3D Printing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-oak rounded-full"></div>
                <span>Traditional Craft</span>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative animate-slide-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/lovable-uploads/59b76e03-ef7c-433c-b24d-b736b3f85e7c.png"
                alt="TnKr Workshop - Handcrafted wooden cutting boards being held in workshop"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-maker-green rounded-full flex items-center justify-center shadow-lg">
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
