import "./homePage.css";
import FeaturedProducts from '../../components/featured products/FeaturedProducts';
import Header from '../../components/header/Header';
import Newsletter from '../../components/newsletter/Newsletter';
import Vision from '../../components/vision/Vision';

function HomePage() {
    return ( 
        <>
            <Header />
            <FeaturedProducts />
            <Vision />
            <Newsletter />
        </>
    );
}

export default HomePage;