import React from 'react';
import ImageBox from '../../common/ImageBox';
import banner1 from '../../../assets/images/2.jpg';
import banner2 from '../../../assets/images/25.jpg';
import banner5 from '../../../assets/images/avatar-s-9.jpg';
import banner6 from '../../../assets/images/avatar-s-17.jpg';

const HeroRight = () => {
  return (
    <div className="basis-1/2 relative hidden md:block">
      <ImageBox
        height="200"
        width="200"
        bottom={true}
        left={true}
        image={banner1}
      />
      <ImageBox
        height="100"
        width="100"
        left={true}
        imagePoitionLeft={220}
        imagePoitionTop={60}
        image={banner5}
      />
      <ImageBox
        height="70"
        width="70"
        bottom={true}
        right={true}
        imagePoitionLeft={50}
        imagePoitionTop={220}
        image={banner6}
      />
      <ImageBox
        height="300"
        width="300"
        bottom={true}
        right={true}
        imagePoitionLeft={150}
        imagePoitionTop={170}
        image={banner2}
      />
    </div>
  );
};

export default HeroRight;
