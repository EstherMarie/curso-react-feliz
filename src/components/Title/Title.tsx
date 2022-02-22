import Style from './Title.style';

const Title = function titleComponent({ children }: {children: string}) {
  return <Style.Title>{ children }</Style.Title>
 };

export default Title;