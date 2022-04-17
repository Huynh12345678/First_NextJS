import { parse } from "node-html-parser";
import axios from "@/utils/axios"

export const getComicInfo = async (comicSLug: string, source: string): Promise<any> => {
    const html = (await axios.get(`truyen-tranh/${comicSLug}`)).data;
    const dom = parse(html);
    const index = dom.querySelectorAll("#nt_listchapter ul li:not(.heading)").map((item, index) => index).reverse();
    const cover = dom.querySelector("#item-detail .col-image img")?.getAttribute('src')?.replace('//', 'https://');

    return {
        title: dom.querySelector('#item-detail .title-detail')?.innerText,
        cover: cover,
        author: dom.querySelector("#item-detail .author .col-xs-8")?.innerText,
        status: dom.querySelector("#item-detail .status .col-xs-8")?.innerText,
        genres: dom.querySelectorAll("#item-detail .kind .col-xs-8 a")?.map((genre: any) => genre.innerText),
        desc: dom.querySelector("#item-detail .detail-content p")?.innerText,
        chapters: dom.querySelectorAll("#nt_listchapter ul li:not(.heading)").map((chapter: any, i: number) => ({
            name: chapter.querySelector('.chapter').innerText.trim(),
            updateAt: chapter.querySelector('.col-xs-4').innerText,
            view: chapter.querySelector('.col-xs-3').innerText.toLocaleString(),
            id: chapter.querySelector('a').getAttribute('data-id'),
            chap: chapter
                .querySelector(".chapter a")
                ?.getAttribute("href")
                ?.split("/")
                .slice(-2)[0],
            nameIndex: index[i] + 1
        })),
        source,
        lastUpdate: dom.querySelector("#item-detail time.small")?.innerText.match(/\[Cập nhật lúc: (.*?)\]/)?.[1]
    }
}



