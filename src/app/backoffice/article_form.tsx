import { articleToAddInterface, setArticle } from "@/services/article.services"
import { useEffect, useState } from "react"

export function ArticleForm() {
    const [articleToAdd, setArticleToAdd] = useState<articleToAddInterface | null>(null)
    const [flashMessage, setFlashMessage] = useState({ status: false, messageStatus: false })
    const [buttonLoading, setButtonLoading] = useState<boolean>(false);

    async function addArticle() {
        setButtonLoading(true)
        setFlashMessage((prev_value) => ({ ...prev_value, status: true }))
        if (articleToAdd) {
            await setArticle(articleToAdd)
            setButtonLoading(false)
            setFlashMessage((prev_value) => ({ ...prev_value, status: false }))
        } else {
            setFlashMessage({ status: true, messageStatus: false })
        }
        setButtonLoading(false)
        setFlashMessage((prev_value) => ({ ...prev_value, status: false }))
        setArticleToAdd(null)
    }
    function handleChange(event: any) {
        setArticleToAdd((prev_value) => ({
            ...prev_value,
            [event.target.name]: (event.target.name !== "image" ?
                event.target.value : event.target.files)
        }));
    }
    return (
        <>
            <FlashMessage status={flashMessage.status} messageStatus={flashMessage.messageStatus} />
            <div className="form">
                <div className="title">
                    New article
                </div>
                <div className="areas">
                    <input required onChange={handleChange} name="title" placeholder="Title" type="text" className="" />
                    <input required onChange={handleChange} name="author" placeholder="Author" type="text" className="" />
                    <textarea required onChange={handleChange} name="description" placeholder="Description" rows={10} className=""></textarea>
                    <input required onChange={handleChange} name="image" type="file" className="" multiple />

                    <button onClick={addArticle} disabled={buttonLoading}>
                        ADD
                    </button>
                </div>

            </div>
        </>
    )
}

export function FlashMessage({
    status,
    messageStatus,
}: {
    status: boolean
    messageStatus: boolean,
}) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (status) {
            setIsVisible(true)
            const timer = setTimeout(() => {
                setIsVisible(false);
            }, 2000);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [status]);

    if (isVisible) {
        return (
            <div className={"flash_message " + (messageStatus ? " " : " error")}>
                {messageStatus
                    ? "OK : Your article was successfully added"
                    : "KO : Failed to insert your data"}
            </div>
        );
    } else {
        return null;
    }

}