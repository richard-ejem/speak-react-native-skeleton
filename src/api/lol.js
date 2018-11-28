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

export const lolcatizeList = async (list) => {
    const serialized = list.reduce((str, current, index) => `${str} @${index}@ ${current}`, '');
    const translated = await lolcatize(serialized);
    console.log(translated);
    return list.map((_, i) => translated.match(new RegExp(`@${i}@ (.*?)(@[0-9]+@|$)`))[1]);
};
