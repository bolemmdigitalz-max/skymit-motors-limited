export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: string;
  fuel: string;
  transmission: string;
  color: string;
  images: string[];
  features: string[];
  description: string;
  isNew: boolean;
}

export const cars: Car[] = [
  {
    id: "1",
    brand: "Mercedes-Benz",
    model: "S-Class S580",
    year: 2024,
    price: 85000000,
    mileage: "0 km",
    fuel: "Petrol",
    transmission: "Automatic",
    color: "Obsidian Black",
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&q=80",
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80",
    ],
    features: ["Panoramic Roof", "Burmester Sound", "Massage Seats", "Night Vision", "MBUX Infotainment"],
    description: "The pinnacle of luxury sedans. This brand new 2024 Mercedes-Benz S-Class S580 offers unparalleled comfort, cutting-edge technology, and a presence that commands respect on Lagos roads.",
    isNew: true,
  },
  {
    id: "2",
    brand: "BMW",
    model: "X7 xDrive40i",
    year: 2024,
    price: 72000000,
    mileage: "0 km",
    fuel: "Petrol",
    transmission: "Automatic",
    color: "Alpine White",
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&q=80",
    ],
    features: ["Sky Lounge Panoramic Roof", "Harman Kardon Sound", "Gesture Control", "Parking Assistant Plus", "Adaptive LED Headlights"],
    description: "Command attention with the BMW X7. This full-size luxury SUV blends powerful performance with sophisticated design, perfect for Nigerian executives who demand the best.",
    isNew: true,
  },
  {
    id: "3",
    brand: "Range Rover",
    model: "Autobiography LWB",
    year: 2024,
    price: 120000000,
    mileage: "0 km",
    fuel: "Petrol",
    transmission: "Automatic",
    color: "Santorini Black",
    images: [
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80",
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80",
      "https://images.unsplash.com/photo-1562911791-c7a97b729ec5?w=800&q=80",
    ],
    features: ["Executive Class Rear Seats", "Meridian Signature Sound", "Pixel LED Headlights", "Rear Entertainment", "Air Suspension"],
    description: "The ultimate expression of luxury SUV refinement. The Range Rover Autobiography Long Wheelbase is the vehicle of choice for Nigeria's elite.",
    isNew: true,
  },
  {
    id: "4",
    brand: "Lexus",
    model: "LX 600",
    year: 2024,
    price: 95000000,
    mileage: "0 km",
    fuel: "Petrol",
    transmission: "Automatic",
    color: "Nori Green Pearl",
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
      "https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80",
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80",
    ],
    features: ["Mark Levinson Audio", "Fingerprint Authentication", "Multi-Terrain Select", "Heads-Up Display", "Rear Seat Entertainment"],
    description: "Legendary reliability meets uncompromising luxury. The Lexus LX 600 delivers exceptional performance and comfort for any terrain Lagos throws at it.",
    isNew: true,
  },
  {
    id: "5",
    brand: "Mercedes-Benz",
    model: "GLE 450 AMG Line",
    year: 2023,
    price: 55000000,
    mileage: "12,000 km",
    fuel: "Petrol",
    transmission: "Automatic",
    color: "Selenite Grey",
    images: [
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&q=80",
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80",
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80",
    ],
    features: ["AMG Body Kit", "Burmester Sound", "360 Camera", "Active Parking Assist", "Ambient Lighting"],
    description: "A pre-owned gem in excellent condition. This Mercedes-Benz GLE 450 with AMG Line package combines sporty elegance with SUV versatility.",
    isNew: false,
  },
  {
    id: "6",
    brand: "Toyota",
    model: "Land Cruiser 300",
    year: 2024,
    price: 68000000,
    mileage: "0 km",
    fuel: "Diesel",
    transmission: "Automatic",
    color: "Precious White",
    images: [
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&q=80",
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&q=80",
    ],
    features: ["Multi-Terrain Monitor", "JBL Premium Sound", "Crawl Control", "Kinetic Dynamic Suspension", "Toyota Safety Sense"],
    description: "The legendary Land Cruiser, reborn. Built to conquer any terrain while keeping you in absolute comfort. A favourite among Lagos power players.",
    isNew: true,
  },
  {
    id: "7",
    brand: "Porsche",
    model: "Cayenne Turbo GT",
    year: 2024,
    price: 110000000,
    mileage: "0 km",
    fuel: "Petrol",
    transmission: "Automatic",
    color: "Carrara White",
    images: [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800&q=80",
      "https://images.unsplash.com/photo-1514867644123-6385d58d3cd4?w=800&q=80",
    ],
    features: ["Sport Chrono Package", "PASM Active Suspension", "Bose Surround Sound", "Sport Exhaust", "Carbon Ceramic Brakes"],
    description: "Raw performance meets luxury SUV. The Cayenne Turbo GT is the ultimate expression of Porsche engineering, designed for those who refuse to compromise.",
    isNew: true,
  },
  {
    id: "8",
    brand: "BMW",
    model: "7 Series 740i",
    year: 2023,
    price: 62000000,
    mileage: "8,500 km",
    fuel: "Petrol",
    transmission: "Automatic",
    color: "Tanzanite Blue",
    images: [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?w=800&q=80",
      "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?w=800&q=80",
      "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&q=80",
    ],
    features: ["Theatre Screen", "Executive Lounge", "Bowers & Wilkins Diamond Sound", "Automatic Doors", "Crystal Headlights"],
    description: "The new BMW 7 Series redefines luxury motoring. With its theatre screen and executive lounge seating, every journey becomes a first-class experience.",
    isNew: false,
  },
];

export const brands = [...new Set(cars.map((c) => c.brand))];

export const formatPrice = (price: number) => {
  return "₦" + price.toLocaleString();
};
