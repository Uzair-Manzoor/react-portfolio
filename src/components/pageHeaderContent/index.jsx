import PropTypes from 'prop-types';
import './styles.scss';

const PageHeaderContent = (props) => {
  const { headerText, icon } = props;

  return (
    <div className="wrapper">
      <h2>{headerText}</h2>
      <span>{icon}</span>
    </div>
  );
};

PageHeaderContent.propTypes = {
  headerText: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default PageHeaderContent;
