import { database } from "components/libraries/firebase";

export const onSubmit = async (email: string, school: string, setDisabled, setError) => {
  if ((await database.user.where("email", "==", email + school).get()).docs[0]?.data()) {
    setDisabled(true);
    setError("Un billet a déjà été acheté avec cette carte étudiante.");
    return false;
  }
  return true;
};
