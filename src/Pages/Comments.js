import { Form, Link, Outlet, useLoaderData, useParams } from "react-router-dom";

export default function Comments() {
    const data = useLoaderData();
    const comments = data.data;
    const params = useParams();
    const drinkId = params.id;

    // console.log(comments);

    return (<div className="bg-white">
        <div className="border p-1 mb-3">
            <h5>Comments:</h5>

                {comments.map((comment) => {
                    return <div className="ms-3" key={comment.id}>
                        <p className="mb-0 d-inline">By <strong>{comment.attributes.name}</strong> on <i>{new Date(comment.attributes.createdAt).toLocaleString()}</i> - {comment.attributes.rating} out of 5</p>  
                            <Link to={`/drink/${drinkId}/comments/${comment.id}/edit`}><button className="btn btn-sm btn-link text-secondary">Edit</button></Link>

                            <Form className="d-inline" method="post" action={`/comments/${comment.id}/destroy`}>
                                <input type="hidden" name="drinkId" value={drinkId} />
                                <button type="" className="btn btn-sm btn-link text-danger">
                                    Delete
                                </button>
                            </Form>
                            
                            
                        <ul className="mb-1">
                            <li>"<i>{comment.attributes.body}</i>"
                            </li>

                            

                        </ul>
                    </div>
                })}
        <div className="mb-2 mt-2 text-end">
            <Link to={`/drink/${drinkId}/comments/submit`} className="m-3">
                Add Comment
            </Link>
        </div>
        </div>

        

        <Outlet />
        </div>
    );
}