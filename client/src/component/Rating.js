import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { FaHeart } from "react-icons/fa"
const Rating = ({rating,id,getUserPurchase,userId}) => {
    const [rate,setRate] =useState(0)
    const [hover, setHover] = useState(0);
    const user = useContext(UserContext)
    const [hearts, setHearts] = useState(0)
    

        const ratingArray = hearts

    const handleRating = (e) => {
        e.preventDefault()
        setHearts(e.target.value)
    }



    return (
        <div className="star-rating">
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1
                function handleClick() {
                  getUserPurchase()
                    fetch(`users/${userId}/update_rating/${id}`, {
                        method: "PATCH",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            item_rating:ratingValue
                        }),
                    })
                        .then(res => {
                            if (res.ok) {
                                res.json().then((data) => (console.log(data),getUserPurchase()))
                            } else {
                                res.json().then((errorData) => console.log(errorData.errors))
                            } 
                        })
                    getUserPurchase()
                    }
                   
                return <label>
                    <input type="radio"
                        name="rating"
                        value={rating}
                        onClick={handleClick}
                        onChange={handleRating}

                    />
                    <FaHeart onMouseEnter={() => setHover(rating)} onMouseLeave={() => setHover(null)} size={20} className="star" color={ratingValue <= (hover || rating) ? "#800020" : "#5A5A5A"} />
                </label>
            })}

        </div>
    );
}

export default Rating