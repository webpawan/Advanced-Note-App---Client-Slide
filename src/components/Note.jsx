import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getSearch, setSelectNote } from "../features/noteSlice";
import { ToastContainer, toast } from "react-toastify";

const Note = ({effect}) => {

  const [notes, setNotes] = useState();
const [finalShow, setFinalShow] = useState([])
  const dispatch = useDispatch();
  const search = useSelector(getSearch);

  const noteEdit = async (noteId) => {

    try {
      const { data } = await toast.promise(axios.get(`/api/note/selectNote/${noteId}`),{
        pending: "please wait",
          success: "now you can edit",
          error: "something is wrong try again or the page ",
      })
      dispatch(setSelectNote(data));

    } catch (error) {
      console.log(error);
    }
  };
  const fetchNote = async () => {
    const { data } = await axios.get("/api/note/");
    setNotes(data);
  };

  useEffect(() => {
    if (notes !== undefined && notes !== null) {
      const result = notes.filter((item) => {
        const { title, body } = item;
        const query = search.toLowerCase();
        return (
          title.toLowerCase().includes(query) ||
          body.toLowerCase().includes(query)
        );
      });
      setFinalShow(result);
    }
  }, [search,notes]);
  const deletenote = async (id) => {
    try {
      const deleteNote = await toast.promise(
        axios.delete(`/api/note/delete/${id}`),
        {
          pending: "note is deleting",
          success: "your note deleted",
          error: "something is wrong try again or the page ",
        }
      );
      fetchNote();

    } catch (error) {
      console.log(error);
    }
  };
   useEffect(() => {
     fetchNote();
   }, [effect]);
  if (notes) {
    <ToastContainer />;
    return (
      <div className="container my-5">
        <div className="row">
          {finalShow?.map((data) => {
            return (
              <motion.div
                className="col-lg-4 col-md-3  col-sm-6 my-4"
                key={data._id}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <div
                  className="card shadow py-1 bg-light  text-light bg-dark "
                  id={data.color}
                >
                  <div className="card-body ">
                    <h5 className="card-title py-1">{data.title}</h5>
                    <p className="card-text">{data.body}</p>

                    <div className="d-flex  align-items-center justify-content-between">
                      <div className="d-flex">
                        <button
                          className="card-link btn btn-outline-danger deleteIcon d-flex "
                          onClick={() => deletenote(data._id)}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/kfzfxczd.json"
                            trigger="hover"
                            colors="primary:#e4e4e4"
                            style={{ height: "25px", width: "25px" }}
                          ></lord-icon>
                        </button>

                        <button
                          className="card-link btn btn-outline-primary btn-delete d-flex deleteIcon"
                          onClick={() => noteEdit(data._id)}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/vufjamqa.json"
                            trigger="hover"
                            colors="primary:#e4e4e4"
                            style={{ height: "25px", width: "25px" }}
                          ></lord-icon>
                        </button>
                      </div>
                      <span className=" mt-1">
                        <i className={data.tag}></i>
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default Note;
