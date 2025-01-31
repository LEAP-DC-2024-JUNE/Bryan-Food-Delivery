"use client";
import { useState } from "react";

const Home = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const handleCart = (price: number): void => {
    console.log(`Quantity: ${quantity}`);
    console.log(`Total Price: ${quantity * price}`);
  };
  return <div>Food Delivery</div>;
};

export default Home;
