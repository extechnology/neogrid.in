import { useQuery } from "@tanstack/react-query";
import { GetProducts, GetProjectGallery } from "../Service/AllApi";
import { Project } from "../Types/projectGalleryTypes";

export const AllProducts = () => {


    return useQuery({


        queryKey: ['ProductsData'],
        queryFn: async () => {

            const response = await GetProducts()

            return response.data

        },

    })

}




// Project Gallery
export const ProjectGalleryData = () => {

    return useQuery<Project [] >({

        queryKey: ['projectgallery'],
        queryFn: async () => {

            try {

                const response = await GetProjectGallery()

                return response.data

            } catch (err) {

                console.log(err);

            }

        }

    })

}