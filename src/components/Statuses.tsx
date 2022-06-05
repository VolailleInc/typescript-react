/*Uisng union types to assign type notations to render
based on props conditions */
type StatusProps = {
  status: "load" | "success" | "error";
};
export const Statuses = (props: StatusProps) => {
  let message;

  if (props.status === "load") {
    message = "loading...";
  } else if (props.status === "success") {
    message = "Data fetched Successfully!";
  } else if (props.status === "error") {
    message = "Error fetching data";
  }
  return (
    <div>
      <h1>status {message}</h1>
    </div>
  );
};
