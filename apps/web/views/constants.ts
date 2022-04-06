export const ocrProcess = (json, setError, setLoadingFile, lastName, firstName) => {
  let e = 0;

  (json.responses[0].textAnnotations as any[]).find((t, i) => {
    t.description == "Prénom";
    if (t.description == "Prénom") e = i;
  });
  const firstNameCard = json.responses[0].textAnnotations[e + 1].description;
  (json.responses[0].textAnnotations as any[]).find((t, i) => {
    t.description == "Nom";
    if (t.description == "Nom") e = i;
  });
  const lastNameCard = json.responses[0].textAnnotations[e + 1].description;
  (json.responses[0].textAnnotations as any[]).find((t, i) => {
    t.description == "Section";
    if (t.description == "Section") e = i;
  });
  const schoolCard = json.responses[0].textAnnotations[e + 1].description;
  if (schoolCard != "Epitech" && schoolCard != "Eartsup" && schoolCard != "Iseg") {
    setError("Votre carte étudiante ne correspond pas à celle d'une école du groupe IONIS.");
    return setLoadingFile({ value: false });
  }
  if (lastNameCard != lastName) {
    setError("Vos noms de famille ne correspondent pas.");
    return setLoadingFile({ value: false });
  }
  if (firstNameCard != firstName) {
    setError("Vos prénoms ne correspondent pas.");
    return setLoadingFile({ value: false });
  }
  setLoadingFile({ value: false, type: "success" });
};
