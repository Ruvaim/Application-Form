import { createContext, useContext, useState } from 'react';

const FormContext = createContext();

const getAllCards = () => {
  let allCards = localStorage.getItem('allCards');

  if (allCards) {
    return JSON.parse(localStorage.getItem('allCards'));
  } else {
    return [];
  }
};

const FormProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    dob: '',
  });
  const [collegeInfo, setCollegeInfo] = useState({
    id: '',
    clgName: '',
    universityName: '',
    clgLocation: '',
    courseName: '',
    grade: 0,
  });
  const [workInfo, setWorkInfo] = useState({
    companyName: '',
    companyLocation: '',
    workDetail: '',
    description: '',
  });
  const [cards, setCards] = useState(getAllCards());
  const [generateTableToggle, setGenerateTableToggle] = useState(false);

  return (
    <FormContext.Provider
      value={{
        userInfo,
        setUserInfo,
        collegeInfo,
        setCollegeInfo,
        workInfo,
        setWorkInfo,
        cards,
        setCards,
        generateTableToggle,
        setGenerateTableToggle,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const FormState = () => {
  return useContext(FormContext);
};

export default FormProvider;
