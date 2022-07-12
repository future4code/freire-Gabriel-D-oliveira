import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToListTrips, goToAdminPage, goToApplicationPage } from '../../Routes/Coordinator';


export const HomePage = () => {

    const navigate = useNavigate()

    return (
        <div>
            <h1>Home</h1>
            <button onClick={()=> goToListTrips(navigate)}>Ver lista de viagens</button>
            <button onClick={()=> goToApplicationPage(navigate)}>Candidatar-se para a viagens</button>
            <button onClick={()=> goToAdminPage(navigate)}>Login</button>
        </div>
    )
}