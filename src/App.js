import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import NotFoundPage from "./pages/users/NotFoundPage/NotFoundPage";
import AttendancePage from "./pages/users/AttendancePage/AttendancePage";
import HomePage from "./pages/users/HomePage/HomePage";
import LoginPage from "./pages/users/LoginPage/LoginPage";
import ProfilePage from "./pages/users/MyPage/MyPage";
import RankingPage from "./pages/users/RankingPage/RankingPage";
import NoticePage from "./pages/users/NoticePage/NoticePage";
import AllCoinsPage from "./pages/users/AllCoinsPage/AllCoinsPage";
// import CoinDetailPage from "./pages/users/CoinDetailPage/CoinDetailPage";
import ContactUsPage from "./pages/users/ContactUsPage/ContactUsPage";
import CoinReviewPage from "./pages/users/CoinReviewPage/CoinReviewPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { React, Fragment } from "react";
import RegisterationPage from "./pages/users/RegisterationPage/RegisterationPage";

function App() {
  const data = [10, 12, 14, 15, 18, 20, 22, 25, 28, 30];

  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/registration" element={<RegisterationPage />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="/ranking" element={<RankingPage />}></Route>
          <Route path="/attendance" element={<AttendancePage />}></Route>
          <Route path="/notice" element={<NoticePage data={data} />}></Route>
          <Route path="/coin_review" element={<CoinReviewPage />}></Route>
          <Route path="/all_coins" element={<AllCoinsPage />}></Route>
          {/* <Route path="/coin_detail" element={<CoinDetailPage />}></Route> */}
          {/* Not sure if I use this or not */}
          <Route path="/contact" element={<ContactUsPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
