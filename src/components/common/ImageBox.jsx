import React from 'react';

const ImageBox = ({
  image,
  height,
  width,
  top = false,
  bottom = false,
  left = false,
  right = false,
  imagePoitionTop = 0,
  imagePoitionBottom = 0,
  imagePoitionLeft = 0,
  imagePoitionRight = 0,
}) => {
  const customStyle = {
    height: height + 'px',
    width: width + 'px',
    top: imagePoitionTop,
    bottom: imagePoitionBottom,
    left: imagePoitionLeft,
    right: imagePoitionRight,
  };
  return (
    <div
      className="bg-[#fdd9d6] rounded-full overflow-hidden absolute top-10 right-10"
      style={customStyle}
    >
      <img
        src={image}
        alt=""
        className={`object-cover w-full h-full rounded-full absolute ${
          bottom && 'bottom-1'
        } 
        ${top && 'top-1'} ${left && 'left-1'} ${right && 'right-1'}`}
      />
    </div>
  );
};

export default ImageBox;
