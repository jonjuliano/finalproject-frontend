import { Link, useLoaderData } from "react-router-dom";
import DrinkCard from "../../Components/DrinkCard";

export default function Filter() {
    const drinks = useLoaderData();

    return (
        <div className="row">
        {drinks.drinks.map((drink) => {
            return <DrinkCard id={drink.idDrink} 
            name={drink.strDrink} 
            img={drink.strDrinkThumb} 
            key={drink.idDrink} 
            >
                <div>
                <Link to={`/drink/${drink.idDrink}`} className="btn btn-primary">
                    Drink Details
                </Link>
                </div>
            </DrinkCard>;
        })}
        </div>
    )
}