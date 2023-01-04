import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import AttendancePage from "./pages/users/AttendancePage";
import HomePage from "./pages/users/HomePage";
import LoginPage from "./pages/users/LoginPage";
import ProfilePage from "./pages/users/MyPage";
import RankingPage from "./pages/users/RankingPage";
import NoticePage from "./pages/users/NoticePage";
import CoinsDetailsPage from "./pages/users/CoinsDetailsPage";
import CoinDetailPage from "./pages/users/CoinDetailPage";
import ContactUsPage from "./pages/users/ContactUsPage";
import CoinReviewPage from "./pages/users/CoinReviewPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { React, Fragment } from "react";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="/ranking" element={<RankingPage />}></Route>
          <Route path="/attendance" element={<AttendancePage />}></Route>
          <Route path="/notice" element={<NoticePage />}></Route>
          <Route path="/coin_review" element={<CoinReviewPage />}></Route>
          <Route path="/coins_details" element={<CoinsDetailsPage />}></Route>
          <Route path="/coin_detail" element={<CoinDetailPage />}></Route>
          <Route path="/contact_us" element={<ContactUsPage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
