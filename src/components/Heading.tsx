/*Assigning types to children props which can be passed to 
a react component */
type HeaderProps = {
  children: string;
};

export const Heading = (props: HeaderProps) => {
  return <div>{props.children}</div>;
};
