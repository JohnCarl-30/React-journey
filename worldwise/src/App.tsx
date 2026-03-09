import { BrowserRouter, Route, Routes } from "react-router"
import { useEffect, useState } from "react";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PagenotFound from "./pages/PagenotFound";
import CityList from "./components/CityList"

const BASE_URL = "http://localhost:8000";

function App () {

  interface  City {
    name: string;
    id: number;
    emoji: string;
    date: string;
  }

  const [cities, setCities] = useState<City[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect (function () {
    async function fetchCities () {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("There was an error")
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, [])
  return (
     <BrowserRouter>
     <Routes>
      <Route index element={<Homepage />} />
      <Route path="product" element={<Product />} />
       <Route path="pricing" element={<Pricing />} />
         <Route path="app" element={<p>App Layout</p>} />
         <Route path="cities" element={<CityList cities={cities} isLoading={isLoading} />} />
         <Route path="form" element={<p>FOrm</p>} />
         <Route path="*" element={<PagenotFound />} />
      </Routes>
     </BrowserRouter>
  )
}

export default App