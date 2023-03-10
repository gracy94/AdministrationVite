import { useState, useEffect } from "react";
import Error from "./Error";

const Form = ({patients, setPatients, patient, setPatient}) => {
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [discharge, setDischarge] = useState('');
  const [symptoms, setSymptoms] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(patient).length > 0) {
      setName(patient.name)
      setOwner(patient.owner)
      setEmail(patient.email)
      setDischarge(patient.discharge)
      setSymptoms(patient.symptoms)
    }
  }, [patient])
  

  //Random id creator
  const genId = ()=> {
    const random = Math.random().toString(36).substr(2);
    const date = Date.now().toString(36);

    return random + date;
  }

  const handleSubmit = (e)=> {
    e.preventDefault();
    // Form validation
    if([name, owner, email, discharge, symptoms].includes('')) {
      setError(true)
    } else {
      setError(false)
    }

    //patient object
    const patientObject = {
      name,
      owner,
      email,
      discharge,
      symptoms,
    }

    if (patient.id) {
      //editing
      patientObject.id = patient.id

      const updatedPatients = patients.map ( pat => pat.id === patient.id ? patientObject : pat)
      setPatients(updatedPatients)
      setPatient({})
    } else {
      //new
      patientObject.id = genId()
      setPatients([...patients, patientObject]);
    }

    //Restart form
    setName('')
    setOwner('')
    setEmail('')
    setDischarge('')
    setSymptoms('')
  }
  
  
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center ">Patient monitoring</h2>
      <p className="text-lg mt-5 text-center mb-8">
        Add patients {""}
        <span className="text-red-400 font-bold">Manage</span>
      </p>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 mb-10 px-5 border border-red-400">
        {error && <Error><p>All fields are required</p></Error>}
        <div className="mb-5">
          <label htmlFor="pet" className="block text-gray-700 uppercase font-bold ">
            Pet's Name</label>
          <input 
              id="pet"
              type="text"
              placeholder="Pet's Name"
              className="w-full p-2 mt-2 placeholder-gray-400 border border-red-400 rounded-md"
              value={name}
              onChange = {(e)=> setName(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="owner" className="block text-gray-700 uppercase font-bold ">
            Owner's Name</label>
          <input 
              id="owner"
              type="text"
              placeholder="Owner's Name"
              className="w-full p-2 mt-2 placeholder-gray-400 border border-red-400 rounded-md"
              value={owner}
              onChange = {(e)=> setOwner(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold ">
            Email</label>
          <input 
              id="email"
              type="email"
              placeholder="Email"
              className="w-full p-2 mt-2 placeholder-gray-400 border border-red-400 rounded-md"
              value={email}
              onChange = {(e)=> setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="discharge" className="block text-gray-700 uppercase font-bold ">
            Discharge</label>
          <input 
              id="discharge"
              type="date"
              className="w-full p-2 mt-2 placeholder-gray-400 border border-red-400 rounded-md"
              value={discharge}
              onChange = {(e)=> setDischarge(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="symptoms" className="block text-gray-700 uppercase font-bold ">
            Symptoms</label>
          <textarea 
              id="symptoms"
              className="w-full p-2 mt-2 placeholder-gray-400 border border-red-400 rounded-md"
              placeholder="Describe the symptoms"
              value={symptoms}
              onChange = {(e)=> setSymptoms(e.target.value)}
          />
        </div>
        <input 
              type="submit"
              className="bg-red-400 w-full p-2 text-white uppercase font-bold hover:bg-red-500 cursor-pointer transition-all"
              value={patient.id ? 'Edit patient' : 'Add patient'}
          />
      </form>
    </div>
  );
};

export default Form;
