import { Suspense } from "react";
import Books from "./components/homepage/Books";
import Hero from "./components/homepage/Hero";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center container mx-auto px-17 py-15">
      <Hero/>
      <Books/>
    </div>
  );
}
