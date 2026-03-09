import React from "react";
import styles from "./CountryItem.module.css";

// 1. Define the shape of a single Country
interface Country {
  emoji: string;
  country: string;
}

// 2. Define the Props interface (expecting a 'country' object)
interface CountryItemProps {
  country: Country;
}

// 3. Destructure 'country' and assign 'CountryItemProps' as the type for the whole object
function CountryItem({ country }: CountryItemProps) {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;