const compareButton = document.getElementById("compare-button");
const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const resultLabel = document.getElementById("result-label");

compareButton.addEventListener("click", function() {
  const text1Value = text1.value;
  const text2Value = text2.value;
  const documents = [text1Value, text2Value];

  const tfidf = new TfIdf(documents, {
    stopWords: "english"
  });
  const similarity = tfidf.cosineSimilarity();
  const ratio = similarity[0][1];

  if (ratio >= 0.8) {
    resultLabel.innerHTML = "Plagiarism detected with similarity ratio: " + ratio.toFixed(2);
    resultLabel.style.color = "red";
  } else {
    resultLabel.innerHTML = "Similarity ratio: " + ratio.toFixed(2);
    resultLabel.style.color = "green";
  }
});
