import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { getEnv } from "../../util/env.util";

function VocabularyForm(props) {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [createdVocabulary, setCreatedVocabulary] = useState();

  const { vocabulary } = props;

  const onSubmit = (event) => {
    event.preventDefault();

    const API_URL = getEnv("API_URL");

    fetch(API_URL + "/vocabulary", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response);
        }

        return response.json();
      })
      .then((response) => {
        console.log(response);
        setCreatedVocabulary(response);
        toast.success("Vocabulary created successfully");
      })
      .catch((e) => {
        toast.error("Oops! An error happened");
      });
  };

  return (
    <div className="container-md">
      <h2>{vocabulary ? "Edit vocabulary" : "Create vocabulary"}</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            className="form-control"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            className="form-control"
            id="description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Create
        </button>
        {createdVocabulary && (
          <Link
            className="btn btn-primary"
            to={`/vocabulary/${createdVocabulary.id}`}
          >
            View details
          </Link>
        )}
      </form>
    </div>
  );
}

export default VocabularyForm;
