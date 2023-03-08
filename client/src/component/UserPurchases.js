import React from "react";

const UserPurchases = ({ name, description, price, image }) => {
    return (
        <>
            <div className="purchase-item">
                <div className="purchase-img">
                    <img className="purchase-img" src={image} />
                </div>
                <div className="purchase-info">
                    <h1>{name}</h1>
                    <h4>{description}</h4>
                    <h6>${price}</h6>
                </div>
            </div>
        </>
    )
}

export default UserPurchases