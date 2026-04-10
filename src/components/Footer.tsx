import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => (
  <footer className="bg-card border-t border-border">
    <div className="container mx-auto px-4 md:px-8 py-16">
      <div className="grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-lg">R</span>
            </div>
            <h3 className="text-foreground font-display text-xl font-bold">Royal Autos</h3>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Lagos' premier luxury car dealership. We source the finest automobiles for Nigeria's most discerning clients.
          </p>
        </div>

        <div>
          <h4 className="text-primary font-display text-lg mb-4">Quick Links</h4>
          <div className="flex flex-col gap-3">
            <Link to="/" className="text-muted-foreground text-sm hover:text-primary transition-colors">Home</Link>
            <Link to="/inventory" className="text-muted-foreground text-sm hover:text-primary transition-colors">Inventory</Link>
            <Link to="/contact" className="text-muted-foreground text-sm hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>

        <div>
          <h4 className="text-primary font-display text-lg mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <div className="flex items-start gap-2"><MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" /> 32 Mobolaji Bank Anthony Way, Ikeja, Lagos</div>
            <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary shrink-0" /> +234 704 278 3726</div>
            <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary shrink-0" /> info@royalautos.ng</div>
          </div>
        </div>

        <div>
          <h4 className="text-primary font-display text-lg mb-4">Hours</h4>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary shrink-0" /> Mon - Fri: 9AM - 6PM</div>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary shrink-0" /> Saturday: 10AM - 4PM</div>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary shrink-0" /> Sunday: Closed</div>
          </div>
        </div>
      </div>

      <div className="border-t border-border mt-12 pt-8 text-center">
        <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} Royal Autos Ltd. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
