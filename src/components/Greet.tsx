/*This illustrate basic props types of string, nmumber and 
boolean in typescrip react. The use of ? on message prop type
indicates the property is optional type*/
type GreatProps = {
  name: string;
  messageCount?: number;
  isLoggrdIn: boolean;
};
export const Greet = (props: GreatProps) => {
  //To set default value for messageCount as 0
  const { messageCount = 0 } = props;
  return (
    <div>
      <h4>
        {props.isLoggrdIn
          ? `Welcome ${props.name} You have ${props.messageCount} unread messages`
          : `Welcome guest`}
      </h4>
    </div>
  );
};
