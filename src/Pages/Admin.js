import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Header from "../Components/Header";

export default function Admin() {
    const data = useLoaderData()
    const favorites = data.data
	const [isCheckAll, setIsCheckAll] = useState(false);
	const [isCheck, setIsCheck] = useState([]);
	const [list, setList] = useState([])

    useEffect(() => {
        document.title = "Admin";
		setList(favorites);
    }, [list]);

	const handleSelectAll = e => {
		setIsCheckAll(!isCheckAll);
		setIsCheck(list.map(li => li.id));
		if (isCheckAll) {
			setIsCheck([]);
		}
	};

	const handleClick = e => {
		const { id, checked } = e.target;
		setIsCheck([...isCheck, id]);
		if (!checked) {
			setIsCheck(isCheck.filter(item => item !== id));
		}
	}

	console.log(isCheck)
	

	


    return (<>
        <Header>
            <h2>Admin</h2>
        </Header>

        <div className="p-4 bg-white ">
            <table className="table table-hover">
                <thead>
                    <tr className="table-row">
                    <th scope="col" className="table-head"><input type="checkbox" className="form-check-input"  onChange={handleSelectAll} checked={isCheckAll} /></th>
                    <th scope="col" className="table-head">Name</th>
                    <th scope="col" className="table-head">Drink ID</th>
                    <th scope="col" className="table-head text-center">Drink Details</th>
                    </tr>
                </thead>
                <tbody>
                    {favorites.map((favorite) => {
                        return <tr key={favorite.id} className="table-row">
                            <td className="table-data">
                                <input type="checkbox" id={favorite.id} name={favorite.attributes.name} className="form-check-input" onChange={handleClick} checked={isCheck.includes(favorite.id)}/>
                            </td>
                            <td className="table-data">{favorite.attributes.name}</td>
                            <td className="table-data">{favorite.attributes.idDrink}</td>
                            <td className="text-center table-data"><Link to={`/drink/${favorite.attributes.idDrink}`}>View</Link></td>
                        </tr>
                    })}
                
                </tbody>
            </table>
            <input
				id="multiple_deletion"
				type="submit"
				className="submit-input btn btn-danger"
				value="Delete"
			/>
			
        </div>
    </>)

	
    
}