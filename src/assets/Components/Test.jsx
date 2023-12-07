import Typography from "@mui/material/Typography";

const Test = () =>{


  const myArray = [
    {
      number: 1,
      title: 'Users',
      image: 'descarga',
    },
    {
      number: 2,
      title: 'Fondo',
      image: 'FOndo',
    },
    
    
  ]

  


return (
  <>
  {myArray.map((item) => (
  <div key={item.number} className="col-sm-12">
    <img
      src={'../../../img/'+item.image+'.jpg'}
      width="200" height="200 "
      alt={item.title}
    />
    <Typography variant="h4">{item.number}</Typography>
  </div>
))}
  </>
)
}

export default Test;
