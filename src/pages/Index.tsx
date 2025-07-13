
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Star, Heart, Award, ShoppingCart } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductShowcase from "@/components/ProductShowcase";
import Footer from "@/components/Footer";

const Index = () => {
  console.log('Index component rendering...');
  
  return (
    <div className="min-h-screen bg-poplar">
      {/* Navigation */}
      <nav className="bg-maker-blue text-poplar shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img 
                src={`${import.meta.env.BASE_URL}lovable-uploads/78212c79-c40d-4ed7-ad46-b23fe483c60e.png`}
                alt="TnKr Workshop Logo" 
                className="w-10 h-10 object-contain"
              />
              <div>
                <h1 className="font-pacifico text-xl text-oak">TnKr Workshop</h1>
                <p className="text-xs text-poplar/80">Craft Meets Code</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <a href="#about" className="hover:text-oak transition-colors">About</a>
              <a href="#products" className="hover:text-oak transition-colors">Products</a>
              <a href="#contact" className="hover:text-oak transition-colors">Contact</a>
            </div>

            <Button 
              className="bg-maker-green hover:bg-maker-green/90 text-poplar"
              onClick={() => window.open('https://amazon.com/shops/tnkrworkshop', '_blank')}
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Shop on Amazon
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Trust Badges */}
      <section className="py-8 bg-stone/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Badge variant="secondary" className="bg-maker-blue text-poplar px-4 py-2">
              <Award className="w-4 h-4 mr-2" />
              Veteran Owned
            </Badge>
            <Badge variant="secondary" className="bg-slate-600 text-poplar px-4 py-2">
              <Heart className="w-4 h-4 mr-2" />
              Family Run
            </Badge>
            <Badge variant="secondary" className="bg-maker-green text-poplar px-4 py-2">
              <Star className="w-4 h-4 mr-2" />
              Premium Quality
            </Badge>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Product Showcase */}
      <ProductShowcase />

      {/* Final CTA Section */}
      <section className="py-16 bg-maker-blue text-poplar">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair mb-4">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl mb-8 text-poplar/90">
            Discover our full collection of handcrafted basket bases and cutting boards
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-maker-green hover:bg-maker-green/90 text-poplar"
              onClick={() => window.open('https://amazon.com/shops/tnkrworkshop', '_blank')}
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Shop Our Amazon Store
            </Button>
            <Button size="lg" variant="outline" className="border-poplar text-poplar hover:bg-poplar hover:text-maker-blue">
              Request Custom Order
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
