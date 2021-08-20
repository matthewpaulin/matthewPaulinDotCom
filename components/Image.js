const Image = ({ image, style, className }) => {
  return (
    <img
      src={image.url}
      alt={image.alternativeText}
      style={style}
      className={className}
    />
  );
};

export default Image;
