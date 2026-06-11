import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosApi from "../../../axiosApi";
import type { Content } from "../../../types";


const ContentPage = () => {

    const { id } = useParams();
    const [page, setPage] = useState<Content>();

    useEffect(() => {
        const fetchPosts = async () => {
            const { data } = await axiosApi.get<Content>(`/staticPages/${id}.json`);

            setPage(data)
        };

        void fetchPosts();
    }, [id]);

    console.log('PAGE', page);

    return page && (
        <div className="container">
            <h1 className="display-1 mt-3">{page.title}</h1>
            <p className="lead">{page.content}</p>
        </div>
    )
}

export default ContentPage