const Form = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center ">Patient monitoring</h2>
      <p className="text-lg mt-5 text-center mb-8">
        Add patients {""}
        <span className="text-red-400 font-bold">Manage</span>
      </p>

      <form className="bg-white shadow-md rounded-lg py-10 mb-10 px-5 border border-red-400">
        <div className="mb-5">
          <label htmlFor="pet" className="block text-gray-700 uppercase font-bold ">
            Pet's Name</label>
          <input 
              id="pet"
              type="text"
              placeholder="Pet's Name"
              className="w-full p-2 mt-2 placeholder-gray-400 border border-red-400 rounded-md"
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
          />
        </div>
        <div className="mb-5">
          <label htmlFor="discharge" className="block text-gray-700 uppercase font-bold ">
            Discharge</label>
          <input 
              id="discharge"
              type="date"
              className="w-full p-2 mt-2 placeholder-gray-400 border border-red-400 rounded-md"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="symptoms" className="block text-gray-700 uppercase font-bold ">
            Symptoms</label>
          <textarea 
              id="symptoms"
              className="w-full p-2 mt-2 placeholder-gray-400 border border-red-400 rounded-md"
              placeholder="Describe the symptoms"
          />
        </div>
        <input 
              type="submit"
              className="bg-red-400 w-full p-2 text-white uppercase font-bold hover:bg-red-500 cursor-pointer transition-all"
              value="Add patient"
          />
      </form>
    </div>
  );
};

export default Form;
