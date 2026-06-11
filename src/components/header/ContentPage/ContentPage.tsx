import { useState, useEffect, type ChangeEvent, type SubmitEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosApi from "../../../axiosApi";
import type { Content } from "../../../types";

const initialState: Content = {
    title: '',
    content: '',
}

const ContentPage = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [page, setPage] = useState<Content>();
    const [idArray, setIdArray] = useState<string[]>([]);
    const [selectedId, setSelectedId] = useState('');
    const [form, setForm] = useState<Content>(initialState);

    useEffect(() => {
        const fetchPosts = async () => {
            const { data } = await axiosApi.get<Content>(`/staticPages/${id}.json`);
            setPage(data)
        };
        void fetchPosts();
    }, [id]);

    useEffect(() => {
        const getPagesId = async () => {
            const { data } = await axiosApi.get<Content>(`/staticPages.json`);
            setIdArray(Object.keys(data))
        }
        void getPagesId();
    }, [])

    useEffect(() => {
        if (!selectedId) return;

        const fetchSelectedId = async () => {
            const {data} = await axiosApi.get<Content>(`/staticPages/${selectedId}.json`)

            setForm({
                title: data.title,
                content: data.content
            })
        }
        void fetchSelectedId();
    }, [selectedId]);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setForm({ ...form, [name]: value });
    };

    const onSubmitHandler = async (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        await axiosApi.put(`/staticPages/${selectedId}.json`, form);

        navigate(`/${selectedId}`);
    };


    return page ? (
        <div className="container">
            <h1 className="display-1 mt-3">{page.title}</h1>
            <p className="lead">{page.content}</p>

            {id === 'admin' && (
                <div className="container bg-body-secondary p-3">
                    <form onSubmit={onSubmitHandler}>
                        <select
                            className="form-select mb-3"
                            aria-label="Default select example"
                            name='select'
                            value={selectedId}
                            onChange={(e) => setSelectedId(e.target.value)}
                        >
                            <option value=''>Open this select menu</option>
                            {idArray.map(id => (
                                <option key={id} value={id}>{id}</option>
                            ))}

                        </select>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="name@example.com"
                                name="title"
                                value={form.title}
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                            <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows={3}
                                name="content"
                                value={form.content}
                                onChange={onChangeHandler}
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-success mt-3">Success</button>
                    </form>
                </div>

            )}
        </div>
    ) : null;
};


export default ContentPage