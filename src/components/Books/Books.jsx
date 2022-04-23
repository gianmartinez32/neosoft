import React, { useEffect, useState } from "react";
import { getBooks } from "../../services/servicesBooks";
import '../Books/index.css'

const Books = () => {
  let datos = null;
  const [data, setdata] = useState(null);
  
  useEffect(() => {
    getAllBooks();
  }, []);

  const getAllBooks = async () => {
    datos = await getBooks();
    console.log(datos);
    if (datos != null) {
      setdata(datos);
      console.log(data);
      /*  console.log('aaaa'+Object.values(data)); */
    } else {
      console.log("error: " + data);
    }
  };
  return (
    <div className="wrapper">
      {data != null ? (
        data.Books.map((book) => (
          
          <div className="container contianer-fluid">
          <div className="card bg-dark" style={{width: '15rem'}}>
            <img src={book.imgUrl} className="card-img-top" alt="..."></img>
            <div className="card-body" style={{color: '#0294A2'}}>
              <h5 className="card-title">{book.title}</h5>
              <p className="card-text">
                {book.author}<br></br>
                {book.review}<br></br>
                {book.source}
              </p>
              <a href="/Login" className="btn btn-primary" style={{backgroundColor: '#0294A2'}}>
                reservar
              </a>
            </div>
          </div>
          </div>
        ))
      ) : (
        <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
      )}
    </div>
  );
};

export default Books;
