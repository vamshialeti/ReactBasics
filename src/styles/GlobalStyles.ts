import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }
  /* Add any other global styles you need */
  .modal {
    background: white;
    padding: 20px;
    border-radius: 5px;
    width: 400px;
  }

  .dashboard {
    background: maroon;
    color: white;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal-header {
    display: flex;
    align-items: center;
    justify-content: center;
    background: maroon;
    color: white;
    padding: 10px;
    height: 30px;
  }

  .add-project{
  background: lightgrey;
    margin: 20px 0;
    height: 100px;
    display: flex;
    align-items: center;
  }

  .column {
    padding: 10px;
    display: flex;
    flex-direction: column;
    width: 40%;
  }

  .button {
    width: 20%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
  }

  .card {
  box-shadow: 0 30px 50px 0 rgba(0, 0, 0, 0.3);
  padding: 20px;
  margin-top: 20px;
  }

  .project-list {
  border: 1px solid black;
  padding: 20px;
  border-radius: 5px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  // justify-content: space-around;
  align-items: center;
  }
`;

export default GlobalStyles;
