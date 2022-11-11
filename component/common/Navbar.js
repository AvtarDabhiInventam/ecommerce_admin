import Image from "next/image";
import React from "react";
import style from "../../styles/components/Navbar.module.scss";
import Navusericon from "../../images/user-image.png";

const Navbar = () => {
  return (
    <div>
      <div className={`${style.header_section_main_div} `}>
        <div className={`${style.header_main_div} `}>
          <div className={`${style.toggle_menu_icon} `}>
            <span className="material-symbols-outlined"> menu </span>
          </div>
          <div className={`${style.mob_header_div} `}>
            <div className={`${style.brand_logo} `}>
              <div className={`${style.header_left_search_div} `}>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search....."
                    id="mail"
                    name="email"
                  />
                  <span
                    className={`${style.search_icon} material-symbols-outlined`}
                  >
                    search
                  </span>
                </div>
              </div>
              <div className={`${style.mob_user_hide_show} `}>
                <div className={`${style.mob_user_profile_div} `}>
                  <ul className={`${style.header_right_side_menu} `}>
                    <li className={`${style.header_icons_div} `}>
                      <div className={`${style.icon_box} `}>
                        <span className="material-symbols-outlined">
                          {" "}
                          mail{" "}
                        </span>
                      </div>
                    </li>
                    <li className={`${style.header_icons_div} `}>
                      <div className={`${style.icon_box} `}>
                        <div
                          className={`${style.notification_point} pulse-effects`}
                        ></div>
                        <span className="material-symbols-outlined">
                          notifications_active
                        </span>
                      </div>
                    </li>
                    <li className={`${style.header_icons_div} `}>
                      <div className={`${style.icon_box} `}>
                        <span className="material-symbols-outlined">
                          shopping_cart
                        </span>
                      </div>
                    </li>
                    <li className={`${style.header_user_dropdown}`}>
                      <div className={`${style.profile} `}>
                        <div className={`${style.user_profile_div} `}>
                          <span className={`${style.user_icon} `}>
                            <Image src={Navusericon} alt="user icon" />
                          </span>
                          <div className={`${style.user_name_div} `}>
                            <p className={`${style.header_name} `}>
                              John Martin
                            </p>
                          </div>
                          <span className="material-symbols-outlined">
                            expand_more
                          </span>
                        </div>
                        <div className={`${style.dropdown_menu_div} `}>
                          <ul className={`${style.menu} `}>
                            <li>
                              <a className={`${style.signin_text} `} href="#">
                                <span className="material-symbols-outlined icons">
                                  person
                                </span>
                                Profile
                              </a>
                            </li>
                            <li>
                              <a className={`${style.signin_text} `} href="#">
                                <span className="material-symbols-outlined icons">
                                  logout
                                </span>
                                Logout
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>

                  <div
                    className={`${style.header_user_dropdown} ${style.header_bar_profile} `}
                  >
                    <div className={`${style.profile} `}>
                      <div className={`${style.user_profile_div} `}>
                        <span className={`${style.user_icon} `}>
                          <Image src={Navusericon} alt="user icon" />
                        </span>

                        <p className={`${style.header_name} `}>John Martin</p>
                      </div>
                      <div className={`${style.dropdown_menu_div} `}>
                        <ul className={`${style.menu} `}>
                          <li>
                            <a className={`${style.signin_text} `} href="#">
                              <span
                                className={`${style.icons} material-symbols-outlined`}
                              >
                                person
                              </span>
                              Profile
                            </a>
                          </li>
                          <li>
                            <a className={`${style.signin_text} `} href="#">
                              <span
                                className={`${style.icons} material-symbols-outlined`}
                              >
                                settings
                              </span>
                              Setting
                            </a>
                          </li>
                          <li>
                            <a className={`${style.signin_text} `} href="#">
                              <span
                                className={`${style.icons} material-symbols-outlined`}
                              >
                                account_balance_wallet
                              </span>
                              My Wallet
                            </a>
                          </li>
                          <li>
                            <a className={`${style.signin_text} `} href="#">
                              <span
                                className={`${style.icons} material-symbols-outlined`}
                              >
                                logout
                              </span>
                              Logout
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <label
              for="toggle-btn"
              className={`${style.show_menu_btn} ${style.mob_bar_btn} `}
            >
              <span
                className={`${style.toggle_icon} material-symbols-outlined`}
              >
                menu
              </span>
            </label>
          </div>
          <nav>
            <div className={`${style.navigations} `}>
              <ul className={`${style.header_right_side_menu} `}>
                <li className={`${style.header_icons_div} `}>
                  <a href="#">
                    <div className={`${style.icon_box} `}>
                      <span className="material-symbols-outlined">
                        dark_mode
                      </span>
                    </div>
                  </a>
                </li>
                <li className={`${style.header_icons_div} `}>
                  <a href="#">
                    <div className={`${style.icon_box} `}>
                      <span className="material-symbols-outlined"> mail </span>
                    </div>
                  </a>
                </li>
                <li className={`${style.header_icons_div} `}>
                  <a href="#">
                    <div className={`${style.icon_box} `}>
                      <span className="material-symbols-outlined">
                        shopping_cart
                      </span>
                    </div>
                  </a>
                </li>
                <li className={`${style.header_icons_div} `}>
                  <a href="#">
                    <div className={`${style.icon_box} `}>
                      <div
                        className={`${style.notification_point} pulse-effects`}
                      ></div>
                      <span className="material-symbols-outlined">
                        notifications_active
                      </span>
                    </div>
                  </a>
                </li>
                <li className={`${style.header_user_dropdown} `}>
                  <div className={`${style.profile} `}>
                    <div className={`${style.user_profile_div} `}>
                      <span className={`${style.user_icon} `}>
                        <Image src={Navusericon} alt="user icon" />
                      </span>
                      <div className={`${style.user_name_div} `}>
                        <p className={`${style.header_name} `}>John Martin</p>
                      </div>
                      <span className="material-symbols-outlined">
                        expand_more
                      </span>
                    </div>
                    <div className={`${style.dropdown_menu_div} `}>
                      <ul className={`${style.menu} `}>
                        <li>
                          <a className={`${style.signin_text} `} href="#">
                            <span
                              className={`${style.icons} material-symbols-outlined`}
                            >
                              person
                            </span>
                            Profile
                          </a>
                        </li>
                        <li>
                          <a className={`${style.signin_text} `} href="#">
                            <span
                              className={`${style.icons} material-symbols-outlined`}
                            >
                              settings
                            </span>
                            Setting
                          </a>
                        </li>
                        <li>
                          <a className={`${style.signin_text} `} href="#">
                            <span
                              className={`${style.icons} material-symbols-outlined`}
                            >
                              account_balance_wallet
                            </span>
                            My Wallet
                          </a>
                        </li>
                        <li>
                          <a className={`${style.signin_text} `} href="#">
                            <span
                              className={`${style.icons} material-symbols-outlined`}
                            >
                              logout
                            </span>
                            Logout
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
