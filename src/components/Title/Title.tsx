import Style from './Title.style';

interface TitleProps {
  children: string;
}

const Title = function titleComponent({ children }: TitleProps) {
  return <Style.Title>{children}</Style.Title>;
};

export default Title;
