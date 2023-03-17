import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getEnv } from "../../util/env.util";

function VocabularyList() {
  const [vocabularyList, setVocabularyList] = useState([]);

  useEffect(() => {
    const API_URL = getEnv("API_URL");

    fetch(API_URL + "/vocabulary")
      .then((r) => r.json())
      .then((r) => setVocabularyList(r));
  }, []);

  return (
    <div>
      <h2>Vocabulary list</h2>
      <Link className="btn btn-primary" to="/vocabulary/new">
        Create vocabulary
      </Link>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {vocabularyList.map((vocabulary) => (
            <tr key={vocabulary.id}>
              <td>{vocabulary.title}</td>
              <td>{vocabulary.description}</td>
              <td>...</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VocabularyList;
