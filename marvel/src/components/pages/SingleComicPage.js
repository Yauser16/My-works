
import { Helmet } from "react-helmet";
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './singleComicPage.scss';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import AppBanner from '../appBanner/AppBanner';


const SingleComicPage = (props) => {
    const {id} = useParams(); 
    const [comic, setComic] = useState(null);
    const {loading, error, clearError} = useMarvelService();
    const {getContent} = props;
   
    useEffect(() => {
        updateComic();
    }, [id]);
 
    const onComicLoaded = (comic) => {
        setComic(comic);
    }

    const updateComic = () => {
        clearError();
        getContent(id)      
        .then(onComicLoaded);
     }
    
    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error || !comic) ? <View comic={comic}/> : null;
        return (
            <>             
              {errorMessage}
              {spinner}
              {content}  
            </>
        )
}
const View = ({comic}) => {
    const {title, name, description, thumbnail, pageCount, language, price} = comic;
    const styled = {'width': '293px', 'height': '293px'};
    const titleItem = name || title;
        
   
    return (
        <>
            <AppBanner />
            <div className="single-comic">
            <Helmet>
            <meta
                name="description"
                content={price ? `${titleItem} comics book` : `${titleItem} character Marvel`}
                />
            <title>{titleItem}</title>
            </Helmet>
                <img src={thumbnail} alt={titleItem} style={!price ? styled : null} className="single-comic__img"/>
                <div className="single-comic__info">
                    <h2 className="single-comic__name">{titleItem}</h2>
                    <p className="single-comic__descr">{description}</p>
                    {pageCount ? (<p className="single-comic__descr">{pageCount}</p>) : null}
                    {language ? (<p className="single-comic__descr">Language: {language}</p>) : null}
                    {price ? (<div className="single-comic__price">{price} $</div>) : null}
                </div>
                {price ? (<Link to="/comics" className="single-comic__back">Back to all</Link>) : null}
            </div>
        </>
    )
}

export default SingleComicPage;