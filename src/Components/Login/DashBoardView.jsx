import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthProvider from './AuthProvider/AuthProvider';
import DashboardWrapper from '../Login/DashboardWrapper';
import { v4 as uuidv4 } from 'uuid';
import { deleteLink, getLinks, insertNewLink, updateLink } from '../../../Firebase/Config';
import Link from './Link'

const DashBoardView = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [state, setState] = useState(0);
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [links, setLinks] = useState([]);

  const handleUserLoggedIn = async (user) => {
    setCurrentUser(user);
    setState(2);
    const resLinks = await getLinks(user.uid)
    setLinks([...resLinks])
  };

  const handleUserNotRegistered = (user) => {
    navigate('/login');
  };

  const handleUserNotLoggedIn = () => {
    navigate('/login');
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    addLink();
  };

  const addLink = () => {
    console.log('Adding link');
    if (title !== '' && url !== '') {
      const newLink = {
        id: uuidv4(),
        title: title,
        url: url,
        uid: currentUser.uid,
      };

      console.log('New link:', newLink);

      const res = insertNewLink(newLink);
      console.log('Response from insertNewLink:', res);

      newLink.docId = res.id;
      setTitle('');
      setUrl('');
      setLinks([...links, newLink]);
    } else {
      console.log('Title or URL is empty');
    }
  };

  const handleOnChange = (e) => {
    const value = e.target.value;
    console.log('Input changed:', value);

    if (e.target.name === 'title') {
      setTitle(value);
    }

    if (e.target.name === 'url') {
      setUrl(value);
    }
  };

  const handleDeleteLink = async (docId) => {
    await deleteLink(docId)
    const tmp = links.filter(link => link.docId != docId)
    setLinks([...tmp])
  }

  const handleUpdateLink = async  (docId, title, url) => {
    const link = links.find((item) => item.docId === docId)
    console.log(link, docId, title, url)
    link.title = title
    link.url = url
    await updateLink(docId, link)
  }

  if (state === 0) {
    return (
      <AuthProvider
        onUserLoggedIn={handleUserLoggedIn}
        onUserNotLoggedIn={handleUserNotLoggedIn}
        onUserNotRegistered={handleUserNotRegistered}
      >
        loading...
      </AuthProvider>
    );
  }

  return (
    <DashboardWrapper>
      <div className='conteinerBodyDashboard'>
        <h2>dashboard</h2>

        <form action="" onSubmit={handleOnSubmit}>
          <label htmlFor="title">title</label>
          <input type="text" name="title" onChange={handleOnChange} />

          <label htmlFor="url">url</label>
          <input type="text" name="url" onChange={handleOnChange} />

          <input type="submit" value="create new link" />
        </form>

        <div>
          {
            links.map((link) => (
              <Link 
              key={link.docId}
              docId={link.docId}
              url={link.url}
              title={link.title}
              onDelete={handleDeleteLink}
              onUpdate={handleUpdateLink}/>
            ))
          }
        </div>
      </div>
    </DashboardWrapper>
  );
};

export default DashBoardView;
