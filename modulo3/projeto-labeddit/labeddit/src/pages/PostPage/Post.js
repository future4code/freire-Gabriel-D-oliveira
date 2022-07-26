import React from 'react';
import { useProtectedPage } from '../../hooks/useProtectedPage';


export const Post =()=> {
    useProtectedPage()

    return(
        <div>
            Post
        </div>
    )
}