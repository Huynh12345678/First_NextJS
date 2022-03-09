import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import ReadImage from './ReadImage';

const LeftComic: NextPage<any> = ({ info, select, slug }) => (
    <div className='lg:w-[60vw] lg:pr-10 max-h-[none] lg:max-h-[100vh] overflow-auto'>
        <div className='flex mb-4 gap-5 flex-col sm:flex-row'>
            <ReadImage
                className='h-[300px] w-[200px] min-w-[200px] object-cover mx-auto sm:mx-0 rounded-lg duration-[0ms]'
                src={info.cover}
                alt=""
                className2='bg-gray-400 rounded-lg !h-[300px]' />
            <div className='info gap-2 flex flex-col'>
                <h1 className=' font-bold text-3xl text-white'>{info.title}</h1>
                <p className='text-white text-lg font-semibold'>Author: <span className='text-gray-300'>{info.author}</span></p>
                <p className='text-white text-lg font-semibold'>Status: <span className='text-gray-300'>{info.status}</span></p>
                {/* <p>Thể loại: {info.genres.join(", ")}</p> */}
                {info.chapters.length > 0 && <div className='my-2'>
                    <Link href={{
                        pathname: `/comic/${slug}/${info.chapters.slice(-1)[0].chap}`,
                        query: { id: info.chapters.slice(-1)[0].id, source: select.source },
                    }}>
                        <a className='text-white bg-link pr-2 py-2 pl-4 rounded-full hover:bg-link-hover text-2xl font-bold transition duration-300'>READ<FaChevronRight className='inline mb-[0.3rem]' /></a>
                    </Link>
                    {/* <Link href={{
                pathname: `/comic/${slug}/${info.chapters[0].chap}`,
                query: { id: info.chapters[0].id, source: select.source },
            }}>
                <a className='text-white bg-link p-2 rounded-full hover:bg-link-hover  transition duration-300'>Read Last</a>
            </Link> */}
                </div>}
            </div>
        </div>
        <p className=' break-words text-justify text-white'>{info.desc}</p>
        {info.genres.map((item: any) => (
            <p key={item} className='inline-block bg-gray-700 mr-2 px-4 py-[5px] rounded-full mt-2 lg:mt-4 text-white'>{item}</p>
        ))}
    </div>
);

export default LeftComic;