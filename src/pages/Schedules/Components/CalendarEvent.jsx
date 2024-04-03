import { Link } from "react-router-dom";

export const CalendarEvent = ({ event }) => {
  const { title, user } = event;

  return (
    <>
      {/* <strong>{ title }</strong>
            <span> - { user.name }</span> */}
      <div className="event">
        <Link to={"#"} className="title">
            {title}
        </Link>
        <div className="event-tag">Gym</div>
        <div className="subtitle">Plan Premium</div>
        <button
          className="btn btn-primary shadow-primary btn-skew  mt-2"
          onClick={()=>{alert("Eliminar")}}
        >
          Inscribete
        </button>
      </div>
    </>
  );
};
