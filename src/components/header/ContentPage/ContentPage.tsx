interface Props {
    title: string
    content: string
}

const ContentPage = ({ title, content }: Props) => {

    return (
        <div>
            <h1 className="display-1">{title}</h1>
            <p className="lead">{content}</p>
        </div>
    )
}

export default ContentPage