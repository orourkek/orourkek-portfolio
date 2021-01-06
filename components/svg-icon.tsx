export interface Props extends React.SVGProps<SVGSVGElement> {
  title?: string;
  color?: string;
}

export const SvgIcon: React.FC<Props> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width={props.width}
    height={props.height}
    {...props}
  >
    <title>{props.title}</title>
    {props.children}
  </svg>
);

export default SvgIcon;
