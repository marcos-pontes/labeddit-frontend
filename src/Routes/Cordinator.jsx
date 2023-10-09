export const goToLogin = (navigate) =>{
    navigate("/")
}
export const goToFeed = (navigate) =>{
    navigate("/feed")
}
export const goToSignup = (navigate) =>{
    navigate("/signup")
}
export const goToComments = (navigate, id) =>{
    navigate(`comments/${id}`)
}