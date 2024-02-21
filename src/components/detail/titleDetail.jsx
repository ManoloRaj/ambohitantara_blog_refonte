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

export {
    TitleDetail,
    DescriptionDetail
};