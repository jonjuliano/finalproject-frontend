import { toast } from "react-toastify";

function _fetch(url) {
  return fetch(url).then((response) => {
    return response.json();
  });
}

export function fetchFilteredDrinks(alcohol) {
  return _fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${alcohol}`
  );
}

export function fetchDrinkDetails(drinkId) {
  return _fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`)
}

export function fetchComments(drinkId) {
  return _fetch(`http://www.localhost:1337/api/comments?filters[drinkId]=${drinkId}`)
}

export function fetchComment(commentId) {
  return _fetch(`http://www.localhost:1337/api/comments/${commentId}`)
}

export function addComment(body, drinkId, name, rating) {
  return fetch("http://www.localhost:1337/api/comments", {
    method: "POST",
    body: JSON.stringify({
      data: {
      body: body,
      drinkId: drinkId,
      name: name,
      rating: rating,}
    }),
    headers: {
      "Content-type": "application/json",
    },
  }).then((response) => {
    return response.json();
  })
}

export function deleteComment(commentId) {
  return fetch(`http://www.localhost:1337/api/comments/${commentId}`, {
    method: "DELETE",
  })
}

export function updateComment(commentId, drinkId, updatedName, updatedBody, updatedRating) {
  return fetch(`http://www.localhost:1337/api/comments/${commentId}`, {
    method: "PUT",
    body: JSON.stringify({
      data: {
        drinkId: drinkId,
        name: updatedName,
        body: updatedBody,
        rating: updatedRating
      }
    }),
    headers: {
      "Content-type": "application/json",
    },
  }).then((response) => {
    return response.json();
  })
}

export function fetchFavorites() {
  return _fetch(`http://www.localhost:1337/api/favorites`)
}

export function addFavorite(drinkId, img, name) {
  return fetch("http://www.localhost:1337/api/favorites", {
    method: "POST",
    body: JSON.stringify({
      data: {
      idDrink: drinkId,
      img: img,
      name: name,
    }
    }),
    headers: {
      "Content-type": "application/json",
    },
  }).then((response) => {
    if (response.status >= 400) {
      toast.error("I think that's already favorited...")
    } else {
    toast.success("You have successfully favorited this.")
     return response.json(); 
    }
  })
}

export function deleteFavorite(favoriteId) {
  return fetch(`http://www.localhost:1337/api/favorites/${favoriteId}`, {
    method: "DELETE",
  })
}