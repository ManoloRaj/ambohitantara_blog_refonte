function TitleDetail({ title }) {
    return (
        <div className="title_detail">
            {title}
        </div>
    )
}
function DescriptionDetail({ description }) {
    return (
        <div className="content_detail">
            {description}
        </div>
    )
}
function AuthorDetail({ author }) {
    return (
        <div className="author_detail">
            {author}
        </div>
    )
}

export {
    TitleDetail,
    DescriptionDetail,
    AuthorDetail
};