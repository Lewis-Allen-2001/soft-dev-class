import { useState, useEffect } from "react"

const cars = [
    {
      userId: 1,
      id: 1,
      title: "Nissan",
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: "Toyota",
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: "Ford",
      completed: false,
    },
  ];
  
  export default function Cars() {
    return (
      <div>
        <h1>Cars</h1>
        <ul>
          {cars.map((cars) => (
            <li key={cars.id}>{cars.title}</li>
          ))}
        </ul>
      </div>
    );
  };