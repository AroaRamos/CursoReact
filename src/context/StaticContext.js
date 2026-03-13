import React from "react";
// Con el createContext le digo que cree un objeto como valor inicial
// SIN Provider
const Context = React.createContext({
  name: 'esto-es-sin-provider',
  suscribeteAlCanal: true,
});

export default Context;
