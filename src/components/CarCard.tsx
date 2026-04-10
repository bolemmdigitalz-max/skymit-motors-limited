import { Link } from "react-router-dom";
import { Car, formatPrice } from "@/data/cars";
import { Badge } from "@/components/ui/badge";
import { Fuel, Gauge, Settings2 } from "lucide-react";

const CarCard = ({ car }: { car: Car }) => (
  <Link to={`/car/${car.id}`} className="group block">
    <div className="bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(180,150,50,0.1)]">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={car.images[0]}
          alt={`${car.brand} ${car.model}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        {car.isNew && (
          <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">Brand New</Badge>
        )}
      </div>
      <div className="p-5">
        <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-1">{car.brand}</p>
        <h3 className="text-foreground font-display text-lg font-semibold mb-1">{car.model}</h3>
        <p className="text-primary font-bold text-xl mb-4">{formatPrice(car.price)}</p>
        <div className="flex items-center gap-4 text-muted-foreground text-xs">
          <span className="flex items-center gap-1"><Gauge className="w-3.5 h-3.5" /> {car.mileage}</span>
          <span className="flex items-center gap-1"><Fuel className="w-3.5 h-3.5" /> {car.fuel}</span>
          <span className="flex items-center gap-1"><Settings2 className="w-3.5 h-3.5" /> {car.transmission}</span>
        </div>
      </div>
    </div>
  </Link>
);

export default CarCard;
