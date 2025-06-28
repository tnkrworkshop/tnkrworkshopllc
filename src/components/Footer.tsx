
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, ShoppingCart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { platform: "Facebook", handle: "@tnkrworkshopllc", url: "#" },
    { platform: "Instagram", handle: "@tnkrworkshopllc", url: "#" },
    { platform: "Pinterest", handle: "@tnkrworkshopllc", url: "#" },
    { platform: "YouTube", handle: "@tnkrworkshopllc", url: "#" },
    { platform: "X (Twitter)", handle: "@tnkrworkshopllc", url: "#" },
    { platform: "TikTok", handle: "@tnkrworkshopllc", url: "#" }
  ];

  return (
    <footer id="contact" className="bg-maker-blue text-poplar">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 bg-oak rounded-lg flex items-center justify-center">
                <span className="font-pacifico text-maker-blue text-xl">T</span>
              </div>
              <div>
                <h3 className="font-pacifico text-2xl text-oak">TnKr Workshop</h3>
                <p className="text-sm text-poplar/80">Craft Meets Code</p>
              </div>
            </div>
            <p className="text-poplar/90 mb-6 leading-relaxed">
              Veteran-owned, family-run woodworking shop specializing in premium 
              basket bases and cutting boards with modern precision.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-cherry text-poplar">Veteran Owned</Badge>
              <Badge className="bg-slate-600 text-poplar">Family Run</Badge>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-xl mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-poplar/80 hover:text-oak transition-colors">About Us</a></li>
              <li><a href="#products" className="text-poplar/80 hover:text-oak transition-colors">Our Products</a></li>
              <li><a href="#testimonials" className="text-poplar/80 hover:text-oak transition-colors">Customer Reviews</a></li>
              <li><a href="#" className="text-poplar/80 hover:text-oak transition-colors">Custom Orders</a></li>
              <li><a href="#" className="text-poplar/80 hover:text-oak transition-colors">Workshop Gallery</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-playfair text-xl mb-4">Our Products</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-poplar/80 hover:text-oak transition-colors">CNC Wooden Bases</a></li>
              <li><a href="#" className="text-poplar/80 hover:text-oak transition-colors">3D-Printed PLA Bases</a></li>
              <li><a href="#" className="text-poplar/80 hover:text-oak transition-colors">Hardwood Cutting Boards</a></li>
              <li><a href="#" className="text-poplar/80 hover:text-oak transition-colors">Custom Designs</a></li>
              <li>
                <Button className="bg-cherry hover:bg-cherry/90 text-poplar mt-2">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Shop on Amazon
                </Button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair text-xl mb-4">Contact Us</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-oak" />
                <span className="text-poplar/80">info@tnkrworkshop.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-oak" />
                <span className="text-poplar/80">(555) 123-TNKR</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-oak" />
                <span className="text-poplar/80">Proudly Made in USA</span>
              </div>
            </div>

            <h5 className="font-medium mb-3">Follow Us</h5>
            <div className="grid grid-cols-2 gap-2">
              {socialLinks.map((social) => (
                <a 
                  key={social.platform}
                  href={social.url}
                  className="text-sm text-poplar/70 hover:text-oak transition-colors"
                >
                  {social.platform}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-poplar/20" />

      {/* Footer Bottom */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-poplar/80 text-sm">
              © 2024 TnKr Workshop LLC. All rights reserved.
            </p>
            <p className="text-poplar/60 text-xs mt-1">
              Veteran-Owned • Family-Run • Made with ❤️ in the USA
            </p>
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-poplar/80 hover:text-oak transition-colors">Privacy Policy</a>
            <a href="#" className="text-poplar/80 hover:text-oak transition-colors">Terms of Service</a>
            <a href="#" className="text-poplar/80 hover:text-oak transition-colors">Shipping Info</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
