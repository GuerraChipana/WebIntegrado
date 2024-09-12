import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../style/slider.css';

const SKDImg = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 150,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
    };

    return (
        <main>
            <Slider {...settings}>
                <div>
                    <img className='slider-image' src="src/img/Slider_1.jpeg" alt="Slide 1" />
                </div>
                <div>
                    <img className='slider-image' src="src/img/Slider_2.jpeg" alt="Slide 2" />
                </div>
                <div>
                    <img className='slider-image' src="src/img/Slider_3.jpeg" alt="Slide 3" />
                </div>
            </Slider>
            ¿
        </main>
    );
};

export default SKDImg;
