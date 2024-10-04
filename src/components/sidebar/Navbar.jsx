import react from "react";

const Navbar = ({ category, setCategory }) => {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li
            onClick={() => {
              setCategory(`men's clothing`);
            }}
          >
            Men's Clothing
          </li>
          <li
            onClick={() => {
              setCategory(`jewelery`);
            }}
          >
            Jewelery
          </li>
          <li
            onClick={() => {
              setCategory(`electronics`);
            }}
          >
            Electronics
          </li>
          <li
            onClick={() => {
              setCategory(`women's clothing`);
            }}
          >
            Women's Clothing
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
