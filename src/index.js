import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css";
import { toast } from "react-toastify";
import { createBrowserRouter, redirect, RouterProvider} from 'react-router-dom';
import Index from './Pages/Index';
import Root from './Pages/Root';
import reportWebVitals from './reportWebVitals';
import Admin from './Pages/Admin';
import './index.css';
import { addComment, addFavorite, deleteComment, deleteFavorite, fetchComment, fetchComments, fetchDrinkDetails, fetchFavorites, fetchFilteredDrinks, updateComment, } from './api';
import Drinks from './Pages/Drinks/Root';
import Recipe from './Pages/Recipe';
import Filter from './Pages/Drinks/filter';
import NotFound from './Pages/NotFound';
import Comments from './Pages/Comments';
import NewComment from './Pages/NewComment';
import EditComment from './Pages/EditComment';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Index />,
        loader() {
          return fetchFavorites();
        }
      },      
      {
        path: "/admin",
        element: <Admin />,
        loader() {
          return fetchFavorites();
        }
      },
      {
        path: "/drinks",
        element: <Drinks />,
        children: [
          {
            path: "/drinks/:id",
            element: <Filter />,
            loader({params}) {
              return fetchFilteredDrinks(params.id);
            },
          }
        ]
      },
      {
        path: "/drink/:id",
        loader({params}) {
          return fetchDrinkDetails(params.id);
        },
        element: <Recipe />,
        children: [
          {
            path: "/drink/:id/comments",
            loader({params}) {
              return fetchComments(params.id);
              },
            element: <Comments />,
            children: [
                {
                  path: "/drink/:id/comments/submit",
                  element: <NewComment />,
                  action({ request, params}) {
                    return request.formData().then((formData) => {
                      return addComment(formData.get("comment"), params.id, formData.get("name"), formData.get("rating")).then(() => {
                        toast.success("Your comment was successfully added.");
                        return redirect(`/drink/${params.id}/comments`);
                      });
                    });
                  }
                },
                {
                  path: "/drink/:id/comments/:commentId/edit",
                  element: <EditComment />,
                  loader({params}) {
                    return fetchComment(params.commentId);
                  },
                  action({params, request}) {
                    return request.formData().then((formData) => {
                      return updateComment(params.commentId, params.drinkId, formData.get("name"), formData.get("comment"), formData.get("rating")).then(() => {
                        toast.success("Your comment was successfully updated.");
                        return redirect(`/drink/${params.id}/comments`);
                      })
                    })
                  }
                } 
              ]
          },
          {
           path: "/drink/:id/favorites/add",
           action({ request, params}) {
            return request.formData().then((formData) => {
              return addFavorite(params.id, formData.get("img"), formData.get("name")).then(() => {
                return redirect(`/drink/${params.id}`);
                });
              });
            }
          }
        ]
      },
      {
        path: "/comments/:commentId/destroy",
        action({request, params}) {
          return request.formData().then((formData) => {
            return deleteComment(params.commentId).then(() => {
              toast.success('Your comment was deleted.')
              const drinkId = formData.get("drinkId");
              return redirect(`/drink/${drinkId}/comments`)
            })
          })
        }
      },
      {
        path: "/favorites/:id/delete",
            action({ params}) {
              return deleteFavorite(params.id).then(() => {
                toast.success('Drink was removed from favorites.')
                return redirect(`/`)
              })
            }
      }
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
