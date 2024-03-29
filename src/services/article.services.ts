import { articleInterface } from "@/components/home/carousel_article";
import supabase from "../lib/supabaseClient";
import { v4 as uuidv4 } from "uuid";

export interface articleToAddInterface {
    id?: string,
    title?: string,
    author?: string,
    description?: string,
    image?: Array<any>
}

export async function getArticleList(): Promise<Array<articleInterface> | null> {
    const { data, error } = await supabase
        .from('article')
        .select('id, title, description, author, images:photo(url)')
        .returns<Array<articleInterface>>();

    if (error) {
        throw error;
    }
    return data;
}

export async function setArticle(props: articleToAddInterface): Promise<boolean> {
    const { title, author, description, image } = props;

    if (title && author && description && image) {
        const id_article: string = uuidv4();
        //insert into article_table
        await insertIntoArticle(id_article, title, author, description);
        for (let i = 0; i < image.length; i++) {
            const image_rows = image[i];
            const image_name: string = uuidv4();
            await insertIntoStorage(image_name, image_rows);
            await insertIntoPhoto(id_article, image_name);
        }
        return true
    } else {
        return false
    }
}

async function insertIntoArticle(id: string, title: string, author: string, description: string) {
    const { data, error } = await supabase
        .from('article')
        .insert({ id, title, description, author });

    if (error) {
        throw error;
    }
    console.log("az", data)
    return data || { id: "" };
}

async function insertIntoStorage(image_name: string, image: any) {
    const { data, error } = await supabase
        .storage
        .from('amb_images')
        .upload(image_name, image)

    if (error) {
        throw error;
    }
    return data;
}

async function insertIntoPhoto(id_article: string, image_name: string) {
    const { data, error } = await supabase
        .from('photo')
        .insert({ id_article, url: image_name });
    if (error) {
        throw error;
    }
    return data;
}