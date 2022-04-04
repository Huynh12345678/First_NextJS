import { NextPage } from 'next';
import React, { memo, useEffect } from 'react';
import SearchComponent from 'components/Search';
import { handleSource } from 'store/action';
import { useAppDispatch, useAppSelector } from "hooks/useRedux";
import Head from 'next/head';

const Search: NextPage = () => {
    const { reducer: { source } } = useAppSelector(state => state);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(handleSource(source, 'search'));
    }, [])

    return (
        <>
            <Head>
                <title>Search</title>
            </Head>
            <SearchComponent />
        </>
    );
};

export default memo(Search);