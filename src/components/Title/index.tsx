// import { string } from "prop-types";
import './title.css';

interface TitleProps {
  children: string;
}

const Title = ({ children }: TitleProps) => {
  return <h1 className="title">{children}</h1>;
};

export default Title;

// Title.propTypes = {
//   children: string.isRequired,
// };
