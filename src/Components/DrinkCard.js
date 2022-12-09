export default function DrinkCard(props) {

    return (
            <div className="col-sm-3">
                <div className="card text-center mb-3 "  >
                    <div className="bg-dark">
                    <img className="card-img-top opacity-50 " src={props.img} alt="" />
                    <div className="card-img-overlay mb-5 text-white">
                        <h5 className="card-title">{props.name}</h5>
                    </div>
                    </div>
                    
                    <div className="card-body">
                        {props.children}
                    </div>
                </div>
            </div>
    )
}