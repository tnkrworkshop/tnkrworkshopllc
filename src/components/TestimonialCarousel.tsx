
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const TestimonialCarousel = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah M.",
      location: "Portland, OR",
      rating: 5,
      text: "The quality of the wooden basket base exceeded my expectations! The CNC precision is evident in every detail, and it's clear this is made by someone who truly cares about their craft.",
      product: "CNC Wooden Basket Base"
    },
    {
      id: 2,
      name: "Mike R.",
      location: "Austin, TX", 
      rating: 5,
      text: "As a fellow veteran, I appreciate the attention to detail and military precision that goes into each piece. The PLA bases are perfect for my basket weaving projects.",
      product: "3D-Printed PLA Base"
    },
    {
      id: 3,
      name: "Jennifer L.",
      location: "Nashville, TN",
      rating: 5,
      text: "The cutting board with contrasting wood inlays is absolutely stunning! It's both functional and a work of art. The customer service was exceptional too.",
      product: "Hardwood Cutting Board"
    },
    {
      id: 4,
      name: "David K.",
      location: "Denver, CO",
      rating: 5,
      text: "TnKr Workshop delivered exactly what they promised. The blend of traditional craftsmanship with modern technology results in superior products. Highly recommend!",
      product: "Custom Basket Base"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-poplar">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-maker-green text-poplar mb-4">Customer Reviews</Badge>
          <h2 className="text-4xl md:text-5xl font-playfair text-walnut mb-6">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-oak fill-oak" />
            ))}
            <span className="text-xl font-medium text-walnut ml-2">4.9/5 Rating</span>
          </div>
          <p className="text-lg text-walnut/80 max-w-2xl mx-auto">
            Don't just take our word for it – hear from satisfied customers who've experienced 
            the TnKr Workshop difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white/60 hover:bg-white transition-all duration-300 hover:shadow-lg border-walnut/10">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-oak fill-oak" />
                  ))}
                </div>
                
                <div className="relative mb-4">
                  <Quote className="w-6 h-6 text-cherry/30 absolute -top-2 -left-1" />
                  <p className="text-walnut/90 pl-6 leading-relaxed">
                    {testimonial.text}
                  </p>
                </div>

                <div className="border-t border-walnut/10 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-walnut">{testimonial.name}</h4>
                      <p className="text-sm text-walnut/70">{testimonial.location}</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-oak/20 text-walnut text-xs mt-2">
                    {testimonial.product}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-playfair text-cherry mb-2">500+</div>
              <p className="text-walnut/80">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-playfair text-maker-blue mb-2">4.9★</div>
              <p className="text-walnut/80">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-playfair text-maker-green mb-2">100%</div>
              <p className="text-walnut/80">Quality Guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
