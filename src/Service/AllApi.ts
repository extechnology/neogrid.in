import { CommonApi } from "./CommonApi";


const Base_url = "https://server.neogrid.in"


// Get Products
export const GetProducts = async () => {

    return await CommonApi("GET", `${Base_url}/product/`, "", "")

}


// Contact Form
export const ContactPost = async (data: any, header: any) => {

    return await CommonApi("POST", `${Base_url}/contact/`, data, header)

}



// Project Gallery
export const GetProjectGallery = async () => {

    return await CommonApi("GET", `${Base_url}/project/`, "", "")

}