const GPTSearchBar = () => {
  return (
    <div>
      <form className="bg-black" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Search for a Show/Movies"></input>
        <button></button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
