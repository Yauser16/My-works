
import React, { useState, useEffect, useRef/* , createRef */ } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import './charList.scss';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

const CharList = (props) => {

    const [charList, setCharList] = useState([]);

    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(210);
    const [charEnded, setCharEnded] = useState(false);

    const { loading, error, getAllCharacters } = useMarvelService();

    useEffect(() => {
        onRequest(offset, true);
    }, []);

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllCharacters(offset)
            .then(onCharListLoaded);
    }

    const onCharListLoaded = (newCharList) => {
        let ended = false;
        if (newCharList.length < 9) {
            ended = true;
        }
        setCharList(charList => [...charList, ...newCharList]);

        setNewItemLoading(newItemLoading => false);
        setOffset(offset => offset + 9);
        setCharEnded(charEnded => ended);
    }
    const itemsRef = useRef([]);

    const focusChar = (id) => {
        itemsRef.current.forEach(item => item.classList.remove('char__items'));
        itemsRef.current[id].classList.add('char__items');
        itemsRef.current[id].focus();
    }



    function renderItems(arr) {
        return (
            <ul className="char__grid" >
                <TransitionGroup component={null}>
                    {arr.map((item, i) => {
                        let imgStyle = { 'objectFit': 'cover' };
                        if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                            imgStyle = { 'objectFit': 'unset' };
                        } return (
                            <CSSTransition
                                key={item.i}
                                timeout={700}
                                /*  nodeRef={createRef(null)} */
                                classNames="char__transition">
                                <li
                                    ref={el => itemsRef.current[i] = el}
                                    tabIndex={0}
                                    className='char__item'
                                    key={i}
                                    onClick={() => {
                                        props.onSelectedChar(item.id);
                                        focusChar(i);
                                    }}
                                    onKeyDown={(e, id) => {
                                        if (e.key === ' ' || e.key === 'Enter') {
                                            props.onSelectedChar(item.id);
                                            focusChar(i);
                                        }
                                    }}>
                                    <img src={item.thumbnail} alt={item.name} style={imgStyle} />
                                    <div className="char__name">{item.name}</div>
                                </li>
                            </CSSTransition>)
                    })}
                </TransitionGroup>
            </ul>

        )
    }

    const items = renderItems(charList);
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading && !newItemLoading ? <Spinner /> : null;

    return (
        <div className="char__list">
            {errorMessage}
            {spinner}
            {items}
            <button
                className="button button__main button__long"
                disabled={newItemLoading}
                style={{ 'display': charEnded ? 'none' : 'block' }}
                onClick={() => onRequest(offset)}>
                <div className="inner">load more</div>
            </button>
        </div>
    )

}
CharList.propTypes = {
    onSelectedChar: PropTypes.func
}

export default CharList;