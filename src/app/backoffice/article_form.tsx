import { articleToAddInterface, setArticle } from "@/services/article.services"
import { useState } from "react"

export function ArticleForm() {
    const [articleToAdd, setArticleToAdd] = useState<articleToAddInterface | null>(null)

    function addArticle() {
        console.log("tafiditra", articleToAdd)
        if (articleToAdd) {
            setArticle(articleToAdd).then((result) => { })
        }
    }
    function handleChange(event: any) {
        setArticleToAdd((prev_value) => ({
            ...prev_value,
            [event.target.name]: (event.target.name !== "image" ?
                event.target.value : event.target.files)
        }));
    }
    return (
        <div className="form">
            <div className="title">
                New article
            </div>
            <div className="areas">
                <input onChange={handleChange} name="title" placeholder="Title" type="text" className="" />
                <input onChange={handleChange} name="author" placeholder="Author" type="text" className="" />
                <textarea onChange={handleChange} name="description" placeholder="Description" rows={10} className=""></textarea>
                <input onChange={handleChange} name="image" type="file" className="" multiple />

                <button onClick={addArticle}>
                    ADD
                </button>
            </div>

        </div>
    )
}