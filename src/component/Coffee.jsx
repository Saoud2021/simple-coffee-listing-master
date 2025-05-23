import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

export default function Coffee() {
  const [coffeeData, setCoffeeData] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setCoffeeData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="coffee-list">
      {coffeeData.length > 0 ? (
        coffeeData.map((coffee) => (
          <div key={coffee.id} className="coffee-item">
            <div className="image-container">
              {coffee.popular && <span className="label popular">Popular</span>}
              <img src={coffee.image} alt={coffee.name} />
            </div>
            <div className="description">
              <h2>{coffee.name}</h2>
              <span className="price">{coffee.price}</span>
            </div>
            <div className="rating">
              {coffee.rating ? (
                <FaStar className="star" />
              ) : (
                <FaRegStar className="no-rating" />
              )}

              <span className="coffee-rating">{coffee.rating}</span>
              <span className="coffee-votes">
                {coffee.votes ? `(${coffee.votes} votes)` : "No ratings"}
              </span>
              {!coffee.available && (
                <span className="label sold-out">Sold Out</span>
              )}
            </div>
          </div>
        ))
      ) : (
        <p>Loading coffee data...</p>
      )}
    </div>
  );
}
