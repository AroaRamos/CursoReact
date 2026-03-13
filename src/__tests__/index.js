import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react'
import App from '../App'
 
//Mock porque sin el, el test no estaba funcionando, ya que el componente Home hace uso del hook useGifs, y este hook hace una petición a la API de Giphy para obtener los gifs. Al hacer el mock,simula el comportamiento del hook useGifs, devolviendo unos datos predefinidos en lugar de hacer la petición real a la API. 
jest.mock('hooks/useGifs', () => ({ // Mock del hook useGifs para simular su comportamiento en los tests.
  useGifs: () => ({ // Simulación de los datos que el hook useGifs devolvería en una situación real.
    loading: false,// Simulación de que no se está cargando ningún dato.
    gifs: [ // Simulación de una lista de gifs que el hook useGifs devolvería. En este caso, se simula que hay un gif con id 'abc', título 'Un gif' y url 'https://example.com/gif.gif'.
      { id: 'abc', title: 'Un gif', url: 'https://example.com/gif.gif' } //
    ]
  })
}))

test('home work as expected', async () => {
  const { container } = render(<App />)

  await waitFor(() => {
    expect(container.querySelector('.Gif-link')).toBeVisible()
  })
})
