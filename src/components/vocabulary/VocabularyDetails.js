import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function VocabularyDetails() {
  const [vocabulary, setVocabulary] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:8080/vocabulary/" + id)
      .then((r) => r.json())
      .then((r) => setVocabulary(r));
  }, []);

  if (!vocabulary) {
    return <p>... Loading ...</p>;
  }

  return (
    <div>
      <h2>Vocabulary details</h2>
      <br />
      <strong>Title:</strong> {vocabulary.title}
      <br />
      <strong>description:</strong> {vocabulary.description}
      <br />
      <strong>createdAt:</strong> {vocabulary.createdAt}
      <br />
      <strong>updatedAt:</strong> {vocabulary.updatedAt}
    </div>
  );
}

export default VocabularyDetails;
