import './App.css';
import { Route, Routes, } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from './createTheme';
import Signup from "./pages/Signup/Signup";
import { AuthContextProvider, UserAuth } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Homepage from './pages/Homepage/Homepage';
import Signin from './pages/Signin/Signin';
import Step1 from './pages/Signup/Step1';
import Step2Info from './pages/Signup/Step2-Info';
import PlanForm from './pages/Signup/Planform';
import SelectPay from './pages/Signup/SelectPay';
import PaymentLoading from './pages/Signup/PaymentLoading';
import Home from './pages/Movies/Home';
import MoviePage from './pages/Movies/MoviePage';
import Profile from './pages/Movies/Profile';

const App = () => {
  const user = UserAuth();
  let userValid = false;
  if (user) {
    userValid = true;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={userValid === true ? <Home /> : <Homepage />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path='/step1' element={<Step1 />} />
            <Route path='/step2-info' element={<Step2Info />} />
            <Route path='/planform' element={<PlanForm />} />
            <Route path='/selectpay' element={<SelectPay />} />
            <Route path='payment-loading' element={<PaymentLoading />} />

            <Route
              path='/home'
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path='movie-page'
              element={
                <ProtectedRoute>
                  <MoviePage />
                </ProtectedRoute>
              }
            />
            <Route
              path='profile'
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
          </Routes>
        </AuthContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
