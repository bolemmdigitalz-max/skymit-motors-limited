import { useParams, Link } from "react-router-dom";
import { cars, formatPrice } from "@/data/cars";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Fuel, Gauge, Settings2, Palette, Calendar, MessageCircle, Check } from "lucide-react";
import { useState } from "react";

const CarDetails = () => {
  const { id } = useParams();
  const car = cars.find((c) => c.id === id);
  const [activeImg, setActiveImg] = useState(0);

  if (!car) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl text-foreground mb-4">Vehicle Not Found</h1>
          <Link to="/inventory">
            <Button className="bg-primary text-primary-foreground">Back to Inventory</Button>
          </Link>
        </div>
      </div>
    );
  }

  const whatsappUrl = `https://wa.me/2347042783726?text=Hello%20Royal%20Autos%2C%20I%27m%20interested%20in%20the%20${encodeURIComponent(car.year + " " + car.brand + " " + car.model)}%20(${formatPrice(car.price)}).`;

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 md:px-8 py-8">
        <Link to="/inventory" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Inventory
        </Link>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Gallery */}
          <div>
            <div className="aspect-[16/10] rounded-lg overflow-hidden mb-4">
              <img
                src={car.images[activeImg]}
                alt={`${car.brand} ${car.model}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {car.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`aspect-[16/10] rounded-md overflow-hidden border-2 transition-colors ${
                    i === activeImg ? "border-primary" : "border-transparent hover:border-border"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">{car.brand}</p>
              {car.isNew && <Badge className="bg-primary text-primary-foreground">Brand New</Badge>}
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              {car.year} {car.model}
            </h1>
            <p className="text-primary font-bold text-3xl mb-6">{formatPrice(car.price)}</p>

            <p className="text-muted-foreground leading-relaxed mb-8">{car.description}</p>

            {/* Specs */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: Gauge, label: "Mileage", value: car.mileage },
                { icon: Fuel, label: "Fuel", value: car.fuel },
                { icon: Settings2, label: "Transmission", value: car.transmission },
                { icon: Palette, label: "Color", value: car.color },
                { icon: Calendar, label: "Year", value: car.year.toString() },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border">
                  <s.icon className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <p className="text-muted-foreground text-xs">{s.label}</p>
                    <p className="text-foreground text-sm font-medium">{s.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">Key Features</h3>
              <div className="flex flex-wrap gap-2">
                {car.features.map((f) => (
                  <span key={f} className="flex items-center gap-1.5 text-sm text-muted-foreground bg-secondary px-3 py-1.5 rounded-full">
                    <Check className="w-3.5 h-3.5 text-primary" /> {f}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block">
              <Button size="lg" className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90 text-base">
                <MessageCircle className="w-5 h-5" /> Inquire on WhatsApp
              </Button>
            </a>
            <p className="text-muted-foreground text-xs text-center mt-3">
              Or call us at +234 704 278 3726
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
