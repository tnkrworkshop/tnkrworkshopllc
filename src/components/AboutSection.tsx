
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Zap, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-poplar">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-walnut text-poplar mb-4">Our Story</Badge>
          <h2 className="text-4xl md:text-5xl font-playfair text-walnut mb-6">
            Rooted in Tradition.
            <span className="text-cherry block">Built with Tech.</span>
          </h2>
          <p className="text-xl text-walnut/80 max-w-3xl mx-auto leading-relaxed">
            From military service to master craftsman, our founder discovered the perfect blend 
            of time-honored woodworking traditions and cutting-edge digital fabrication.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story Content */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-walnut/90 leading-relaxed">
                TnKr Workshop was born from a deep appreciation for both traditional craftsmanship 
                and modern innovation. Our founder, a proud veteran, was inspired by the intricate 
                art of basket weaving and saw an opportunity to preserve this ancient craft through 
                modern technology.
              </p>
              <p className="text-walnut/90 leading-relaxed">
                What started as a fascination with basket weaving evolved into a mission: creating 
                premium wooden and PLA basket bases that honor traditional techniques while 
                leveraging CNC precision and 3D printing capabilities.
              </p>
              <p className="text-walnut/90 leading-relaxed">
                Today, we're a family-run operation that takes pride in every piece we create, 
                from our signature basket bases to our stunning hardwood cutting boards with 
                contrasting wood inlays.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Badge className="bg-maker-blue text-poplar">
                <Award className="w-4 h-4 mr-2" />
                Veteran Owned
              </Badge>
              <Badge className="bg-maker-green text-poplar">
                <Users className="w-4 h-4 mr-2" />
                Family Business
              </Badge>
              <Badge className="bg-cherry text-poplar">
                <Heart className="w-4 h-4 mr-2" />
                Handcrafted Quality
              </Badge>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-oak/30 to-walnut/30 rounded-2xl flex items-center justify-center shadow-xl">
              <div className="text-center text-walnut p-8">
                <div className="w-24 h-24 bg-walnut/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-12 h-12 text-walnut" />
                </div>
                <h3 className="text-2xl font-playfair mb-2">Placeholder — Workshop Photo</h3>
                <p className="text-walnut/70">Founder and Family in Workshop</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-oak/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-cherry/20 rounded-full blur-xl"></div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white/50 border-walnut/20 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-walnut rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-poplar" />
              </div>
              <h3 className="text-xl font-playfair text-walnut mb-2">Military Precision</h3>
              <p className="text-walnut/80">
                Our veteran background brings discipline, attention to detail, and unwavering 
                commitment to quality in every piece we create.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/50 border-walnut/20 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-cherry rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-poplar" />
              </div>
              <h3 className="text-xl font-playfair text-walnut mb-2">Family Values</h3>
              <p className="text-walnut/80">
                As a family-run business, we treat every customer like family and put love 
                and care into each handcrafted piece.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/50 border-walnut/20 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-maker-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-poplar" />
              </div>
              <h3 className="text-xl font-playfair text-walnut mb-2">Innovation Meets Tradition</h3>
              <p className="text-walnut/80">
                We honor traditional woodworking while embracing modern CNC and 3D printing 
                technology for unmatched precision.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
