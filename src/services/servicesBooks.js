import axios from "axios";

export const getBooks = () => {
  const options = {
    method: "GET",
    url: "https://bookshelves.p.rapidapi.com/books",
    headers: {
      "X-RapidAPI-Host": "bookshelves.p.rapidapi.com",
      "X-RapidAPI-Key": "193ca285fdmsh91e2ffd0db3cf78p1fb545jsn2547c731ba73",
    },
  };
  return new Promise((resolve, reject) => {
    axios
      .request(options)
      .then(function (response) {
        resolve(response.data)
      })
      .catch(function (error) {
        reject(error);
      });
  });

  /*  Axios.get('https://bookshelves.p.rapidapi.com/books', {headers: {
        'X-RapidAPI-Host': 'bookshelves.p.rapidapi.com',
        'X-RapidAPI-Key': '193ca285fdmsh91e2ffd0db3cf78p1fb545jsn2547c731ba73'
      }}).then((res)=>{
          let books = res.data;
          console.log(books);
         return books

      }).catch((err)=>{
          console.log(err)
      }) */
};
