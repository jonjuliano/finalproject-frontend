import { useEffect } from "react";
import { Form, Link, useLoaderData } from "react-router-dom";
import DrinkCard from "../Components/DrinkCard";
import Header from "../Components/Header";

export default function Index() {
    const data = useLoaderData();
    const favorites = data.data;

    useEffect(() => {
        document.title = "Home";
    }, []);

    return (
        <>
        <Header>
            <h2>some recent choices</h2>
        </Header>

        <div className="home-page p-3 pt-4 bg-white">
            <div className="row ms-2 me-2 mb-4">
                <div className=" border border-dark rounded mx-auto p-1 text-center">
                    <p className="m-0 p-0 ">After a gruesome defeat by Yelp's stupid API and CORS Policy, I decided to switch the purpose of this app to my most favorite pasttime: <strong>drinking</strong>. Mind you, there's much to be improved, but for the main purposes of this app, you can fetch recipes, add/edit/remove comments, and choose favorites from the drinks and remove them on the home page.<br/>
                    On this home page is a list of favorites curated by me and others, but you're welcome to remove them as you like. You will, however, have to re-add these drinks later on, so user discretion advised. <i>Happy drinking.</i> :)</p>
                </div>
            </div>
            <div className="row">
                {favorites.map((favorite) => {
                    return <DrinkCard 
                    id={favorite.attributes.idDrink} 
                    name={favorite.attributes.name} 
                    img={favorite.attributes.img} 
                    key={favorite.id} 
                     >
                        <Link to={`/drink/${favorite.attributes.idDrink}`} className="btn btn-primary btn-sm m-1 col-sm-3$">
                            Info
                        </Link>

                        <Form className="d-inline" method="post" action={`/favorites/${favorite.id}/delete`}>
                            <button type="" className="btn-link text-danger m-1 btn">
                                Delete
                            </button>
                        </Form>
                    </DrinkCard>
                })}
            </div>
        </div>
        </>
    )
}