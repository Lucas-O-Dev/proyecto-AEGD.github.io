import React, { useEffect, useState, useRef } from "react";

const Link = ({ docId, title, url, onDelete, onUpdate }) => {

const [currentTitle, setCurrentTitle] = useState(title);
const [currentUrl, setCurrentUrl] = useState(url);
const [editTitle, setEditTitle] = useState(false);
const [editUrl, setEditUrl] = useState(false);

const titleRef = useRef(null)
const urlRef = useRef(null)

useEffect(() => {

    if(titleRef.current){
        titleRef.current.focus()
    }
}, [editTitle])

useEffect(() => {

    if(urlRef.current){
        urlRef.current.focus()
    }
}, [editUrl])

const handleEditTitle = (e) => {
setEditTitle(true);
};

const handleEditUrl = (e) => {
setEditUrl(true);
};

const handleChangeTitle = (e) => {
setCurrentTitle(e.target.value);
};

const handleChangeUrl = (e) => {
setCurrentUrl(e.target.value);
};

const handleBlurTitle = (e) => {
    setEditTitle(false)
    onUpdate(docId, currentTitle, currentUrl)
}

const handleBlurUrl = (e) => {
    setEditUrl(false)
    onUpdate(docId, currentTitle, currentUrl)
}

const handleDelete = () => {
    onDelete(docId)
}

return (
<div key={docId} className="conteinerLinksDashboard">


<div className="conteinerTitleLinkDashboard">
{editTitle ? (
<>
<input ref={titleRef} value={currentTitle} onChange={handleChangeTitle} onBlur={handleBlurTitle} />
</>
) : (
<>
<button onClick={handleEditTitle}>edit</button>
{currentTitle}{" "}
</>
)}
</div>


<div className="conteinerUrlLinkDashboard">
{editUrl ? (
<>
<input ref={urlRef} value={currentUrl} onChange={handleChangeUrl} onBlur={handleBlurUrl} />
</>
) : (
<>
<button onClick={handleEditUrl}>edit</button>
{currentUrl}
</>
)}
</div>


<button onClick={handleDelete}>delete</button>

</div>
);
};

export default Link;
