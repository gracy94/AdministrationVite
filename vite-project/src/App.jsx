import { useState, useEffect } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import PetsList from "./components/PetsList";

function App() {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  useEffect(() => {
    const patientsLS = JSON.parse(localStorage.getItem('patients'));
    patientsLS?.length > 0 && setPatients(patientsLS);
  }, []);
  
  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients));
  }, [patients]);
  
  const deletePatient = (id) => {
    const updatedPatients = patients.filter (pat => pat.id !== id);
    setPatients(updatedPatients)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex ">
        <Form 
            patients={patients} 
            setPatients={setPatients} 
            patient = {patient}
            setPatient={setPatient}
            />
        <PetsList 
            patients={patients} 
            setPatient={setPatient}
            deletePatient={deletePatient}
            />
      </div>
    </div>
  );
}

export default App;
