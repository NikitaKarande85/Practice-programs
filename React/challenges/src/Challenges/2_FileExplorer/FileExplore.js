import { useState } from 'react';
import dummyData from './dummyData'
import Folder from './Folder';
import useTraverseTree from './hooks/use-Traverse-Tree';
function FileExplore() {
    const [hereDummyData, setDummyData] = useState(dummyData);
    const {insertNode}=useTraverseTree();

    const handleInsertNode = (folderId, item, isFolder) => {
        const finalTree = insertNode(hereDummyData, folderId, item, isFolder);
        setDummyData(finalTree);
    };

    return (
        <>
            <h1>File Explorer</h1>
            <Folder handleInsertNode={handleInsertNode} hereDummyData={hereDummyData} />
        </>
    )
}
export default FileExplore;