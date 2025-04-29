import { useQuery, useQueryClient } from '@tanstack/react-query';



const Filtertext = () => {


    const queryclient = useQueryClient()

    const { data: FilterData, error } = useQuery<String[]>({

        queryKey: ['FilterKey'],
        queryFn: () => {

            return [];

        },
        staleTime: Infinity,


    })


    const UpdateKey = (newKey: any) => {


        queryclient.setQueryData(['FilterKey'], (oldData: string[] = []) => {

            // Add or remove `newKey` based on its presence in the array
            if (oldData.includes(newKey)) {
                return oldData.filter((key) => key !== newKey);
            } else {
                return [...oldData, newKey]
            }

        })


    }

    return { UpdateKey, FilterData, error }


}

export default Filtertext