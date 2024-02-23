import { articleInterface } from "@/components/home/carouselArticle";
import supabase from "../lib/supabaseClient";


export async function getArticleList(): Promise<Array<articleInterface> | null> {
    const { data, error } = await supabase
        .from('article')
        .select();

    if (error) {
        throw error;
    }
    return data;
}