import { useEffect, useState } from 'react';

export default function Books () {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch data from the server
    const getBooks = async () => {
      try {
        const response = await fetch(
          'http://localhost:5432/books'
        );
        const data = await response.json();
        console.log(data);
        setBooks(data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    getBooks();
  }, []); 

  return (
    <div>
     
    </div>
  );
};

