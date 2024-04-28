import { useEffect, useRef, useState } from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";

//layouts
import Header, { Mainheader } from "./../layouts/Header";
import Footer from "./../layouts/Footer";
import Footer2 from "../layouts/Footer2";
import ScrollToTop from "./../layouts/ScrollToTop";

//Pages
import Home from "./Home";
import AboutUs from "./AboutUs";
import Team from "./Team";
import Pricing from "./Pricing";
import Faq from "./Faq";
import { Schedule } from "./Schedules/Pages/Schedule";
import ErrorPage from "./ErrorPage";
import DetailMealTablePage from './MealPlans/Pages/DetailMealTablePage';
import UnderConstruction from "./UnderConstruction";
import ComingSoon from "./ComingSoon";
import Portfolio from "./Portfolio";
import PortfolioDetails from "./PortfolioDetails";
import Services from "./ServicePage/Pages/Service";
import ServicesDetails from "./ServicesDetails";
import BlogGrid from "./BlogGrid";
import MealTablePlanPage from "./MealPlans/Pages/MealTablePlanPage";
import RecomendacionDetailPage from "./Recommendations/Pages/RecommendationDetailPage";
import BlogLargeSidebar from "./BlogLargeSidebar";
import BlogListSidebar from "./BlogListSidebar";
import BlogDetail from "./BlogDetail";
import Appointment from "./Appointment";
import Login from "./Auth/Pages/Login";
import Register from "./Auth/Pages/Register";
import WeightCalculator from "./WeightCalculator";
import ContactUs from "./ContactUs";
import Home2 from "./Home2";
import AdministrarSeguimiento from "./AdministrarSeguimiento";
import Header2 from "../layouts/Header2";
import Home3 from "./Home3";
import UserProfile from "./User/Pages/UserProfile";
import ServicesDetailsTable from "./ServicesDetailsTable";
import RecommendationPage from "./Recommendations/Pages/RecommendationPage";
import Recomendaciones from "./Recomendaciones";
import RecomendacionDetail from "./RecomendacionDetail";
import RecomendacionPlanDepor from "./RecomendacionPlanDepor";
import AsociacionTerceros from "./AsociacionTerceros";
import Seguimientos from "./Seguimientos";
import ServiciosProductos from "./ServiciosProductos";
import EdicionServiciosProductos from "./EdicionServiciosProductos";
import EdicionRecomendacion from "./EdicionRecomendacion";
import CarritoCompras from "./CarritoCompras";
import ProductServiceEdit from "./ProductServices/Pages/ProductServiceEdit";
import ProductServices from "./ProductServices/Pages/ProductServiceList";

import Pagar from "./Pagar";
import { CloseSession } from "./Auth/Pages";
import ListUserTracking from "./UserTracking/Pages/ListUserTracking";
import { RecommendationForUser, EditRecommendation  } from "./UserTracking/Pages";


