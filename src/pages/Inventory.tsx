import { useState, useMemo } from "react";
import { cars, brands, formatPrice } from "@/data/cars";
import CarCard from "@/components/CarCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const priceMax = 130000000;

const Inventory = () => {
  const [brand, setBrand] = useState("all");
  const [maxPrice, setMaxPrice] = useState(priceMax);

  const filtered = useMemo(
    () =>
      cars.filter(
        (c) => (brand === "all" || c.brand === brand) && c.price <= maxPrice
      ),
    [brand, maxPrice]
  );

  const resetFilters = () => {
    setBrand("all");
    setMaxPrice(priceMax);
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-card border-b border-border">
        <div className="container mx-auto px-4 md:px-8 py-14">
          <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-2">Our Showroom</p>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground">Vehicle Inventory</h1>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 py-10">
        {/* Filters */}
        <div className="flex flex-wrap items-end gap-6 mb-10 p-6 rounded-lg bg-card border border-border">
          <div className="w-full sm:w-48">
            <label className="text-muted-foreground text-xs uppercase tracking-wider mb-2 block">Brand</label>
            <Select value={brand} onValueChange={setBrand}>
              <SelectTrigger className="bg-secondary border-border">
                <SelectValue placeholder="All Brands" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Brands</SelectItem>
                {brands.map((b) => (
                  <SelectItem key={b} value={b}>{b}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="w-full sm:w-64">
            <label className="text-muted-foreground text-xs uppercase tracking-wider mb-2 block">
              Max Price: {formatPrice(maxPrice)}
            </label>
            <Slider
              value={[maxPrice]}
              onValueChange={([v]) => setMaxPrice(v)}
              max={priceMax}
              min={10000000}
              step={5000000}
              className="mt-3"
            />
          </div>
          <Button variant="ghost" size="sm" className="text-muted-foreground" onClick={resetFilters}>
            <X className="w-4 h-4 mr-1" /> Reset
          </Button>
        </div>

        <p className="text-muted-foreground text-sm mb-6">{filtered.length} vehicle{filtered.length !== 1 ? "s" : ""} found</p>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No vehicles match your criteria.</p>
            <Button variant="outline" className="mt-4 border-primary/50 text-primary" onClick={resetFilters}>
              Reset Filters
            </Button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Inventory;
