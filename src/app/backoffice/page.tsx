import "../../assets/styles/1_pages/backoffice.css";
import { ArticleForm } from "./article_form";
import { ArticleList } from "./article_list";

export default function AddArticle() {
    return (
        <div className="backoffice">
            <ArticleForm />
            <ArticleList />
        </div>
    )
}