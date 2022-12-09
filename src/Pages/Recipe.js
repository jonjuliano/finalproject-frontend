import { useEffect } from "react";
import { Form, Link, Outlet, useLoaderData } from "react-router-dom";
import Header from "../Components/Header";

export default function Recipe() {
    const data = useLoaderData();
    const drink = data.drinks[0]
    const drinkInfo = {
        name: drink.strDrink,
        id: drink.idDrink,
        glass: drink.strGlass,
        ins: drink.strInstructions,
        img: drink.strDrinkThumb,
        ing: [
            drink.strIngredient1,
            drink.strIngredient2,
            drink.strIngredient3, 
            drink.strIngredient4,
            drink.strIngredient5,
            drink.strIngredient6,
            drink.strIngredient7,
            drink.strIngredient8,
            drink.strIngredient9,
            drink.strIngredient10,
            drink.strIngredient11,
            drink.strIngredient12,
            drink.strIngredient13,
            drink.strIngredient14,
            drink.strIngredient15
        ],
        meas: [
            drink.strMeasure1,
            drink.strMeasure2,
            drink.strMeasure3,
            drink.strMeasure4,
            drink.strMeasure5,
            drink.strMeasure6,
            drink.strMeasure7,
            drink.strMeasure8,
            drink.strMeasure9,
            drink.strMeasure10,
            drink.strMeasure11,
            drink.strMeasure12,
            drink.strMeasure13,
            drink.strMeasure14,
            drink.strMeasure15
        ]
    }
    const ingredients = drinkInfo.ing.filter(drink => drink !== null);
    const measures = drinkInfo.meas.filter(drink => drink !== null);

    console.log(drink)
    

    useEffect(() => {
        document.title = drinkInfo.name + " Details";
    }, [drinkInfo.name]);

    return <>
        <Header>
            <h2>about this drink</h2>
        </Header>

        <div className="recipe-page p-3 pt-0 bg-white">
            <div className="text-center">
                <h1>{drinkInfo.name}</h1>
                <img className="col-sm-5 rounded" src={drinkInfo.img} alt="" />
                <p><strong>Glass Used:</strong><br/>{drinkInfo.glass}</p>
                <p><strong>Ingredients:</strong><br/>
                {ingredients.map((m, i) => {

                    if (measures[i] === undefined) {measures[i] = ""}
                    
                    return [
                    measures[i] + ' ' + m] }).join(', ')}
                </p>
                <p><strong>Instructions:</strong><br/>{drinkInfo.ins}</p>
            </div>

            <div className="mb-4">
                <Form className="d-inline" method="post" action={`/drink/${drinkInfo.id}/favorites/add`}>
                    <input type="hidden" name="name" value={drinkInfo.name} />
                    <input type="hidden" name="img" value={drinkInfo.img} />
                    <button type="" className="btn btn-sm btn-success">Add to Home Page</button>
                </Form>
            </div>
                            

            <div><h4>Here's what others think:</h4>
            <p><Link to={`/drink/${drinkInfo.id}/comments`}>View Comments</Link></p></div>

            <Outlet />
        </div>


    </>
}