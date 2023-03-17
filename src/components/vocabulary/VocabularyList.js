import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function VocabularyList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/vocabulary")
      .then((r) => r.json())
      .then((r) => setCategories(r));
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
          {categories.map((vocabulary) => (
            <tr>
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
