

export const goToListTrips = (navigate) => {
    navigate("/trips/list")

}


export const goToApplicationPage = (navigate) => {
    navigate("/trips/application")

}

export const goToLoginPage = (navigate) => {
    navigate("/login")
}

export const goToTripDetails = (navigate, id) => {
    navigate(`/admin/trip/${id}`)
}


export const goToAdminPage = (navigate) => {
    navigate('/admin/trips/list')
}