function Index() {
  var baseName = "/";
  const scrollTopBtn = useRef(null);

  window.onscroll = () => {
    window.scrollY > 650
      ? scrollTopBtn.current.setAttribute("style", "display:block")
      : scrollTopBtn.current.setAttribute("style", "display:none");
  };
  return (
    <BrowserRouter basename={baseName}>
      <Routes>
        <Route path="/error-404" exact element={<ErrorPage />} />
        <Route
          path="/under-maintenance"
          exact
          element={<UnderConstruction />}
        />

        <Route path="/appointment" exact element={<Appointment />} />
        <Route path="/Register" exact element={<Register />} />
        <Route path="/Login" exact element={<Login />} />

        <Route element={<MainLayout />}>
          <Route path="/" exact element={<Home />} />
          <Route path="/about-us" exact element={<AboutUs />} />
          <Route path="/team" exact element={<Team />} />
          <Route path="/faq" exact element={<Faq />} />
          <Route path="/pricing" exact element={<Pricing />} />
          <Route path="/schedule" exact element={<Schedule />} />
          <Route path="/portfolio" exact element={<Portfolio />} />
          <Route path="/user-profile" exact element={<UserProfile />} />
          <Route path="close-session" exact element={<CloseSession />} />
          <Route path="/RecomendacionesPage" exact element={<RecommendationPage />} />
          <Route path="/user-tracking/:id" exact element={<RecommendationForUser />} />
          <Route path="/edit-recommendation/:id" exact element={<EditRecommendation />} />

          <Route
            path="/edicion-recomendacion"
            exact
            element={<EdicionRecomendacion />}
          />
          {/* <Route path="/servicio-productos" exact element={<ServiciosProductosTable />} />  */}

          <Route
            path="/asociacion-terceros"
            exact
            element={<AsociacionTerceros />}
          />
          <Route
            path="/portfolio-details"
            exact
            element={<PortfolioDetails />}
          />
          <Route
            path="/productos-servicios"
            exact
            element={<ServiciosProductos />}
          />
          <Route path="/product-services" exact element={<ProductServices />} />
          <Route
            path="/edit-product-services/:productId"
            exact
            element={<ProductServiceEdit />}
          />
          
          <Route
            path="/services/01b50f0d-3226-4df2-b912-4da4b37d9bd9"
            exact
            element={<MealTablePlanPage />}
          />


          <Route
            path="/DetailMealTable/:productId"
            exact
            element={<DetailMealTablePage />}
          />

           <Route
            path="/Recomendacion-Detail/:id"
            exact
            element={<RecomendacionDetailPage />}
          />
          <Route
            path="/edit-product-services/"
            exact
            element={<ProductServiceEdit />}
          />
          <Route path="/services" exact element={<Services />} />
          <Route
            path="/user-tracking"
            exact
            element={<ListUserTracking />}
          />
          <Route path="/services-details" exact element={<ServicesDetails />} />
          <Route
            path="/services-details-table"
            exact
            element={<ServicesDetailsTable />}
          />
          <Route path="/blog-grid" exact element={<BlogGrid />} />
          <Route path="/Recomendacion" exact element={<Recomendaciones />} />
          <Route
            path="/Recomendacion-Detail"
            exact
            element={<RecomendacionDetail />}
          />
          <Route
            path="/recomendaciones-personales"
            exact
            element={<RecomendacionPlanDepor />}
          />
          <Route
            path="/edicion-servicios-productos"
            exact
            element={<EdicionServiciosProductos />}
          />
          <Route path="/carrito-compras" exact element={<CarritoCompras />} />
          <Route path="/pagar" exact element={<Pagar />} />
          <Route path="/coming-soon" exact element={<ComingSoon />} />
          <Route
            path="/blog-large-sidebar"
            exact
            element={<BlogLargeSidebar />}
          />
          <Route
            path="/blog-list-sidebar"
            exact
            element={<BlogListSidebar />}
          />
          <Route path="/blog-details" exact element={<BlogDetail />} />
          <Route
            path="/weight-calculator"
            exact
            element={<WeightCalculator />}
          />
          <Route path="/contact-us" exact element={<ContactUs />} />
          <Route path="/seguimientos" exact element={<Seguimientos />} />
        </Route>
        <Route element={<MainLayout2 />}>
          <Route path="/home-2" exact element={<Home2 />} />
        </Route>
        <Route element={<MainLayout3 />}>
          <Route path="/home-3" exact element={<Home3 />} />
        </Route>
      </Routes>
      {/* <Switcher /> */}
      <ScrollToTop />
      <button
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        ref={scrollTopBtn}
        className="scroltop icon-up"
        type="button"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </BrowserRouter>
  );
}

function MainLayout() {
  return (
    <div className="page-wraper">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
function MainLayout2() {
  return (
    <div className="page-wraper">
      <Header2 />
      <Outlet />
      <Footer2 />
    </div>
  );
}
function MainLayout3() {
  const [headerFix, setheaderFix] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setheaderFix(window.scrollY > 50);
    });
  }, []);
  return (
    <div className="page-wraper">
      <header className="site-header mo-left header header-transparent style-1">
        <div
          className={`sticky-header mt-3 main-bar-wraper navbar-expand-lg ${
            headerFix ? "is-fixed" : ""
          }`}
        >
          <Mainheader />
        </div>
      </header>
      <Outlet />
    </div>
  );
}

export default Index;
