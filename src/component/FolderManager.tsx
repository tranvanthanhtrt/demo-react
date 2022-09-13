import React, { useState, useEffect } from 'react';
import FolderItem, { PropsFolder } from './FolderItem';
import TableComponent from './TableComponent';
import BackgroundImage from '../assets/images/bg-dark.jpg';
import { ReactComponent as IconAdd } from '../assets/icons/icon-add.svg';
import { useSelector, useDispatch } from 'react-redux';
import { IRootState, useAppDispatch } from '../store';
import { getAllPostsAction } from '../action/posts';
// import type { } from 'redux-thunk/extend-redux';

const dataFolders = [
    {
        label: 'Hoa',
        id: 'hoa',
        children: [
            {
                label: 'Hong',
                id: 'hoa-hong',
                children: []
            },
            {
                label: 'Cuc',
                id: 'hoa-cuc',
                children: []
            }
        ]
    },
    {
        label: 'Con',
        id: 'con',
        children: [
            {
                label: 'Voi',
                id: '1',
                children: [
                    {
                        label: 'Trang',
                        id: '1',
                        children: []
                    },
                    {
                        label: 'Den',
                        id: '1',
                        children: []
                    }
                ]
            },
            {
                label: 'Ga',
                id: '1',
                children: [
                    {
                        label: 'Trong',
                        id: '1',
                        children: [{
                            label: 'Bede',
                            id: '1',
                            children: []
                        }]
                    },
                    {
                        label: 'Mai',
                        id: '1',
                        children: []
                    }
                ]
            }
        ]
    }
];

const URL = 'https://glacial-thicket-32444.herokuapp.com/api/posts';
const FolderManager = () => {
    const [dataFoldersState, setDataFoldersState] = useState<PropsFolder[]>(dataFolders)
    const [value, setValue] = useState(0); // integer state
    const postsData = useSelector((state: IRootState) => state.postReducer.data);
    const dispatch = useDispatch();
    const getData = async () => {
        // const data = await axios.get(URL, {
        //     headers: {
        //         Authorization: 'Bear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzE4MDg3NmNhOTVkMjg3N2NmNDEyMjMiLCJpYXQiOjE2NjI2MjExMTl9.s_ngsCAbOM6YzOs6fF91a6v7i0Lt2Omuxo-w4uKthZY'
        //     }
        // });
        try {
            const response = await fetch(URL, {
                headers: {
                    Authorization: 'Bear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzE4MDg3NmNhOTVkMjg3N2NmNDEyMjMiLCJpYXQiOjE2NjI2MjExMTl9.s_ngsCAbOM6YzOs6fF91a6v7i0Lt2Omuxo-w4uKthZY'
                }
            });
            const jsonData = await response.json();
            const dataFolders222 = [
                {
                    label: 'Hoa Hoa Hoa',
                    id: 'hoa',
                    children: [
                        {
                            label: 'Hong asdfsd ',
                            id: 'hoa-hong',
                            children: []
                        },
                        {
                            label: 'Cuc',
                            id: 'hoa-cuc',
                            children: []
                        }
                    ]
                },
                {
                    label: 'Con',
                    id: 'con',
                    children: [
                        {
                            label: 'Voi',
                            id: '1',
                            children: [
                                {
                                    label: 'Trang',
                                    id: '1',
                                    children: []
                                },
                                {
                                    label: 'Den',
                                    id: '1',
                                    children: []
                                }
                            ]
                        },
                        {
                            label: 'Game Players',
                            id: '1',
                            children: [
                                {
                                    label: 'Trong',
                                    id: '1',
                                    children: [{
                                        label: 'Bede',
                                        id: '1',
                                        children: []
                                    }]
                                },
                                {
                                    label: 'Mai',
                                    id: '1',
                                    children: []
                                }
                            ]
                        }
                    ]
                }
            ];
            console.log('jsonData', jsonData.posts);
            setDataFoldersState(dataFolders222);
            localStorage.setItem('folderChangeMain', JSON.stringify(dataFolders222));
        }
        catch (error) {
            console.log('Error', error);
        }
    }

    const handleChange = (labelChange: string, data?: PropsFolder) => {
        if (data) {
            const updatedFolder = (item: PropsFolder) => item.label === labelChange;
            const indexItem = dataFoldersState?.findIndex(updatedFolder);
            dataFoldersState.splice(indexItem, 1, data);
            setDataFoldersState(dataFoldersState)
            console.log('UPdated data ', dataFoldersState);
            localStorage.setItem('folderChangeMain', JSON.stringify(dataFoldersState));
        } else {
            localStorage.setItem('folderChangeMain', JSON.stringify(dataFoldersState));
        }
        setValue(value + 1);
        const folder: { [key: string]: typeof folder } = { a: {}, b: {} };
        console.log('folder', folder);

        folder.c = {};
    };

    const getTotal = () => {
        console.log('getTotal', [2, 3, 4].reduce((a, b) => a + b, 0));
    };

    useEffect(() => {
        // getData()
        getTotal();
    }, [])

    useEffect(() => {
        if (!postsData.length) {
            dispatch(getAllPostsAction());
        }
        console.log('postsData-thanh', postsData);
    }, [postsData]);

    return (
        <>
            <div>
                Folder Manager
            </div>
            <div>
                {dataFoldersState.map((folder: PropsFolder) =>
                    <FolderItem
                        key={folder.label}
                        label={folder.label}
                        id={folder.id}
                        children={folder.children}
                        onChange={handleChange}
                    />)
                }
            </div>
            <button onClick={() => console.log('Data Folder', dataFoldersState)}>
                Submit
                <IconAdd />
            </button>
            <button onClick={() => getData()}>
                Get data
            </button>
            <TableComponent />
            <img src={BackgroundImage} alt='background' />
        </>
    )
}
export default FolderManager

