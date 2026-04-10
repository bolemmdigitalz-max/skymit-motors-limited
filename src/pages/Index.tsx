import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cars, formatPrice } from "@/data/cars";
import CarCard from "@/components/CarCard";
import { ArrowRight, Shield, Star, Wrench, ChevronRight } from "lucide-react";

const Index = () => {
  const featured = cars.slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="relative container mx-auto px-4 md:px-8 pt-20">
          <div className="max-w-2xl">
            <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4 animate-fade-in">
              Premium Luxury Automobiles
            </p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Drive <span className="text-gradient-gold">Excellence</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-lg mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Skymit Motors Limited is Lagos' most trusted source for luxury vehicles. Experience automotive perfection.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Link to="/inventory">
                <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8">
                  View Inventory <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <a href="https://wa.me/2347042783726" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="gap-2 border-primary/50 text-primary hover:bg-primary/10 text-base px-8">
                  Contact Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-card">
        <div className="container mx-auto px-4 md:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "500+", label: "Cars Sold" },
            { value: "15+", label: "Years Experience" },
            { value: "50+", label: "Premium Brands" },
            { value: "4.9", label: "Customer Rating" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-primary font-display text-3xl md:text-4xl font-bold">{s.value}</p>
              <p className="text-muted-foreground text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="container mx-auto px-4 md:px-8 py-20">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-2">Our Collection</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Featured Vehicles</h2>
          </div>
          <Link to="/inventory" className="hidden md:flex items-center gap-1 text-primary text-sm font-medium hover:underline">
            View All <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Link to="/inventory">
            <Button variant="outline" className="border-primary/50 text-primary">View All Inventory</Button>
          </Link>
        </div>
      </section>

      {/* Why Us */}
      <section className="bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-8 py-20">
          <div className="text-center mb-14">
            <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-2">Why Choose Us</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground"><h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">The Skymit Motors Difference</h2></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Certified Quality", desc: "Every vehicle undergoes a rigorous 150-point inspection before it reaches our showroom floor." },
              { icon: Star, title: "Premium Selection", desc: "We curate only the finest luxury vehicles from trusted sources worldwide." },
              { icon: Wrench, title: "After-Sales Service", desc: "Our relationship doesn't end at purchase. Enjoy comprehensive servicing and maintenance support." },
            ].map((f) => (
              <div key={f.title} className="text-center p-8 rounded-lg border border-border bg-background hover:border-primary/30 transition-colors">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <f.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 md:px-8 py-20">
        <div className="relative rounded-2xl overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1920&q=80')" }}
          />
          <div className="absolute inset-0 bg-background/85" />
          <div className="relative text-center py-20 px-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Find Your Dream Car?</h2>
            <p className="text-muted-foreground text-lg max-w-lg mx-auto mb-8">
              Visit our showroom or reach out on WhatsApp. Our team is ready to help you drive home in luxury.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/inventory">
                <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8">
                  Browse Inventory <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <a href="https://wa.me/2347042783726" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 px-8">
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
