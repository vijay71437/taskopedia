function Student(props) {
  const fullName = "Kris Wally";
  const programmingExp = 2;
  return (
    <div className="container p-4 bg-success my-3 rounded">
      <div className="row border">
        <div className="col-2">
          <img
            src={`https://ui-avatars.com/api/?name=${props.name}`}
            style={{ maxWidth: "50px" }}
          ></img>
        </div>
        <div className="col-8">
          {props.name}
          <br />
          Cading Experience {props.expirence} years
        </div>
        <div className="col-2">{props.children}</div>
      </div>
    </div>
  );
}

export default Student;
