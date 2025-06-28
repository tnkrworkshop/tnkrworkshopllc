
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, ChevronRight, Layers, Scissors, Palette } from "lucide-react";

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      title: "CNC-Carved Wooden Basket Bases",
      description: "Precision-carved from premium hardwoods with traditional joinery techniques enhanced by modern CNC technology.",
      features: ["Premium Hardwood", "CNC Precision", "Traditional Design", "Multiple Sizes"],
      icon: Layers,
      gradient: "from-oak to-walnut"
    },
    {
      id: 2,
      title: "3D-Printed PLA Basket Bases",
      description: "Lightweight, durable PLA bases perfect for contemporary basket weaving with consistent dimensions and smooth finish.",
      features: ["Eco-Friendly PLA", "Consistent Quality", "Lightweight", "Custom Colors"],
      icon: Palette,
      gradient: "from-stone to-maker-blue"
    },
    {
      id: 3,
      title: "Premium Hardwood Cutting Boards",
      description: "Stunning cutting boards featuring contrasting wood inlays, food-safe finishes, and exceptional durability.",
      features: ["Food-Safe Finish", "Contrasting Inlays", "Premium Woods", "Custom Designs"],
      icon: Scissors,
      gradient: "from-cherry to-walnut"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-stone/10 to-oak/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-cherry text-poplar mb-4">Our Products</Badge>
          <h2 className="text-4xl md:text-5xl font-playfair text-walnut mb-6">
            Rustic Designs.
            <span className="text-maker-blue block">Digital Precision.</span>
          </h2>
          <p className="text-xl text-walnut/80 max-w-3xl mx-auto leading-relaxed">
            Discover our collection of handcrafted basket bases and cutting boards, 
            where traditional woodworking meets modern fabrication technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <Card key={product.id} className="bg-white/80 hover:bg-white transition-all duration-300 hover:shadow-xl border-walnut/10 group">
              <CardContent className="p-8">
                {/* Product Image Placeholder */}
                <div className={`aspect-square bg-gradient-to-br ${product.gradient} rounded-xl mb-6 flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-center text-poplar p-6">
                    <div className="w-16 h-16 bg-poplar/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <product.icon className="w-8 h-8 text-poplar" />
                    </div>
                    <h4 className="text-lg font-playfair mb-2">Placeholder — Product Photo</h4>
                    <p className="text-poplar/80 text-sm">{product.title}</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-poplar/20 text-poplar border-poplar/30">
                      Premium
                    </Badge>
                  </div>
                </div>

                <h3 className="text-xl font-playfair text-walnut mb-3">{product.title}</h3>
                <p className="text-walnut/80 mb-4 leading-relaxed">{product.description}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <Badge key={featureIndex} variant="secondary" className="bg-walnut/10 text-walnut text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

                {/* Actions */}
                <div className="space-y-3">
                  <Button className="w-full bg-cherry hover:bg-cherry/90 text-poplar group-hover:scale-105 transition-transform">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Shop on Amazon
                  </Button>
                  <Button variant="outline" className="w-full border-walnut text-walnut hover:bg-walnut hover:text-poplar">
                    Request Custom Order
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-walnut rounded-3xl p-8 md:p-12 text-poplar">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-playfair mb-6">
                See Our Process
              </h3>
              <p className="text-xl mb-6 text-poplar/90 leading-relaxed">
                From design to finish, watch how we blend traditional woodworking 
                with cutting-edge CNC and 3D printing technology.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-oak rounded-full flex items-center justify-center">
                    <span className="text-walnut font-bold text-sm">1</span>
                  </div>
                  <span>Design & CAD Modeling</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-oak rounded-full flex items-center justify-center">
                    <span className="text-walnut font-bold text-sm">2</span>
                  </div>
                  <span>CNC Machining & 3D Printing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-oak rounded-full flex items-center justify-center">
                    <span className="text-walnut font-bold text-sm">3</span>
                  </div>
                  <span>Hand Finishing & Quality Control</span>
                </div>
              </div>
              <Button variant="outline" className="mt-6 border-poplar text-poplar hover:bg-poplar hover:text-walnut">
                Watch Behind-the-Scenes
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            
            <div className="aspect-video bg-poplar/10 rounded-2xl flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-20 h-20 bg-poplar/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-poplar" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <h4 className="text-xl font-playfair mb-2">Placeholder — Process Video</h4>
                <p className="text-poplar/80">Behind-the-Scenes Workshop Tour</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
