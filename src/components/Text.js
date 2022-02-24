const classes = {
  h1: "text-xl font-IranSans font-medium text-gray-1",
  p: "text-base font-IranSans text-gray-1",
};

const Text = ({ children, variant }) => {
  return <p className={classes[variant]}>{children}</p>;
};

export default Text;
