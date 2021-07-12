const uploadInput = document.getElementByClass('upload-input');

uploadInput.addEventListener('change', (event) => {
  const fileList = event.target.files;
  console.log(fileList);
});