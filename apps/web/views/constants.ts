export const ocrProcess = (json, setError, setLoadingFile, _lastName, _firstName) => {
  // let e = 0;

  // NOTE - Impossible de vérifier les noms et prénom par rapport au formulaire. Pas assez fiable.
  // (json.responses[0].textAnnotations as any[]).find((t, i) => {
  //   t.description == "Prénom";
  //   if (t.description == "Prénom") e = i;
  // });
  // const firstNameCard = json.responses[0].textAnnotations[e + 1].description;
  // (json.responses[0].textAnnotations as any[]).find((t, i) => {
  //   t.description == "Nom";
  //   if (t.description == "Nom") e = i;
  // });
  // const lastNameCard = json.responses[0].textAnnotations[e + 1].description;
  if (
    !(json.responses[0].textAnnotations as any[]).find((t) => {
      if (t.description.toLowerCase().replaceAll(" ", "") == "epitech") return true;
      else if (t.description.toLowerCase().replaceAll(" ", "") == "eartsup") return true;
      else if (t.description.toLowerCase().replaceAll(" ", "") == "iseg") return true;
    })
  ) {
    setError("Votre carte étudiante ne correspond pas à celle d'une école du groupe IONIS.");
    setLoadingFile({ value: false });
    return false;
  }
  // if (lastNameCard.toLowerCase() != lastName.toLowerCase()) {
  //   setError(`Vos noms de famille ne correspondent pas. ${lastNameCard.toLowerCase()} != ${lastName.toLowerCase()}`);
  //   setLoadingFile({ value: false });
  //   return false;
  // }
  // if (firstNameCard.toLowerCase() != firstName.toLowerCase()) {
  //   setError(`Vos prénoms ne correspondent pas. ${firstNameCard.toLowerCase()} != ${firstName.toLowerCase()}`);
  //   setLoadingFile({ value: false });
  //   return false;
  // }
  setLoadingFile({ value: false, type: "success" });
  return true;
};
