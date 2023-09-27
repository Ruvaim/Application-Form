import { createContext, useContext, useState } from 'react';

const TempFormContext = createContext();

const getAllTempCards = () => {
  let allTempCards = localStorage.getItem('allTempCards');

  if (allTempCards) {
    return JSON.parse(localStorage.getItem('allTempCards'));
  } else {
    return [];
  }
};

const TempFormProvider = ({ children }) => {
  const [tempCards, setTempCards] = useState(getAllTempCards());
  const [generateTableToggle, setGenerateTableToggle] = useState(false);

  return (
    <TempFormContext.Provider
      value={{
        tempCards,
        setTempCards,
        generateTableToggle,
        setGenerateTableToggle,
      }}
    >
      {children}
    </TempFormContext.Provider>
  );
};

export const TempFormState = () => {
  return useContext(TempFormContext);
};

export default TempFormProvider;
