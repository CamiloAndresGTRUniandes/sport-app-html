

export const CalendarEvent = ({ event }) => {
  const { title,  notes } = event;
  

  return (
    <div className="gap-1">
      <span
      style=
          {{fontWeight:'bold'}}

      className="title"
      ><u>{title}</u></span>
      
      <p style={
        {
          textAlign: 'justify',
          marginTop: '2px'
        }
      } >{notes}</p>
    </div>
  );
};
