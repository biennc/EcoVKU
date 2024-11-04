import GiveBottleReceiveGift from "./exchangeGift/GiveBottleReceiveGift";
import "./style.css";
import React, { useState } from "react";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="App">
        <header>
          <a href="#" className="logo">
            Eco<span className="fas fa-globe-asia"></span>VKU
          </a>

          <div id="menu" className="fas fa-bars"></div>

          <nav className="navbar">
            <a href="home">Home</a>
            <a href="project">Project</a>
            <a href="donate">Donate</a>
            <a href="team">Team</a>
            <a href="testimonial">Testimonial</a>
            <a href="events">Events</a>
          </nav>
        </header>

        <section className="home" id="home">
          <div className="content">
            <h3>Save the Planet</h3>
            <p>
              Our planet is important to all of us. Now you can easily recycle
              and earn gifts and benefits, while saving a little more for nature
              and the environment.
            </p>
            <a href="#" className="btn">
              get started
            </a>
          </div>
        </section>

        <div className="icons-container">
          <div className="icons">
            <img src={require("./assets/images/icon1.png")} alt="" />
            <h3>Thu rác - Đổi quà</h3>
            <p>
              Đi dạo trong thành phố và thiên nhiên và thu thập vật liệu có thể
              tái chế. Cho mọi thứ vào túi, chụp ảnh, tái chế và đổi sen đá.
            </p>
            <button className="btn" onClick={handleOpenModal}>
              đổi ngay
            </button>
          </div>
          {isModalOpen && (
            <GiveBottleReceiveGift
              isOpen={isModalOpen}
              onClose={handleCloseModal}
            />
          )}

          <div className="icons">
            <img
              src={require("./assets/images/garbage-sorting2.jpeg")}
              alt=""
            />
            <h3>Phân loại rác</h3>
            <p>
              Hãy chuẩn bị cho những người hàng xóm xung quanh bạn, giờ đây bạn
              cũng có thể ký gửi các thùng chứa ký gửi vào một trong các tùy
              chọn sau: máy tự động, thùng tái chế hoặc thùng mở.
            </p>
            <a href="#" className="btn">
              xem thêm
            </a>
          </div>

          <div className="pics">
            <img src={require("./assets/images/classifypin2.jpg")} alt="" />
            <h3>Phân loại pin</h3>
            <p>
              Máy phân loại pin là thiết bị bắt buộc đối với Nhà sản xuất Bộ pin
              để kiểm tra và phân loại điện áp và điện trở.
            </p>
            <a href="#" className="btn">
              xem thêm
            </a>
          </div>

          <div className="icons">
            <img src={require("./assets/images/recycle.jfif")} alt="" />
            <h3>Ý tưởng</h3>
            <p>
              Thu thập vật liệu tái chế, chụp ảnh, quét mã vạch được tìm thấy
              tại mỗi điểm tái chế, gửi những gì bạn đã thu thập được và kiếm
              tiền Eco
            </p>
            <a href="#" className="btn">
              xem thêm
            </a>
          </div>
        </div>

        <section className="project" id="project">
          <h1 className="heading">our projects</h1>

          <div className="box-container">
            <div className="box">
              <img src={require("./assets/images/project-1.jpg")} alt="" />
              <h3 className="title">planting tress</h3>
              <div className="info">
                <h3>planting tress</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Perferendis sint aliquam velit in autem doloribus nam optio
                  laboriosam ducimus harum.
                </p>
                <a href="#">Read more</a>
              </div>
            </div>

            <div className="box">
              <img src={require("./assets/images/project-2.jpg")} alt="" />
              <h3 className="title">wind energy</h3>
              <div className="info">
                <h3>wind energy</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Perferendis sint aliquam velit in autem doloribus nam optio
                  laboriosam ducimus harum.
                </p>
                <a href="#">Read more</a>
              </div>
            </div>

            <div className="box">
              <img src={require("./assets/images/project-3.jpg")} alt="" />
              <h3 className="title">saving animals</h3>
              <div className="info">
                <h3>saving animals</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Perferendis sint aliquam velit in autem doloribus nam optio
                  laboriosam ducimus harum.
                </p>
                <a href="#">Read more</a>
              </div>
            </div>

            <div className="box">
              <img src={require("./assets/images/project-4.jpg")} alt="" />
              <h3 className="title">recyling waste</h3>
              <div className="info">
                <h3>recycling waste</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Perferendis sint aliquam velit in autem doloribus nam optio
                  laboriosam ducimus harum.
                </p>
                <a href="#">Read more</a>
              </div>
            </div>
          </div>
        </section>

        <section className="donate" id="donate">
          <div className="box-container">
            <div className="box">
              <i className="fas fa-users"></i>
              <h3>1000+</h3>
              <p>volunteers involved</p>
            </div>

            <div className="box">
              <i className="fas fa-tree"></i>
              <h3>4500+</h3>
              <p>trees planted</p>
            </div>

            <div className="box">
              <i className="fas fa-paw"></i>
              <h3>420+</h3>
              <p>animals saved</p>
            </div>

            <div className="box">
              <i className="fas fa-solar-panel"></i>
              <h3>730+</h3>
              <p>solar panels</p>
            </div>
          </div>

          <div className="donate-box">
            <h3>Donation amount</h3>
            <div className="amount">
              <input className="active" type="button" value="$5"></input>
              <input type="button" value="$10"></input>
              <input type="button" value="$20"></input>
              <input type="button" value="$25"></input>
              <input type="button" value="$50"></input>
              <input type="button" value="$100"></input>
              <input type="button" value="$500"></input>
              <input type="text" placeholder="$ other"></input>
            </div>
            <a href="#" className="btn">
              Donate now
            </a>
          </div>
        </section>

        <section className="team" id="team">
          <h1 className="heading">Our Team</h1>

          <div className="box-container">
            <div className="box">
              <img src={require("./assets/images/team/bien.jpg")} alt="" />
              <div className="info">
                <h3>Nguyễn Công Biên</h3>
                <p>Member</p>
                <div className="share">
                  <a href="#" className="fab fa-facebook-f"></a>
                  <a href="#" className="fab fa-twitter"></a>
                  <a href="#" className="fab fa-instagram"></a>
                  <a href="#" className="fab fa-linkedin"></a>
                </div>
              </div>
            </div>

            <div className="box">
              <img
                src={require("./assets/images/team/anonymous-man.png")}
                alt=""
              />
              <div className="info">
                <h3>Trương Công Hoàn Thành</h3>
                <p>Team Leader</p>
                <div className="share">
                  <a href="#" className="fab fa-facebook-f"></a>
                  <a href="#" className="fab fa-twitter"></a>
                  <a href="#" className="fab fa-instagram"></a>
                  <a href="#" className="fab fa-linkedin"></a>
                </div>
              </div>
            </div>

            <div className="box">
              <img
                src={require("./assets/images/team/anonymous-man.png")}
                alt=""
              />
              <div className="info">
                <h3>Trung Hiếu</h3>
                <p>Member</p>
                <div className="share">
                  <a href="#" className="fab fa-facebook-f"></a>
                  <a href="#" className="fab fa-twitter"></a>
                  <a href="#" className="fa-solid fa-square-envelope"></a>
                  <a href="#" className="fab fa-linkedin"></a>
                </div>
              </div>
            </div>

            <div className="box">
              <img
                src={require("./assets/images/team/anonymous-man.png")}
                alt=""
              />
              <div className="info">
                <h3>Hồ Bảo Nguyên</h3>
                <p>Member</p>
                <div className="share">
                  <a href="#" className="fab fa-facebook-f"></a>
                  <a href="#" className="fab fa-twitter"></a>
                  <a href="#" className="fab fa-instagram"></a>
                  <a href="#" className="fab fa-linkedin"></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonial" id="testimonial">
          <h1 className="heading">Testimonials</h1>

          <div className="box-container">
            <div className="box">
              <div className="comment">
                <i className="fas fa-quote-left"></i>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Asperiores sequi libero quasi natus fugit laboriosam
                  architecto atque. Aliquid, repudiandae neque.{" "}
                </p>
                <i className="fas fa-quote-right"></i>
              </div>
              <div className="user">
                <img src={require("./assets/images/pic1.png")} alt="" />
                <h3>Contributor</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>

            <div className="box">
              <div className="comment">
                <i className="fas fa-quote-left"></i>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Asperiores sequi libero quasi natus fugit laboriosam
                  architecto atque. Aliquid, repudiandae neque.{" "}
                </p>
                <i className="fas fa-quote-right"></i>
              </div>
              <div className="user">
                <img src={require("./assets/images/pic2.png")} alt="" />
                <h3>Contributor</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>

            <div className="box">
              <div className="comment">
                <i className="fas fa-quote-left"></i>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Asperiores sequi libero quasi natus fugit laboriosam
                  architecto atque. Aliquid, repudiandae neque.{" "}
                </p>
                <i className="fas fa-quote-right"></i>
              </div>
              <div className="user">
                <img src={require("./assets/images/pic3.png")} alt="" />
                <h3>Contributor</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>

            <div className="box">
              <div className="comment">
                <i className="fas fa-quote-left"></i>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Asperiores sequi libero quasi natus fugit laboriosam
                  architecto atque. Aliquid, repudiandae neque.{" "}
                </p>
                <i className="fas fa-quote-right"></i>
              </div>
              <div className="user">
                <img src={require("./assets/images/pic4.png")} alt="" />
                <h3>Contributor</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="events" id="events">
          <h1 className="heading">Our Events</h1>

          <div className="box-container">
            <div className="box">
              <img src={require("./assets/images/event1.jpg")} alt="" />
              <div className="content">
                <h3>1 may, 2021 / 09:00am to 06:00pm</h3>
                <a href="#" className="title">
                  saving the environment and planting the tress
                </a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  provident quidem sapiente placeat odit modi architecto
                  accusantium numquam ea tempore?
                </p>
                <a href="#" className="btn">
                  participate
                </a>
              </div>
            </div>

            <div className="box">
              <img
                src={require("./assets/images/doi-chai-lay-sen.jpg")}
                alt=""
              />
              <div className="content">
                <h3>27 Oct, 2024 / 09:00am to 06:00pm</h3>
                <a href="#" className="title">
                  Đổi chai lấy sen
                </a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  provident quidem sapiente placeat odit modi architecto
                  accusantium numquam ea tempore?
                </p>
                <a href="#" className="btn">
                  participate
                </a>
              </div>
            </div>

            <div className="box">
              <img src={require("./assets/images/event3.jpg")} alt="" />
              <div className="content">
                <h3>1 may, 2021 / 09:00am to 06:00pm</h3>
                <a href="#" className="title">
                  saving the environment and planting the tress
                </a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  provident quidem sapiente placeat odit modi architecto
                  accusantium numquam ea tempore?
                </p>
                <a href="#" className="btn">
                  participate
                </a>
              </div>
            </div>

            <div className="box">
              <img src={require("./assets/images/event4.jpg")} alt="" />
              <div className="content">
                <h3>1 may, 2021 / 09:00am to 06:00pm</h3>
                <a href="#" className="title">
                  saving the environment and planting the tress
                </a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  provident quidem sapiente placeat odit modi architecto
                  accusantium numquam ea tempore?
                </p>
                <a href="#" className="btn">
                  participate
                </a>
              </div>
            </div>

            <div className="box">
              <img src={require("./assets/images/event5.jpg")} alt="" />
              <div className="content">
                <h3>1 may, 2021 / 09:00am to 06:00pm</h3>
                <a href="#" className="title">
                  saving the environment and planting the tress
                </a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  provident quidem sapiente placeat odit modi architecto
                  accusantium numquam ea tempore?
                </p>
                <a href="#" className="btn">
                  participate
                </a>
              </div>
            </div>

            <div className="box">
              <img src={require("./assets/images/event6.jpg")} alt="" />
              <div className="content">
                <h3>1 may, 2021 / 09:00am to 06:00pm</h3>
                <a href="#" className="title">
                  saving the environment and planting the tress
                </a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  provident quidem sapiente placeat odit modi architecto
                  accusantium numquam ea tempore?
                </p>
                <a href="#" className="btn">
                  participate
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="footer">
          <div className="box-container">
            <div className="box">
              <h3>About us</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusamus, neque nemo dolorem eius id laudantium maxime dicta
                impedit fuga rem?
              </p>
            </div>

            <div className="box">
              <h3>Quick links</h3>
              <a href="#">Home</a>
              <a href="#">Project</a>
              <a href="#">Donate</a>
              <a href="#">Team</a>
              <a href="#">Testimonial</a>
              <a href="#">Events</a>
            </div>

            <div className="box">
              <h3>Contact us</h3>
              <p>
                {" "}
                <i className="fas fa-phone"></i> +84 1111111111{" "}
              </p>
              <p>
                {" "}
                <i className="fas fa-envelope"></i> lead.22kit@vku.udn.vn
              </p>
              <p>
                {" "}
                <i className="fas fa-map-marker-alt"></i> DaNang, VietNam -
                55000{" "}
              </p>
            </div>

            <div className="box">
              <h3>follow us</h3>
              <a href="#">Facebook</a>
              <a href="#">TikTok</a>
              <a href="#">Gmail</a>
              <a href="#">Youtube</a>
              <a href="#">Linkedin</a>
            </div>
          </div>

          <h1 className="credit">
            {" "}
            Created by <a href="#"> Bien NC</a> | All rights reserved@2024{" "}
          </h1>
        </div>
      </div>
    </>
  );
};

export default App;
