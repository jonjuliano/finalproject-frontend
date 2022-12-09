import { useEffect, useState } from "react";
import { Link, Outlet} from "react-router-dom";
import Header from "../../Components/Header";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function Drinks() {
    const [alcohol, setAlcohol] = useState("");
    
    useEffect(() => {
        document.title = alcohol + " Drinks";
    }, [alcohol]);

    return (<>
    <Header>
         <h2>switching it up?</h2>
    </Header>

    <div className="drinks-page p-3 pt-0 bg-white">
        <div className="row mb-2">
            <div className="col-sm-4">
                <h4>Select an alcohol:</h4>
            </div>
            <div className="col-sm-1">
                <DropdownButton
                variant="light"
                title="--Options--"
                className=""
                >
                
                    <Link to={`/drinks/gin`} className="text-decoration-none" ><Dropdown.Item as="button" onClick={()=>{setAlcohol("Gin")}}>
                        Gin
                    </Dropdown.Item></Link>
                    

                    <Link to={"/drinks/vodka"} className="text-decoration-none" >
                    <Dropdown.Item as="button" 
                    onClick={()=>{setAlcohol("Vodka")}}>
                        Vodka</Dropdown.Item>
                    </Link>

                    <Link to={"/drinks/tequila"} className="text-decoration-none">
                        <Dropdown.Item  as="button" onClick={()=>{setAlcohol("Tequila")}}>Tequila</Dropdown.Item>
                    </Link>

                    <Link to={"/drinks/rum"} className="text-decoration-none">
                        <Dropdown.Item as="button" onClick={()=>{setAlcohol("Rum")}}>Rum</Dropdown.Item>
                    </Link>

                    <Link to={"/drinks/bourbon"} className="text-decoration-none">
                        <Dropdown.Item as="button" onClick={()=>{setAlcohol("Bourbon")}}>Bourbon</Dropdown.Item>
                    </Link>

                    <Link to={"/drinks/blended_whiskey"} className="text-decoration-none">
                        <Dropdown.Item as="button" onClick={()=>{setAlcohol("Blended Whiskey")}}>Blended whiskey</Dropdown.Item>
                    </Link>

                    <Link to={"/drinks/irish_whiskey"} className="text-decoration-none">
                        <Dropdown.Item as="button" onClick={()=>{setAlcohol("Irish Whiskey")}}>Irish whiskey</Dropdown.Item>
                    </Link>

                    <Link to={"/drinks/scotch"} className="text-decoration-none">
                        <Dropdown.Item as="button" onClick={()=>{setAlcohol("Scotch")}}>Scotch</Dropdown.Item>
                    </Link>

                    <Link to={"/drinks/brandy"} className="text-decoration-none">
                        <Dropdown.Item as="button" onClick={()=>{setAlcohol("Brandy")}}>Brandy</Dropdown.Item>
                    </Link>
                </DropdownButton>
      </div>
    </div>

        <div className="text-center"><h4>Search results for "{alcohol}"</h4></div>
        <Outlet />
    </div>
    </>);
}