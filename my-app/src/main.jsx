import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Library from './chapter_03/Library.jsx';
import Clock from './chapter_04/Clock.jsx';
import CommentList from './chapter_05/CommentList.jsx';
import Accommodate from './chapter_07/Accommodate.jsx';
import ConfirmButton from './chapter_08/ConfirmButton.jsx';
import LandingPage from './chapter_09/LandingPage.jsx';
import AttendanceBook from './chapter_10/AttendanceBook.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AttendanceBook />
  </StrictMode>,
)
