import styles from "./CityList.module.css";
import Spinner  from "./Spinner";
import CityItem from "./CityItem"

interface City {
    name: string;
    id: number;
    emoji: string;
    date: string;
}

export interface  UserProps {
    cities: City[];
    isLoading?: boolean;
}

function CityList({cities, isLoading}: UserProps) {
    if (isLoading) return <Spinner />;
    
    return (
        <ul className={styles.cityList}>
            {cities.map((city) => (
                <CityItem city={city} key={city.id} />
            ))}
        </ul>
    )
}
export default CityList
