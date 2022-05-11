// import { string } from 'prop-types';
import './description.css';

interface DescriptionProps {
  children: string;
}

const Description = ({ children }: DescriptionProps) => (
  <p className="description">{children}</p>
);

// Description.propTypes = {
//   children: string.isRequired,
// };

export default Description;
