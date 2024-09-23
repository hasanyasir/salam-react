const ContactUs = () => {
  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl p-4 m-4">Contact us page</h1>
      <input
        type="text"
        className="border border-black p-2 m-2"
        placeholder="username"
      ></input>
      <input
        type="text"
        className="border border-black p-2 m-2"
        placeholder="message"
      ></input>
      <button className="bg-black text-white rounded-md m-2 p-2">Submit</button>
    </div>
  );
};

export default ContactUs;
