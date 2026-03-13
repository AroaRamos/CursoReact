//  Este archivo es el punto de entrada a la aplicacion.
// - Aqui se define el componente principal de la aplicacion (App) que es el que renderiza el resto de los componentes.

import React from "react"; //Importo useEffect para manejar los efectos secundarios y useState para manejar el estado de la aplicacion.
import "./App.css";
import Home from "./pages/Home"; // Importo el componente Home que se encuentra en la carpeta pages.
import Detail from "./pages/Detail"; // Importo el componente Detail que se encuentra en la carpeta pages.
import SearchResults from "./pages/SearchResults"; // Importo el componente SearchResults que se encuentra en la carpeta pages.
import StaticContext from "./context/StaticContext";
import { GifsContextProvider } from "./context/GifsContext";

import { Link, Route } from "wouter"; // Importo Link para crear enlaces de navegación y Route para definir las rutas de la aplicacion.


// 1º exporto el componente App para que pueda ser utilizado en otros archivos. → export default
// 2º defino el componente App que es el componente principal de la aplicacion. → function App() { ... }
export default function App() {
  return (
    // Envuelvo el contenido de la aplicacion en un div para poder aplicar estilos y para que React pueda renderizarlo correctamente.
    // - Link → Componente que se utiliza para crear enlaces de navegación. El atributo 'to' define la ruta a la que se dirigirá el enlace.
    // - Route → Componente que se utiliza para definir las rutas de la aplicacion. El atributo 'path' define la ruta y el atributo 'component' define el componente que se renderizará cuando se acceda a esa ruta.
    //* StaticContext → Todo los elememntos que envuelve tinene acceso a ese componente
    <StaticContext.Provider
      value={{
        name: 'Aroa',
        suscribeteAlCanal: true,
      }}
    >
      <div className="App">
        <section className="App-content">
          <Link to="/">
            <img className="App-logo" alt="Giffy logo" src="/logo.png" />
          </Link>
        <GifsContextProvider>
          <Route component={Home} path="/" />
          <Route component={SearchResults} path="/search/:keyword" />
          <Route component={Detail} path="/gif/:id" />
        </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}
