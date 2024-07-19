const Accordion = ({ electronics, jewelery, mensClothing, womensClothing }) => {
  return (
    <>
      <div className="collapse bg-base-200">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          <h2>Electronics</h2>
        </div>
        <div className="collapse-content">{electronics}</div>
      </div>

      <div className="collapse bg-base-200">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          <h2>Jewelery</h2>
        </div>
        <div className="collapse-content">{jewelery}</div>
      </div>

      <div className="collapse bg-base-200">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          <h2>Men's Clothing</h2>
        </div>
        <div className="collapse-content">{mensClothing}</div>
      </div>

      <div className="collapse bg-base-200">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          <h2>Women's Clothing</h2>
        </div>
        <div className="collapse-content">{womensClothing}</div>
      </div>
    </>
  );
};

export default Accordion;
