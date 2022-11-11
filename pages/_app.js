import "../styles/globals.css";
import "../styles/common.scss";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "../component/common/Navbar";
import Sidebar from "../component/common/Sidebar";
import Footer from "../component/common/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div class="panel-view-main-div">
        <div class="left-side-section-div">
          {/* Sidebar */}
          <Sidebar />
        </div>
        <div className="right-side-section-div">
          {/* Navbar */}
          <Navbar />

          {/* contains */}
          <div class="right-contain-main-div">
            <h4>contain here...</h4>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>

      
      
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
