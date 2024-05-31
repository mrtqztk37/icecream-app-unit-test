import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";

const Scoops = () => {
  const [data, setData] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4040/scoops").then((res) => {
      setData(res.data);
    });
  }, []);

  // Sepete eleman ekleme
  const addToBasket = (item) => {
    setBasket([...basket, item]);
  };

  // Sepetten eleman çıkarma
  const clearFromBasket = (delete_id) => {
    const filtred = basket.filter((item) => item.id !== delete_id);

    // Sepeti güncelle
    setBasket(filtred);
  };

  return (
    <div>
      <h1>Dondurma Çeşitleri</h1>
      <p>
        Tanesi <span className="text-success">20</span> ₺
      </p>
      <h3>
        Çeşit Ücreti
        <span className="text-success" data-testid="total">
          {basket.length * 20} ₺
        </span>
      </h3>

      <div className="row gap-5 justify-content-between mt-4">
        {data.map((item) => (
          <Card
            key={item.id}
            item={item}
            addToBasket={addToBasket}
            clearFromBasket={clearFromBasket}
            amount={
              basket.filter((basket_item) => basket_item.id === item.id).length
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Scoops;
