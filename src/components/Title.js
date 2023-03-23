const Title = (props) => {
  const { title, titleSpan } = props;
  return (
    <div className="section-title">
      <h2>
        {title} <span>{titleSpan}</span>
      </h2>
    </div>
  );
};
export default Title;
