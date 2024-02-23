export function ArticleForm() {
    return (
        <div className="form">
            <div className="title">
                New article
            </div>
            <div className="areas">
                <input placeholder="Title" type="text" className="" />
                <input placeholder="Author" type="text" className="" />
                <textarea placeholder="Description" rows={10} className=""></textarea>
                <input type="file" className="" multiple />
                <button>
                    ADD
                </button>
            </div>

        </div>
    )
}