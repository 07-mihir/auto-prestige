import car1 from "@/assets/car-1.jpg";
import car2 from "@/assets/car-2.jpg";
import car3 from "@/assets/car-3.jpg";
import car4 from "@/assets/car-4.jpg";
import car5 from "@/assets/car-5.jpg";
import car6 from "@/assets/car-6.jpg";

export type Car = {
  id: string;
  brand: string;
  model: string;
  variant: string;
  year: number;
  price: number;
  emi: number;
  km: number;
  fuel: "Petrol" | "Diesel" | "Electric" | "Hybrid" | "CNG";
  transmission: "Manual" | "Automatic";
  owners: number;
  city: string;
  bodyType: "Sedan" | "SUV" | "Hatchback" | "Coupe" | "MUV";
  color: string;
  image: string;
  badge?: "Featured" | "Certified" | "Hot Deal" | "New" | "Auction";
  seller: "Dealer" | "Owner";
  verified: boolean;
  rating: number;
};

export const cars: Car[] = [
  { id: "1", brand: "BMW", model: "5 Series", variant: "530i M Sport", year: 2022, price: 4850000, emi: 78900, km: 18200, fuel: "Petrol", transmission: "Automatic", owners: 1, city: "Mumbai", bodyType: "Sedan", color: "Mineral White", image: car1, badge: "Certified", seller: "Dealer", verified: true, rating: 4.8 },
  { id: "2", brand: "Mercedes-Benz", model: "GLE", variant: "300d 4MATIC", year: 2021, price: 6890000, emi: 102400, km: 24500, fuel: "Diesel", transmission: "Automatic", owners: 1, city: "Delhi", bodyType: "SUV", color: "Polar White", image: car2, badge: "Featured", seller: "Dealer", verified: true, rating: 4.9 },
  { id: "3", brand: "Volkswagen", model: "Polo", variant: "GT TSI", year: 2020, price: 890000, emi: 15800, km: 32000, fuel: "Petrol", transmission: "Automatic", owners: 2, city: "Bengaluru", bodyType: "Hatchback", color: "Flash Red", image: car3, badge: "Hot Deal", seller: "Owner", verified: true, rating: 4.5 },
  { id: "4", brand: "Hyundai", model: "Ioniq 5", variant: "Long Range", year: 2023, price: 4290000, emi: 71200, km: 9800, fuel: "Electric", transmission: "Automatic", owners: 1, city: "Pune", bodyType: "Sedan", color: "Lucid Blue", image: car4, badge: "New", seller: "Dealer", verified: true, rating: 4.7 },
  { id: "5", brand: "Land Rover", model: "Discovery", variant: "HSE 3.0", year: 2021, price: 7290000, emi: 118500, km: 28000, fuel: "Diesel", transmission: "Automatic", owners: 1, city: "Hyderabad", bodyType: "SUV", color: "Eiger Grey", image: car5, badge: "Featured", seller: "Dealer", verified: true, rating: 4.8 },
  { id: "6", brand: "Mercedes-Benz", model: "C-Class", variant: "C 220d AMG Line", year: 2022, price: 5290000, emi: 88200, km: 16500, fuel: "Diesel", transmission: "Automatic", owners: 1, city: "Chennai", bodyType: "Coupe", color: "Obsidian Black", image: car6, badge: "Auction", seller: "Dealer", verified: true, rating: 4.9 },
];

export const formatPrice = (n: number) => {
  if (n >= 10000000) return `₹${(n / 10000000).toFixed(2)} Cr`;
  if (n >= 100000) return `₹${(n / 100000).toFixed(2)} L`;
  return `₹${n.toLocaleString("en-IN")}`;
};

export const brands = ["BMW", "Mercedes-Benz", "Audi", "Porsche", "Volkswagen", "Hyundai", "Toyota", "Honda", "Land Rover", "Tata"];
export const cities = ["Mumbai", "Delhi", "Bengaluru", "Pune", "Hyderabad", "Chennai", "Kolkata", "Ahmedabad"];
