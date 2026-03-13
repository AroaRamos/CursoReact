import React from 'react'
import Gif from 'components/Gif'
import useSingleGif from 'hooks/useSingleGif'
import Spinner from 'components/Spinner'
import { Redirect } from 'wouter'
import useTitle from 'hooks/useTitle'

export default function Detail({params}) {
    const {gif, isLoading, isError} = useSingleGif({id: params.id})
    const title = gif ? gif.title : ''
    useTitle({title})


    if (isLoading) return <Spinner/>
    if (isError) return <Redirect to="/404" />
    if (!gif) return null

    return <>
        <h3 className="App-title">{gif.title}</h3>
        <Gif {...gif} />
    </>
    
   
}