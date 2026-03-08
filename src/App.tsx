import { BrowserRouter, Route, Routes } from "react-router"
import { useEffect, useState } from "react";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PagenotFound from "./pages/PagenotFound";
import CityList from "./components/CityList"

const BASE_URL = "https//localhost:8000";

function App () {

  interface  City {
    name: string;
    id:number;
  }

  const [cities, setCities] = useState<City[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect (function () {
    async function fetchCities () {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();\
        setCities(data);
      } catch {
        alert("There was an error")
      } finally {
        setIsLoading(false);
      }
    } 
  })
  return (
     <BrowserRouter>
     <Routes>
      <Route index element={<Homepage />} />
      <Route path="product" element="{<Product />}" />
       <Route path="pricing" element="{<Pricing />}" />
        <Route path="/login" element="{<Login />}" />
         <Route path="app" element="{<AppLayout />}" />
         <Route path="cities" element={<CityList cities={cities} isLoading={isLoading} />}
      
     </Routes>
     </BrowserRouter>
  )
}

export default App