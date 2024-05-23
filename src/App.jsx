import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Pages/AuthenticationPages/Signup';
import Login from './Pages/AuthenticationPages/Login';
import AccountCreated from './Pages/AuthenticationPages/AccountCreated';
import ForgotPassword from './Pages/AuthenticationPages/ForgotPassword';
import Verification from './Pages/AuthenticationPages/Verification';
import ResetPassword from './Pages/AuthenticationPages/ResetPassword';
// import SignUp from './Pages/AdminDashBoardPages/SignUp';
import CreateEvent from './Pages/AdminDashBoardPages/CreateEvent';
// import Home from './Pages/AdminDashBoardPages/Home';
import AllEvents from './Pages/AdminDashBoardPages/AllEvents';
import Attendance from './Pages/AdminDashBoardPages/Attendance';
import AddInvites from './Pages/AdminDashBoardPages/AddInvites';
import AttendeesList from './Pages/AdminDashBoardPages/AttendeesList';
import PrivateRoutes from './ProtectedRoutes';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/accountCreated" element={<AccountCreated />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/Verification" element={<Verification />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          {/* <Route path="/signup" element={<SignUp />} /> */}
          <Route path="/createvent" element={<CreateEvent />} />
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<AllEvents />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/addinvites" element={<AddInvites />} />
          <Route path="/attendees" element={<AttendeesList />} />
        </Route>
        <Route>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
