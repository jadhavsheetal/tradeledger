import React from "react";
import View from "../../DesignSystem/View";
import EligibilityApplication from "./EligibilityApplication";
import EligibilityResults from "./EligibilityResults";
import { useState } from 'react';

const Eligibility = () => {

  const [eligibilityUser, setEligibilityUser] = useState({})
  const [eligibilityCards, setEligibilityCards] = useState(null)

  return (
    <View>
      <EligibilityApplication saveEligibilityResults={setEligibilityCards} saveEligibilityUser={setEligibilityUser}/>
      <EligibilityResults  eligibilityUser={eligibilityUser} eligibilityResults={eligibilityCards} />
    </View>
  );
};

export default Eligibility;
