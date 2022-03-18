export const ModalCascade = ({ Children, setModal, data }) => {
  return (
    <div
      className="modal fade show hide-scrollbar" style={{display: 'block', backgroundColor: "rgb(0,0,0, 0.5)"}}
      onClick={() => setModal(false)}
    >
      <div
        className="modal-dialog modal-dialog-centered modal-fullscreen-xl-down mh-80"
        onClick={(e) => {e.stopPropagation()}}
      >
        <div className="modal-content h-100">
          <div className="modal-body py-0">
            {<Children setModal={setModal} data={data}/>}
          </div>
        </div>
      </div>
    </div>
  )
}
