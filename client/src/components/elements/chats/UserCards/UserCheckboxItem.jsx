export const UserCheckboxItem = ({
  item,
  selectedMembers,
  setSelectedMembers,
}) => {
  const changeSelect = (e) => {
    if (e.target.checked) {
      setSelectedMembers([...selectedMembers, item]);
    } else {
      setSelectedMembers(selectedMembers.filter((i) => i.id !== item.id));
    }
  };

  return (
    <div className="card border-0 mt-5">
      <div className="card-body">
        <div className="row align-items-center gx-5">
          <div className="col-auto">
            <div className="avatar ">
              <img className="avatar-img" src={item.avatar} alt="" />
            </div>
          </div>
          <div className="col">
            <h5>{item.username}</h5>
          </div>
          <div className="col-auto">
            <div className="form-check">
              <input
                onChange={changeSelect}
                className="form-check-input"
                type="checkbox"
                id={`id-member-${item.id}`}
              />
              <label
                className="form-check-label"
                htmlFor={`id-member-${item.id}`}
              ></label>
            </div>
          </div>
        </div>
        <label
          className="stretched-label"
          htmlFor={`id-member-${item.id}`}
        ></label>
      </div>
    </div>
  );
};
