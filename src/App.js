import { useState } from 'react';
import './App.css';

const INITIAL_STATE = [
  {id:1,baslik:"Alisveris Yap",tamamlandi:false},
  {id:2,baslik:"Fatura ode",tamamlandi:false},
];

function App() {
  const [liste,setListe]= useState(INITIAL_STATE);
  const [yeniBaslik,setYeniBaslik] = useState("");

  const addNew = title =>{
    setListe([...liste,{id:Date.now(), baslik:yeniBaslik, tamamlandi:false}])
    setYeniBaslik("");
  }

  const markCompleted = id => {
    setListe(liste.map(el => el.id === id ? {...el, tamamlandi: !el.tamamlandi} : el)
              );
  }
  
    return (
      <div className="App">
       <h1>Yapılacaklar Listesi</h1>
       <div className='ekleme_formu'>
          <input value={yeniBaslik} onChange={(e) => setYeniBaslik(e.target.value)} placeholder='listeye ekle' />
          <button onClick={() => {
            addNew(yeniBaslik)
          
          
          }}>Ekle</button>
       </div>
       <div className="liste">
          {liste.map(item => (
            <div key={item.id} onClick={() => markCompleted(item.id)} 
            className={item.tamamlandi ? "yapildi" : ""}>{item.baslik}</div>
          ))}
         
       </div>
       <button onClick={() => setListe(liste.filter(item => !item.tamamlandi))} className="temizle">Tamamlananları temizle</button>
      </div>
    );
  }



export default App;
