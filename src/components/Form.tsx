import React, { useState, ChangeEvent } from "react";
import styles from "./Form.module.css";

// 1. Type the helper function
// countryCode is a string, and it returns a string (the emoji)
export function convertToEmoji(countryCode: string): string {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt(0)); // charCodeAt needs an index, usually 0
  return String.fromCodePoint(...codePoints);
}

function Form() {
  // 2. State Hooks with TypeScript
  // TS usually infers these correctly, but we can be explicit
  const [cityName, setCityName] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [date, setDate] = useState<Date | string>(new Date());
  const [notes, setNotes] = useState<string>("");

  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          // 3. Event Typing: ChangeEvent<HTMLInputElement>
          onChange={(e: ChangeEvent<HTMLInputElement>) => setCityName(e.target.value)}
          value={cityName}
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <input
          id="date"
          type="date" // Added type="date" for better UX and consistency
          onChange={(e: ChangeEvent<HTMLInputElement>) => setDate(e.target.value)}
          // If date is a Date object, it needs to be formatted to YYYY-MM-DD for input value
          value={date instanceof Date ? date.toISOString().split("T")[0] : date}
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          // 4. Event Typing: ChangeEvent<HTMLTextAreaElement>
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <button type="submit">Add</button>
        <button type="button">&larr; Back</button>
      </div>
    </form>
  );
}

export default Form;