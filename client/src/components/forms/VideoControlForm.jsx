import { useContext, useState } from "react";
import VideosService from "../../API/VideosService";
import { Context } from "../../context";
import { useFetching } from "../../hooks/useFetching";
import { LoadingDots } from "../elements/Loading/LoadingDots";

export const VideoControlForm = ({
  data = {
    id: "",
    title: "",
    description: "",
    tags: "",
    preview: "",
    video: "",
    archived: false,
  },
  mode = "add",
}) => {
  const { store } = useContext(Context);

  const [title, setTitle] = useState(data.title);
  const [description, setDescription] = useState(data.description);
  const [tags, setTags] = useState(data.tags);
  const [preview, setPreview] = useState({ file: data.preview, error: false });
  const [video, setVideo] = useState({ file: data.video, error: false });
  const [archived, setIsArchived] = useState(data.archived);

  const [fetchAddVideo, isAddLoading, addError, addSuccess] = useFetching(
    async (data) => await store.add_video(data)
  );

  const [fetchEditVideo, isEditLoading, editError, editSuccess] = useFetching(
    async (id, data) => await store.edit_video(id, data)
  );

  const [fetchRemoveVideo, isRemoveLoading, removeError, removeSuccess] =
    useFetching(async (id) => await VideosService.remove_video(id));

  const changePreview = (e) => {
    const file = e.target.files[0];
    if (!["image/png", "image/jpg", "image/jpeg"].includes(file.type)) {
      setPreview({ ...preview, error: true });
    } else {
      setPreview({ file: file, error: false });
    }
  };

  const changeVideo = (e) => {
    const file = e.target.files[0];
    if (file.type !== "video/mp4") {
      setVideo({ ...video, error: true });
    } else {
      setVideo({ file: file, error: false });
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (!video.file && mode === "add") return;
    if (mode === "add") {
      fetchAddVideo({
        title,
        description,
        tags,
        preview: preview?.file,
        video: video?.file,
        archived,
      });
    } else {
      fetchEditVideo(data.id, {
        title,
        description,
        tags,
        archived,
      });
    }
  };

  const removeVideo = () => {
    fetchRemoveVideo(data.id);
  };

  return (
    <form className="row g-3" onSubmit={submitForm}>
      <div className="col-12">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="form-control"
          id="title"
          placeholder="Title..."
          required
        />
      </div>

      <div className="col-12">
        <label htmlFor="Description" className="form-label">
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-control"
          id="Description"
          placeholder="Description..."
          rows="10"
        ></textarea>
      </div>

      <div className="col-md-12">
        <label htmlFor="Tags" className="form-label">
          Tags
        </label>
        <div className="input-group">
          <span className="input-group-text">#</span>
          <input
            value={tags || ""}
            onChange={(e) => setTags(e.target.value)}
            type="text"
            className="form-control"
            id="Tags"
            placeholder="List tags separated by commas..."
            aria-describedby="emailHelp"
          />
        </div>
      </div>
      {mode === "add" && (
        <>
          <div className="col-md-6 my-5">
            <label htmlFor="Preview" className="form-label">
              Preview
            </label>
            <input
              onChange={(e) => changePreview(e)}
              type="file"
              id="Preview"
              className={
                preview.error ? "form-control is-invalid" : "form-control"
              }
            />
            <div className="invalid-feedback">
              image/png | image/jpg | image/jpeg only allowed
            </div>
          </div>

          <div className="col-md-6 my-5">
            <label htmlFor="Video" className="form-label">
              Video
            </label>
            <input
              onChange={(e) => changeVideo(e)}
              type="file"
              id="Video"
              className={
                video.error ? "form-control is-invalid" : "form-control"
              }
              required
            />
            <div className="invalid-feedback">video/mp4 only allowed</div>
          </div>
        </>
      )}

      <div className="col-12">
        <div className="form-check">
          <input
            checked={archived}
            onChange={(e) => setIsArchived(e.target.checked)}
            className="form-check-input"
            type="checkbox"
            id="Archived"
          />
          <label className="form-check-label" htmlFor="Archived">
            Archived
          </label>
        </div>
      </div>

      {addError || removeError || editError ? (
        <p className="text-danger text-center">Something went wrong...</p>
      ) : addSuccess ? (
        <p className="text-success text-center">Your video has been added!</p>
      ) : removeSuccess ? (
        <p className="text-success text-center">Your video has been deleted!</p>
      ) : editSuccess ? (
        <p className="text-success text-center">Your video has been edited!</p>
      ) : mode === "edit" ? (
        <>
          <div className="col-8 mt-10">
            <button
              className="btn btn-primary w-100"
              type="submit"
              disabled={isEditLoading ? true : false}
            >
              {isEditLoading ? <LoadingDots /> : "Save changes"}
            </button>
          </div>
          <div className="col-4 mt-10">
            <button
              onClick={removeVideo}
              className="btn btn-danger w-100"
              type="button"
              disabled={isRemoveLoading ? true : false}
            >
              {isRemoveLoading ? <LoadingDots /> : "Remove"}
            </button>
          </div>
        </>
      ) : (
        <div className="col-12 mt-10">
          <button
            className="btn btn-primary w-100"
            type="submit"
            disabled={isAddLoading ? true : false}
          >
            {isAddLoading ? <LoadingDots /> : "Add video"}
          </button>
        </div>
      )}
    </form>
  );
};
