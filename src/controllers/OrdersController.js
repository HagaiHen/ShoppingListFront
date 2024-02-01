import { getMessage, postMessage } from "./APIController";

export const getAllOrders = async () => {
    const orders = await getMessage(`orders`).catch(
      (err) => {
        alert("couldnt get categories" + err.message);
        return false;
      }
    );
    return orders;
  };

  export const createOrder = async (orderInstance) => {
    const orders = await postMessage(`order`, orderInstance).catch(
      (err) => {
        alert("couldnt post order" + err.message);
        return false;
      }
    );
    return orders;
  };