import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TempFormState } from '../Context/TempFormProvider';
import { TempEditForm } from '../Pages/TempEditForm';

const LoadEditForm = () => {
  const [data, setData] = useState(null);
  const [done, setDone] = useState(false);

  const { uuid } = useParams();
  const { tempCards } = TempFormState();

  const currCard = () => {
    return tempCards.find((c) => c.uuid === uuid);
  };

  useEffect(() => {
    const currentCard = currCard();
    setData(currentCard);
    setDone(true);
  }, []);

  if (done) {
    return <TempEditForm preloadedValues={data} />;
  } else {
    return <>Loading</>;
  }
};

export default LoadEditForm;
