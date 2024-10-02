
import axios from "axios";

const baseUrl = process.env.REACT_APP_MEDIUM_BASE_URL

export const FetchStory = async () => {
    const url = baseUrl

    const options = {
        method: "GET",
        url: url,
        headers: {
          'accept' : 'application/json; charset=UTF-8'
        }
      }

    const response = await axios.request(options)
    return response.data.items
}