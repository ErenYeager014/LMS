import { Axios } from "../Axios/Axios"


export const useDelete = async (url: string) => {
    try {
        const result = await Axios.delete(url, {
            headers: {
                Authorization: "Bearer" + " " + localStorage.getItem("token") || "",
            }
        })
        if (result.status === 200) {
            return { status: true, message: "Your data has been deleted successfully" };
        }
    } catch (error) {
        return { status: false, message: error.data.message };
        console.log(error)
    }
}