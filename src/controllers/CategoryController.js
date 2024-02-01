import { getMessage } from "./APIController";

export const getAllCategories = async () => {
    const categories = await getMessage(`categories`).catch(
      (err) => {
        alert("couldnt get categories" + err.message);
        return false;
      }
    );
    return categories;
  };