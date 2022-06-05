/*Initialising array types in typescript */
type ListProps = {
  names: { 
    firstName: string;
    lastName: string;
  }[];
};

export const PersonList = (props: ListProps) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <h1 key={name.firstName}>
            {name.firstName} {name.lastName}
          </h1>
        );
      })}
    </div>
  );
};
