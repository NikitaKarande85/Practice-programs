import react from 'react'
function useTraverseTree() {
    const insertNode = function (tree, folderId, item, isFolder) {
        //first node added
        if (tree.id == folderId && tree.isFolder) {
            tree.items.unshift({
                id: new Date().getTime(),
                name: item,
                isFolder,
                items: []
            });
            return tree;
        }

        //nested node added
        let nestedNode = tree.items.map((newdata) => {
            return insertNode(newdata, folderId, item, isFolder)
        })
        return { ...tree, nestedNode }
    }

    const DeleteNode = function () {

    }

    const updateNode = function () {

    }
    return { insertNode, DeleteNode, updateNode }
}
export default useTraverseTree;