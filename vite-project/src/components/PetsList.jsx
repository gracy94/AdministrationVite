import Patient from "./Patient"

const PetsList = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
        <h2 className="font-black text-3xl text-center ">Pet Listing</h2>

        <p className="text-lg mt-5 text-center mb-8">
        Manage your {""}
        <span className="text-red-400 font-bold">Patients and dates</span>
        </p>

        <Patient></Patient>
        <Patient></Patient>
        <Patient></Patient>
    </div>
  )
}

export default PetsList