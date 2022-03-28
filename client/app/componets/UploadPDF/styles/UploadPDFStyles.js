import styled from "styled-components";

const UploadPDFStyles = styled.div`
  .upload-container {
    width: 800px;
    margin: 6em 0 0 6em;
  }

  .upload-title {
    font-size: 1.6em;
    font-weight: 600;
    text-align: center;
  }

  .upload-form {
    margin-top: 3em;
    text-align: center;
  }

  .upload-controls {
    width: 500px;
    margin: 0 auto;
  }

  .upload-btn {
    margin-top: 2em;
    width: 100%;
  }

  .file-upload-label {
    margin-right: 1em;
  }

  input[type=file]::file-selector-button {
    border: 1px solid #288CF5;
    padding: .5em 1em;
    border-radius: .2em;
    background-color: #288CF5;
    transition: 1s;
    font-size: 16px;
    color: white;
  }

  input[type=file]::file-selector-button:hover {
    background-color: #81ecec;
    border: 2px solid #00cec9;
  }

  .upload-error-msg {
    padding: 0.5em 0 0.5em 0;
    font-weight: 600;
    color: red;
  }

  .upload-progress-msg {
    padding: 1em;
    font-weight: 600;
    color: #454545;
  }

  .upload-success {
    padding: 1em;
    font-weight: 600;
    color: #64C255;
  }

`;

export default UploadPDFStyles;