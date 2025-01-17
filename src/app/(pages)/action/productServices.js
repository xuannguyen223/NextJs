import axios from "axios";

export const getAllProducts = async (keyword) => {
  try {
    // C1: call API tu back end apistore.cybersoft.edu.vn
    const res = await axios.get(
      `https://apistore.cybersoft.edu.vn/api/Product?keyword=${keyword}`
    );
    return res.data.content;

    // C2: call API tu API routes, not chu p trong product viet thuong
    // const res = await axios.get(
    //   `http://localhost:3000/api/product?keyword=${keyword}`
    // );
    // return res.data;
  } catch (error) {
    console.log(error);
    return { messgae: "Could not fetch data" };
  }
};

// viet function call API => server action
export const getProductById = async (id) => {
  try {
    // dung axios
    // const response = await axios.get(
    //   `https://apistore.cybersoft.edu.vn/api/Product/getid?id=${id}`
    // );
    // return response.data.content;

    // dung fetch
    const response = await fetch(
      `https://apistore.cybersoft.edu.vn/api/Product/getid?id=${id}`,
      {
        next: {
          revalidate: 10, // trong vong 10s se ko call lai API
        },
      }
    );

    const data = await response.json();
    return data.content;
  } catch (error) {
    console.log(error);
    return {
      id,
      title: "Error",
      content: "Could not load procduct",
    };
  }
};
