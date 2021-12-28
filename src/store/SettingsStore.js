import { Store } from "pullstate";

const SettingsStore = new Store({
  categories: [
    {
      label: "Ο αγωνιστικός χώρος",
      value: "1",
    },
    {
      label: "Η μπάλα",
      value: "2",
    },
    {
      label: "Οι παίχτες",
      value: "3",
    },
    {
      label: "Εξοπλισμός παιχτών",
      value: "4",
    },
    {
      label: "Ο διαιτητής",
      value: "5",
    },
    {
      label: "Οι άλλοι εξωματούχοι αγώνα",
      value: "6",
    },
    {
      label: "Διάρκεια αγώνα",
      value: "7",
    },
    {
      label: "Έναρξη και επανέναρξη του παιχνιδιού",
      value: "8",
    },
    {
      label: "Μπάλα εντός και εκτός παιχνιδιού",
      value: "9",
    },
    {
      label: "Καθορισμός του αποτελέσματος ενός αγώνα",
      value: "10",
    },
    {
      label: "Παίχτης εκτός παιχνιδιού",
      value: "11",
    },
    {
      label: "Παραβάσεις και ανάρμοστη συμπεριφορά",
      value: "12",
    },
    {
      label: "Ελεύθερα λακτίσματα",
      value: "13",
    },
    {
      label: "Το πέναλτι",
      value: "14",
    },
    {
      label: "Επαναφορά της μπάλας από την πλάγια γραμμή",
      value: "15",
    },
    {
      label: "Από τέρματος λάκτισμα",
      value: "16",
    },
    {
      label: "Γωνιαίο λάκτισμα",
      value: "17",
    },
    {
      label: "ΚΑΠ",
      value: "18",
    },
  ],
  difficulties: [
    {
      label: "Τοπικό",
      value: "easy",
    },
    {
      label: "Εθνικό",
      value: "medium",
    },
    {
      label: "Champions League",
      value: "hard",
    },
  ],

  chosenCategory: false,
  chosenDifficulty: false,
});

export default SettingsStore;

export const updateChosenCategory = (category) => {
  SettingsStore.update((s) => {
    s.chosenCategory = category;
  });
};

export const updateChosenDifficulty = (difficulty) => {
  SettingsStore.update((s) => {
    s.chosenDifficulty = difficulty;
  });
};
