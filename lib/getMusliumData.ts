import axios, { type AxiosError } from "axios"


export const getMusliumData = async (pathName: string) => {
    try {
        const res = await axios(`${process.env.MUSLIUM_API_URL}/${pathName}`)
        if (res) {
            return res.data
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError: AxiosError = error;
            if (axiosError.response) {
                // The client was given an error response (5xx, 4xx)
                console.error("Error Response Data:", axiosError.response.data);
                console.error("Error Response Status:", axiosError.response.status);
            } else if (axiosError.request) {
                // The client never received a response, and the request was never left
                console.error("No Response Received");
            } else {
                // Anything else
                console.error("Other Axios Error:", axiosError.message);
            }
        } else {
            // Anything else
            console.error("Other Error:", error);
        }
        // re-throw the error 
        throw new Error("Fetching data failed");
    }
};
