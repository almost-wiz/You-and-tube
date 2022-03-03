export const VideoControlForm = ({ data={}, mode='add' }) => {
  return (
    <form className="row g-3">

      <div className="col-12">
        <label htmlFor="title" className="form-label">Title</label>
        <input type="text" className="form-control" id="title" placeholder="Title..." required/>  {/*className="form-control is-[in]valid"*/}
        {/*<div className="[in]valid-feedback">
          Looks good!
        </div>*/}
      </div>

      <div className="col-12">
        <label htmlFor="Description" className="form-label">Description</label>
        <textarea className="form-control" id="Description" placeholder="Description..." rows='10'></textarea>
      </div>

      <div className="col-md-12">
        <label htmlFor="Tags" className="form-label">Tags</label>
        <div className="input-group">
          <span className="input-group-text">#</span>
          <input type="text" className="form-control" id="Tags" placeholder="List tags separated by commas..." aria-describedby="emailHelp"/>
        </div>
      </div>

      <div className="col-md-6 my-5">
        <label htmlFor="Preview" className="form-label">Preview</label>
        <input type="file" id="Preview" className="form-control"/>
      </div>

      {mode === 'add' && (
        <div className="col-md-6 my-5">
          <label htmlFor="Video" className="form-label">Video</label>
          <input type="file" id="Video" className="form-control" required/>
        </div>
      )}

      <div className="col-12">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" defaultValue="" id="Archived"/>
          <label className="form-check-label" htmlFor="Archived">
            Archived
          </label>
        </div>
      </div>

      {mode === 'edit'
        ? (
          <>
            <div className="col-8 mt-10">
              <button className="btn btn-primary w-100" type="submit">Save changes</button>
            </div>
            <div className="col-4 mt-10">
              <button className="btn btn-danger w-100" type="submit">Delete</button>
            </div>
          </>
        ) : (
          <div className="col-12 mt-10">
            <button className="btn btn-primary w-100" type="submit">Add video</button>
          </div>
        )
      }

    </form>
  )
}
