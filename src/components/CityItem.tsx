import styles from './CityItem.module.css';

interface City {
cityName: string;
    id: number;
    emoji: string;
    date: string;
}

interface CityItemProps {
    city: City;
}

function CityItem({ city }: CityItemProps) {
    const { emoji, cityName, date } = city;

    return (
        <li className={styles.cityItem}>
            <span className={styles.emoji}>{emoji}</span>
            <h3 className={styles.name}>{cityName}</h3>
            <time className={styles.date}>{date}</time>
            
        </li>
    );
}

export default CityItem;
