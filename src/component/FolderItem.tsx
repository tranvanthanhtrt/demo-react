import React, { useState, useRef, useContext } from 'react';
import { FolderOpenOutline } from 'react-ionicons'
import { CheckmarkDoneOutline } from 'react-ionicons'
import { StoreContext } from '../store/StoreContext';

export interface PropsFolder {
    label: string;
    id: string;
    children: Array<PropsFolder>;
    onChange?: (parentLabel: string, data?: PropsFolder) => void;
    onRemove?: (folderLabel: string) => void;
};


const FolderItem = ({ label, id, children, onChange, onRemove }: PropsFolder) => {
    const { color } = useContext(StoreContext);
    const [expanded, setExpanded] = useState(false);
    const [addingSubFolder, setAddingSubFolder] = useState(false);
    const [editting, setEditting] = useState(false);
    const [isSameName, setIsSameName] = useState(false);
    const subRef = useRef<HTMLInputElement>(null);
    const editRef = useRef<any>();

    const handleOnChange = (labelChange: string, data?: PropsFolder) => {
        if (!data) { onChange && onChange(labelChange) }
        else {
            const updatedFolder = (item: PropsFolder) => item.label === labelChange;
            const indexItem = children?.findIndex(updatedFolder);
            children.splice(indexItem, 1, data);
            onChange && onChange(labelChange)
        }
    };

    const handleAddNewFolder = () => {
        if (null !== subRef.current) {
            const folderName = subRef.current.value;
            const isExitLabel = children?.some((folder: PropsFolder) => folder.label === folderName);
            console.log({ folderName, isExitLabel });
            if (isExitLabel || !folderName) {
                setIsSameName(true);
                return;
            }
            children?.unshift({ label: folderName, id: folderName, children: [] });
            if (onChange) {
                onChange(label);
                setAddingSubFolder(false);
                setExpanded(true);
            }
        }
    };

    const handleRemoveFolder = () => {
        if (onRemove) {
            onRemove(label);
        }
    };

    const handleEdit = () => {
        if (editting) {
            const currentLabel = String(editRef?.current?.value);
            if (onChange) {
                onChange(label, { id: currentLabel, label: currentLabel, children });
                setEditting(false);
            }
        } else {
            setEditting(true);
        }
    };

    const handleRemoverChild = (childrenLabel: string) => {
        const deletedItem = (item: PropsFolder) => item.label === childrenLabel;
        const indexItem = children?.findIndex(deletedItem);
        children.splice(indexItem, 1);
        if (onChange) {
            onChange(label);
        }
    }

    return (
        <div style={{ margin: '4px 16px' }} >
            <div id={id}>
                <div style={{ color: children?.length ? color[0] : "black", display: 'flex', alignItems: 'center' }}>
                    <FolderOpenOutline
                        color={'#00000'}
                        height="20px"
                        width="20px"
                    />
                    <span style={{ margin: '0 8px' }}>
                        {editting
                            ? <input
                                ref={editRef}
                                defaultValue={label}
                                style={{
                                    width: '80px', marginLeft: '4px'
                                }}
                            />
                            : label}
                    </span>
                    {children?.length > 0 &&
                        <button style={{ marginTop: '0', color: expanded ? 'gray' : 'black' }} onClick={() => setExpanded(!expanded)}>
                            {expanded ? '...' : '<'}
                        </button>
                    }
                    <button style={{ margin: '4px' }} onClick={() => { setAddingSubFolder(!addingSubFolder); setIsSameName(false) }}>
                        +
                    </button>
                    <button style={{ margin: '4px', color: '#34d537' }} onClick={() => handleEdit()}>
                        {editting ? <CheckmarkDoneOutline
                            color={'#34d537'}
                            height="20px"
                            width="20px"
                        /> : 'Edit'}
                    </button>
                    {editting &&
                        <button style={{ margin: '4px' }} onClick={() => setEditting(false)}>
                            X
                        </button>
                    }
                    <button style={{ margin: '4px', color: 'white', background: 'red' }} onClick={() => handleRemoveFolder()}>
                        -
                    </button>
                </div>
                {addingSubFolder &&
                    <div>
                        <input ref={subRef} type="text" style={{
                            width: '80px', marginLeft: '28px'
                        }} />
                        <button style={{ marginLeft: '8px', color: 'black' }} onClick={() => handleAddNewFolder()}>OK</button>
                        {isSameName && <span style={{ marginLeft: '8px', color: 'red' }}>Folder name has exits or Empty</span>}
                    </div>
                }

                {!!children?.length && expanded &&
                    <div >
                        {children?.map((folder: PropsFolder) =>
                            <FolderItem
                                key={folder.label}
                                label={folder.label}
                                id={folder.id}
                                children={folder.children}
                                onChange={handleOnChange}
                                onRemove={handleRemoverChild}
                            />)}
                    </div>
                }
            </div>
        </div >
    );
}

export default FolderItem;