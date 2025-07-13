import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Zap, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-poplar">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-maker-blue text-poplar mb-4">Our Story</Badge>
          <h2 className="text-4xl md:text-5xl font-playfair text-maker-blue mb-6">
            Rooted in Tradition.
            <span className="text-maker-green block">Built with Tech.</span>
          </h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
            TnKr Workshop started with a simple idea: combine lifelong woodworking skills with modern digital tools to help a loved one weave baskets.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story Content */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-700 leading-relaxed">
                Founded by a U.S. Veteran with over 30 years of IT experience, and inspired by family roots in woodworking, we're all about mixing old-school craft with cutting-edge CNC and 3D printing.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Every piece we make carries our family's pride and a touch of maker magic — because we believe beautiful, functional designs should feel as personal as they do practical.
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
              <Badge className="bg-slate-600 text-poplar">
                <Heart className="w-4 h-4 mr-2" />
                Handcrafted Quality
              </Badge>
            </div>
          </div>

          {/* Workshop Photo */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={`${import.meta.env.BASE_URL}lovable-uploads/f4b66418-daf5-4b6a-95c5-a988e3950557.png`}
                alt="TnKr Workshop - Founder working with CNC machine in workshop"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-oak/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-maker-green/20 rounded-full blur-xl"></div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white/50 border-maker-blue/20 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-maker-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-poplar" />
              </div>
              <h3 className="text-xl font-playfair text-maker-blue mb-2">Military Precision</h3>
              <p className="text-slate-700">
                Our veteran background brings discipline, attention to detail, and unwavering 
                commitment to quality in every piece we create.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/50 border-maker-blue/20 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-maker-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-poplar" />
              </div>
              <h3 className="text-xl font-playfair text-maker-blue mb-2">Family Values</h3>
              <p className="text-slate-700">
                As a family-run business, we treat every customer like family and put love 
                and care into each handcrafted piece.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/50 border-maker-blue/20 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-poplar" />
              </div>
              <h3 className="text-xl font-playfair text-maker-blue mb-2">Innovation Meets Tradition</h3>
              <p className="text-slate-700">
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
