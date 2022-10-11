const inputField = document.getElementById('file')
const btn = document.getElementById('start')
const result = document.getElementById('result')
const query = document.getElementById('query')
const parameter = document.getElementById('param')
btn.addEventListener('click', function () {
    let file = inputField.files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function () {
        let studentList = conversionToList(reader.result)
        result.innerHTML = out(studentList, query.value, parameter.value)
    }
    reader.onerror = function () {
        console.log(reader.error);
    }
})
