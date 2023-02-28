import Patient from "./Patient"

const PetsList = ({ patients, setPatient, deletePatient}) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {patients && patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center ">Pet Listing</h2>

          <p className="text-lg mt-5 text-center mb-8">
            Manage your {""}
            <span className="text-red-400 font-bold">Patients and Dates</span>
          </p>

          {patients.map((patient) => (
            <Patient 
                key={patient.id} 
                patient={patient}
                setPatient = {setPatient}
                deletePatient={deletePatient}
                ></Patient>
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center ">No patients</h2>

          <p className="text-lg mt-5 text-center mb-8">
            Start adding {""}
            <span className="text-red-400 font-bold">patients</span>
          </p>
        </>
      )}
    </div>
  );
};

export default PetsList