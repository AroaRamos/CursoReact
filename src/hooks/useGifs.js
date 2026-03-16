import { useContext, useEffect, useState } from "react";
import getGifs from "services/getGifs";
import GifsContext from "context/GifsContext";

const INITIAL_PAGE = 0;

export function useGifs({ keyword, rating = "g" } = { keyword: null, rating: "g" }) {
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(INITIAL_PAGE);
    const { gifs, setGifs } = useContext(GifsContext);

    // Recuperamos la keyword de LocalStorage
    const keywordToUse = keyword ? keyword : localStorage.getItem("lastKeyword") || "random";

    useEffect(function () {
        setLoading(true);

        getGifs({ keyword: keywordToUse, rating })
            .then((gifs) => {
                setGifs(gifs);
                setLoading(false);
                // Guardamos la keyword en el LocalStorage
                localStorage.setItem("lastKeyword", keywordToUse);
            });
    }, [keyword, keywordToUse, rating, setGifs]);

    useEffect(function () {
        if (page === INITIAL_PAGE) return;

        getGifs({ keyword: keywordToUse, rating, page })
            .then((nextGifs) => {
                setGifs((prevGifs) => prevGifs.concat(nextGifs));
            });
    }, [page, keywordToUse, rating, setGifs]);

    return { loading, gifs, setPage };
}