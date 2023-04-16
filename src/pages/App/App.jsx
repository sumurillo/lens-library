import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import AllBusinessesPage from '../AllBusinessesPage/AllBusinessesPage';
import MyBusinessPage from '../MyBusinessPage/MyBusinessPage';
import ManageBusinessPage from '../ManageBusinessPage/ManageBusinessPage';
import NewReviewPage from '../NewReviewPage/NewReviewPage';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/" element={<AllBusinessesPage />} />
              <Route path="/:id/manage-business/" element={<ManageBusinessPage />} />
              <Route path="/:id" element={<MyBusinessPage />} />
              <Route path="/add-review" element={<NewReviewPage />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
