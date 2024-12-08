import React, { useEffect, useState } from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import Card from "../../components/Card";
import "./Kanban.css";

const Dash = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a 3-second loading skeleton on page load
    const timeout = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timeout);
  }, []);

  const cardsData = [
    { infoText: "Info 1", itemText: "Item 1", isFavourite: false },
    { infoText: "Info 2", itemText: "Item 2", isFavourite: true },
    { infoText: "Info 3", itemText: "Item 3, Item 3, Item 3, Item 3, Item 3, Item 3, Item 3, Item 3", isFavourite: true },
    { infoText: "Info 4", itemText: "Item 4", isFavourite: true },
    { infoText: "Info 5", itemText: "Item 5, Item 5, Item 5, Item 5, Item 5, Item 5, Item 5, Item 5, Item 5, Item 5, Item 5, Item 5", isFavourite: false },
    { infoText: "Info 6", itemText: "Item 6", isFavourite: true },
    { infoText: "Info 7", itemText: "Item 7", isFavourite: true },
    { infoText: "Info 8", itemText: "Item 8", isFavourite: true },
    { infoText: "Info 9", itemText: "Item 9", isFavourite: true },
  ];

  return (
    <DefaultLayout>
      <div className="kanban-board">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            infoText={card.infoText}
            itemText={card.itemText}
            isFavourite={card.isFavourite}
            isLoading={loading} // Pass loading state to each card
          />
        ))}
      </div>
    </DefaultLayout>
  );
};

export default Dash;
