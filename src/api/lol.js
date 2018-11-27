import * as axios from "axios";

export const lolcatize = async (text) => {
    const response = await axios.post(`https://funtranslations.com/lolcat`,
        `text=${encodeURIComponent(text)}`,
        {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
    return response.data.match(/id="lolcat">(.*?)</)[1]
}
