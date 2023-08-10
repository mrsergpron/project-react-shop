import { useState } from "react";
import Header from "./components/Header";
import Shop from "./components/Shop";
import Alert from "./components/Alert";
import { BasketList } from "./components/BasketList";
import Footer from "./components/Footer";

function App() {
  const [order, setOrder] = useState([]);
  const [basket, setBasket] = useState(false);
  const [isOrder, setisOrder] = useState(false);
  const [good, setGood] = useState();

  const orderItem = (item) => {
    if (order.find((el) => el.mainId === item.mainId)) {
      const findItem = order.filter((el) => el.mainId === item.mainId);
      let newCol = findItem[0];
      let newItem = { ...item, quantity: newCol.quantity + 1 };

      let newOrder = order.filter((el) => el.mainId !== item.mainId);
      setOrder([...newOrder, newItem]);
    } else {
      setOrder([...order, item]);
    }
  };

  function isBasket(close = true) {
    setBasket(close);
  }

  function deleteFromBasket(mainId) {
    let newOrder = order.filter((item) => item.mainId !== mainId);
    setOrder(newOrder);
  }

  function addItem(mainId) {
    let newItem = order.find((item) => item.mainId === mainId);
    let indexItem = order.findIndex((item) => item.mainId === mainId);
    let newOrder = order;
    newItem.quantity = newItem.quantity + 1;
    delete newOrder[indexItem];
    newOrder[indexItem] = newItem;
    setOrder([...newOrder]);
  }

  function deleteItem(mainId) {
    let newItem = order.find((item) => item.mainId === mainId);
    let indexItem = order.findIndex((item) => item.mainId === mainId);
    let newOrder = order;

    if (newItem.quantity < 2) {
      let newOrder = order.filter((item) => item.mainId !== mainId);
      setOrder([...newOrder]);
    } else {
      newItem.quantity = newItem.quantity - 1;
      delete newOrder[indexItem];
      newOrder[indexItem] = newItem;
      setOrder([...newOrder]);
    }
  }

  function alertOrder(displayName) {
    setisOrder(true);
    setGood(displayName);

    setTimeout(() => {
      setisOrder(false);
    }, 2000);
  }

  return (
    <>
      <Header
        quantity={order.length}
        orderItem={orderItem}
        isBasket={isBasket}
      />

      <Shop orderItem={orderItem} alertOrder={alertOrder} />
      {basket ? (
        <BasketList
          isBasket={isBasket}
          order={order}
          deleteFromBasket={deleteFromBasket}
          addItem={addItem}
          deleteItem={deleteItem}
        />
      ) : null}
      {isOrder ? <Alert good={good} /> : null}
      <Footer />
    </>
  );
}

export default App;
