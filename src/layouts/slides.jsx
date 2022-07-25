import Slider from "react-slick";

function Slides() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="slides">
      <Slider {...settings}>
        <div className="slide">
          <img
            src="https://pursuenews.com/wp-content/uploads/2017/05/Wonder-Woman-Gal-Gadot.png"
            className="img"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            className="img"
            src="https://static2.yan.vn/YanNews/2167221/202203/loat-phim-sieu-hot-chuan-bi-oanh-tac-phong-ve-thang-32022-30e9c71f.jpg"
            alt=""
          />
        </div>
        <div className="slide">
          <img className="img" src="https://shopxanh.com:88/user/newstartv/news/ad7da62e4d45913e92bf0772864fd0bc.jpg" alt="" />
        </div>
        <div className="slide">
          <img className="img" src="https://ghienreview.com/wp-content/uploads/2021/01/Ghien-review-Cuoc-giai-cuu-sinh-tu-Redemption-Day-01.jpg" alt="" />
        </div>
        <div className="slide">
          <img className="img" src="https://i2.wp.com/www.comicsbeat.com/wp-content/uploads/2019/05/BatmanHushFeature-1-min.jpg?fit=1200%2C764&ssl=1" alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default Slides;
