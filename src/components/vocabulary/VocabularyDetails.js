import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getEnv } from "../../util/env.util";

function VocabularyDetails() {
  const [vocabulary, setVocabulary] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    const API_URL = getEnv("API_URL");

    fetch(API_URL + "/vocabulary/" + id)
      .then((r) => r.json())
      .then((r) => setVocabulary(r));
  }, [id]);

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
