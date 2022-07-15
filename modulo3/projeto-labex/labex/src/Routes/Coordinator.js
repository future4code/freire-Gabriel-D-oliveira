

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
    navigate(`/admin/trips/${id}`)
}


export const goToAdminPage = (navigate) => {
    navigate('/admin/trips/list')
}

export const goToHomePage = (navigate) => {
    navigate('/')
}

export const  goToCreateTripPage = (navigate) => {
    navigate('/admin/trips/create')
}

export const goBack = (navigate) => {
    navigate(-1)
}