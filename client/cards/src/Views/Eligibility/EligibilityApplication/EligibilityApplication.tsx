import React from "react";
import { useFormik } from "formik";
import styled from "styled-components";

import FormInput from "../../../DesignSystem/Form/FormInput";
import SubmitButton from "../../../DesignSystem/Form/SubmitButton";
import Title from "../../../DesignSystem/Title";

const FormWrapper = styled.div`
  flex: 1 1 auto;
  width: 100%;
`;

interface FormValues {
  name: string;
  email: string;
  address: string;
}

interface EligibilityProps {
 saveEligibilityUser: Function;
 saveEligibilityResults: Function;
}

const EligibilityApplication : React.FC<EligibilityProps> = ({saveEligibilityResults, saveEligibilityUser}) => {
  const { handleChange, handleSubmit, values } = useFormik<FormValues>({
    initialValues: {
      name: "",
      email: "",
      address: "",
    },
    onSubmit: (values) => {
      const requestOpts = {
                       method: 'post',
                       headers: {'Content-Type':'application/json'},
                       body: JSON.stringify(values)
                     }

      let apiUrl = "/eligibility/check"
      fetch(apiUrl, requestOpts) // data source is an object, not an array.
            .then(res => res.json())
            .then(
              result => {
                console.log(result.eligibleCards);
                saveEligibilityResults(result.eligibleCards)
                saveEligibilityUser(values)

              }
            )
            .catch(error => {
              console.error('Failed to fetch api!', error);
            });
    },
  });
  return (
    <FormWrapper>
      <Title>Cards</Title>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
          value={values.name}
          placeholder="Name"
        />
        <FormInput
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          value={values.email}
          placeholder="Email"
        />
        <FormInput
          type="text"
          name="address"
          id="address"
          onChange={handleChange}
          value={values.address}
          placeholder="Address"
        />
        <SubmitButton text="Submit" />
      </form>
    </FormWrapper>
  );
};

export default EligibilityApplication;
