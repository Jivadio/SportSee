const SessionToolTip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="session-tooltip">
        <p>{payload[0].value + " min"}</p>
      </div>
    );
  }
  return null;
};

export default SessionToolTip;
