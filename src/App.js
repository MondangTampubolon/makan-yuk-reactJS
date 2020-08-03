import React from 'react';
import Card from './components/card';
import './App.css';

function App() {
  // data list card
  let card = [
    {
      image : 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80.jpg',
      restoran: 'Ketoprak BU Haji, Tanjung Duren',
      status: 'makanan sudah selesai diantar',
      tanggal : 'tanggal pemesanan: 1 Januari 2020'
    },
    {
      image : 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60.jpg',
      restoran: 'Tuku Kopi, Cipete',
      status: 'makanan sudah selesai diantar',
      tanggal : 'tanggal pemesanan: 22 Maret 2020'
    },
    {
      image : 'https://images.unsplash.com/photo-1542729779-11d8fe8e25f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60.jpg',
      restoran: 'Starbucks Coffee, Rawamangun',
      status: 'makanan lagi diantar bro',
      tanggal : 'tanggal pemesanan: 15 April 2020'
    },
    {
      image : 'https://images.unsplash.com/photo-1592039017841-65201402f522?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60.jpg',
      restoran: 'Cendol Kak Sri, Cijantung',
      status: 'yah, pesanan kamu abis',
      tanggal : 'tanggal pemesanan: 14 Mei 2020'
    },
  ];
  return (
    <div className='wrapper'>
      <h1 className='title'>Makanan Kamu lagi dimana ya?</h1>
      <Card card={card}/>
    </div>
  );
};

export default App;
