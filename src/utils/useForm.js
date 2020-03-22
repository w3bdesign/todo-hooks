import { useState } from 'react';

import { FORM_INITIAL_STATE } from '../constants/INITIAL_STATE';

const useForm = () => {
  const [state, setState] = useState([FORM_INITIAL_STATE]);

  const handleChange = e => {
      e.persist();
      setState(state => ({ ...state, [e.target.name]: e.target.value }))
      //console.log(state);
  
  }

  return [state, handleChange];
};




export default useForm;
