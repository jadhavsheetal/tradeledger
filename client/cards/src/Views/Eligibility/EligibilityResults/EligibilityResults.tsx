import React from "react";
import styled from "styled-components";
import Card from "../../../DesignSystem/Card/Card";
import ResultTitle from "../../../DesignSystem/ResultTitle";

const ResultsWrapper = styled.div`
  flex: 1 1 auto;
  padding-top: 48px;
  justify-content: center;
  margin: 0 -8px;
  display: flex;
  flex-wrap: wrap;
`;

interface ResultsProps {
 eligibilityUser: Object | null;
 eligibilityResults: Array<string> | null;

}

const EligibilityResults : React.FC<ResultsProps> = ({eligibilityUser, eligibilityResults}) => {

  return <ResultsWrapper>
   {eligibilityResults && eligibilityResults.length == 0 ? <ResultTitle>No Eligibile Cards </ResultTitle> : ""}
   {eligibilityResults && eligibilityResults.length > 0 ? <ResultTitle>Eligibile Cards</ResultTitle> : ""}
   {eligibilityResults && eligibilityResults.map((card, index) => <Card>{card}</Card>)}
  </ResultsWrapper>;

};

export default EligibilityResults;
