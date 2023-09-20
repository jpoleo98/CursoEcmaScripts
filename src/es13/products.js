import fetch from "node-fetch";

const response = await fetch('https://api.escuelajs.co/api/v1/products');

const result = await response.json();

export {result};