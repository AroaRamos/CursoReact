import { useContext } from "react";
import GifContext from "context/GifsContext";

export default function useGlobalGifs() {
    return useContext(GifContext).gifs;
}