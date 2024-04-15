

export const CalendarEvent = ({ event }) => {
  const { title,  notes } = event;
  

  return (
    <div className="gap-1">
      <p style={
        {
          textAlign: 'justify',
        }
      } ><strong>{title}:</strong> {notes}</p>
    </div>
  );
};
