const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4">Contact Us Page</h1>
      <form>
        <input
          type="text"
          className="m-3 p-[3px] border border-black rounded-md"
          placeholder="Name"
        />
        <br />
        <input
          type="text"
          className="m-3 p-[3px] border border-black rounded-md"
          placeholder="Message"
        />
        <br />
        <button className="bg-green-600 border rounded-md m-3 p-[5px]">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
