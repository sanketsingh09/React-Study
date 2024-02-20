function Hello() {
  let myName = "Sanket";

  let fullName = () => {
    return "Sanket Singh";
  };

  return (
    <h3>Hello this is the future speaking. I am your master {fullName()}</h3>
  );
}

export default Hello;
