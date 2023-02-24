const Patient = () => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-lg border border-red-400">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Name: {""}
        <span className="font-normal  normal-case">Tobby</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Owner: {""}
        <span className="font-normal  normal-case">Nestor</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal  normal-case">email@email.com</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Discharge: {""}
        <span className="font-normal  normal-case">March 25, 2023</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Symptoms: {""}
        <span className="font-normal  normal-case">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
          aspernatur quod eum excepturi voluptates at similique vero, officiis,
          nam exercitationem architecto alias numquam molestiae tempora nihil?
          Voluptatibus expedita earum doloribus.
        </span>
      </p>
    </div>
  );
};

export default Patient;
