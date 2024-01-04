import React from 'react';
import Slider from '../../components/slider/Slider';
import './Home.scss';
import HomeInfoBox from './HomeInfoBox';
import { productData } from '../../components/carousel/data';
import ProductCarousel from '../../components/carousel/Carousel';
import CarouselItem from '../../components/carousel/CarouselItem';
import ProductCategory from './ProductCategory';
import FooterLinks from '../../components/footer/FooterLinks';

const PageHeading = ({ heading, btnText }) => {
  return (
    <>
      <div className="--flex-between">
        <h2 className="--fw-thin">{heading}</h2>
        <button className="--btn">{btnText}</button>
      </div>
      <div className="--hr"></div>
    </>
  );
};

const Home = () => {
  const productss = productData.map((item, index) => (
    <div key={item.id}>
      <CarouselItem
        name={item.name}
        url={item.imageurl}
        price={item.price}
        descriprtion={item.descriprtion}
      />
    </div>
  ));
  return (
    <>
      <Slider />
      <section className="--bt-grey">
        <div className="container">
          <HomeInfoBox />
          <PageHeading heading={'Latest Products'} btnText={'Shop Now>>>'} />
          <ProductCarousel products={productss} />
        </div>
      </section>
      <section className="--bt-grey">
        <div className="container">
          <h3>Categories</h3>
          <ProductCategory />
        </div>
      </section>

      <section className="--bg-grey">
        <div className="container">
          <PageHeading heading={' Mobile Phones'} btnText={'Shop Now>>>'} />
          <ProductCarousel products={productss} />
        </div>
      </section>
      <FooterLinks />
    </>
  );
};

export default Home;
