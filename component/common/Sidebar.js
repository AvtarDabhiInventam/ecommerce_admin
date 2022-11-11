import Image from "next/image";
import React from "react";
import Logo from "../../images/logo.png";
import UserImage from "../../images/user-big-img.png";
import style from '../../styles/components/Sidebar.module.scss'

const Sidebar = () => {
  return (
    <div>
      <div className={`${style.panel_sidebar_div} `}>
        <div className={`${style.logo_div} `}>
          <a href="#">
            <div className={`${style.logo_img} `}>
              <Image src={Logo} alt="Logo" />
              <label className={`${style.logo_text} `}>
                STAR <span>VEGA</span>
              </label>
            </div>
          </a>
          <a href="javascript:void(0)" className={`${style.bar_icon} `}>
            <span class="material-symbols-outlined"> menu_open </span>
          </a>
          <span className={`${style.togglebar} material-symbols-outlined`}> close </span>
        </div>

        <div className={`${style.sidebar_user_details_div} `}>
          <div className={`${style.user_img_div} `}>
            <Image src={UserImage} alt="user image" />
          </div>
          <h5 className={`${style.user_name_text} `}>Robert Grant</h5>
          <p className={`${style.user_desc_text} `}>Project Manager</p>
        </div>

        <div className={`${style.sidemenu_div} sidemenu-div`}>
          <a href="#">
            <div className={`${style.menu_box_div} bgactive`}>
              <label>
                <span class="material-symbols-outlined">dashboard</span>
              </label>

              <p>Dashboards</p>
            </div>
          </a>
          <a href="#">
            <div className={`${style.menu_box_div} `}>
              <label>
                <span class="material-symbols-outlined"> person_2 </span>
              </label>
              <p>User</p>
            </div>
          </a>
          <a href="#">
            <div className={`${style.menu_box_div} `}>
              <label>
                <span class="material-symbols-outlined"> local_mall </span>
              </label>
              <p>Product</p>
            </div>
          </a>
          <a href="#">
            <div className={`${style.menu_box_div} `}>
              <label>
                <span class="material-symbols-outlined"> article </span>
              </label>
              <p>Blog</p>
            </div>
          </a>
          <a href="#">
            <div className={`${style.menu_box_div} `}>
              <label>
                <span class="material-symbols-outlined"> lock </span>
              </label>
              <p>Login</p>
            </div>
          </a>
          <a href="#">
            <div className={`${style.menu_box_div} `}>
              <label>
                <span class="material-symbols-outlined">
                  supervisor_account
                </span>
              </label>
              <p>Register</p>
            </div>
          </a>
          <a href="#">
            <div className={`${style.menu_box_div} `}>
              <label>
                <span class="material-symbols-outlined"> warning </span>
              </label>
              <p>Not Found</p>
            </div>
          </a>
          <a href="#">
            <div className={`${style.menu_box_div} `}>
              <label>
                <span class="material-symbols-outlined"> logout </span>
              </label>
              <p>Log Out</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
