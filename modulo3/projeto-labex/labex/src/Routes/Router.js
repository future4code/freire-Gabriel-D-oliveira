import { ApplicationFormPage } from "../Pages/ApplicationFormPage/ApplicationFormPage"
import { CreateTripPage } from "../Pages/CreateTripPage/CreateTripPage"
import { HomePage } from "../Pages/HomePage/HomePage"
import { ListTripsPage } from "../Pages/ListTripsPage/ListTripsPage"
import { LoginPage } from "../Pages/Login/LoginPage"
import { AdminHomePage } from "../Pages/AdminHomePage/AdminHomePage"
import { TripDetailsPage } from "../Pages/TripDetailsPage/TripDetailsPage"
import { BrowserRouter, Routes, Route } from 'react-router-dom';


export const Router = () => {

    return (

        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/trips/list" element={<ListTripsPage />} />
                <Route path="/trips/application" element={<ApplicationFormPage />} />
                <Route path="/admin/trips/list" element={<AdminHomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/admin/trips/:id" element={<TripDetailsPage />} />
                <Route path="/admin/trips/create" element={<CreateTripPage />} />

            </Routes>
        </BrowserRouter>


    )


}