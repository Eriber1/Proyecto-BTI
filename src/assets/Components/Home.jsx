const buttonGroupStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
};

const buttonContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "60px",
};

const smallerButtonStyle = {
    fontSize: '10px', // Puedes ajustar este valor según tu preferencia
  };

const Home = () => {
  return (
    <>
      <div style={buttonGroupStyle}>
        <div className="card" style={buttonContainerStyle}>
          <button className="btn btn-primary mb-3">+ Facebook</button>
          <button className="btn btn-primary mb-3">+ X</button>
          <button className="btn btn-primary mb-3">+ Youtube</button>
          <button className="btn btn-primary mb-3">+ TikTok </button>
          <button className="btn btn-primary mb-3">+ Whatsapp</button>
          <button className="btn btn-danger mb-3">Eliminar</button>
        </div>

        <div className="card" style={buttonContainerStyle}>
          <button className="btn btn-primary mb-1" style={smallerButtonStyle}>+ Facebook</button>
          <button className="btn btn-primary mb-1 " style={smallerButtonStyle}>+ X</button>
          <button className="btn btn-primary mb-1" style={smallerButtonStyle}>+ Youtube</button>
          <button className="btn btn-primary mb-1" style={smallerButtonStyle}>+ TikTok </button>
          <button className="btn btn-primary mb-1" style={smallerButtonStyle}>+ Whatsapp</button>
          <button className="btn btn-danger mb-1" style={smallerButtonStyle}>Eliminar</button>
        </div>
      </div>
        <hr className="border-danger border-2 opacity-100 mb-3" />

        <div className="card">
            <p>
                Editor
            </p>
        </div>
    </>
  );
};

export default Home;
