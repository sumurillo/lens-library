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
import BusinessDetailPage from '../BusinessDetailPage/BusinessDetailPage';

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
              <Route path="/new" element={<ManageBusinessPage />} />
              <Route path="/my-business" element={<MyBusinessPage />} />
              <Route path="/businesses/:id" element={<BusinessDetailPage />} />
              <Route path="/add-review" element={<NewReviewPage />} />

            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
