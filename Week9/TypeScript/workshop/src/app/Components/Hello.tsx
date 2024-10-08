type HelloProps = {
    name: "Lewis";
    age: "23";
  };


export function Hello({ name, age }: HelloProps) {

   
    return (
      <div>
        Hello {name} who is {age}
      </div>
    );
  }