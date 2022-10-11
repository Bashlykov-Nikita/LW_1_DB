function conversionToList(fileText) {
    let State = fileText
    class Student {
        Name = ""
        Surname = ""
        Grade = 0
        Classroom = 0
        Bus = 0
        TName = ""
        TSurname = ""
    }

    function splitString(stringToSplit, separator) {
        const arrayOfStrings = stringToSplit.split(separator)
        return arrayOfStrings
    }
    const comma = ','
    const newLine = '\n'
    let student = new Student()
    let studentList = new List()

    splitString(State, newLine).forEach(line => {
        let word = splitString(line, comma)
        student = {
            Surname: word[0],
            Name: word[1],
            Grade: parseInt(word[2], 10),
            Classroom: parseInt(word[3], 10),
            Bus: parseInt(word[4], 10),
            TSurname: word[5],
            TName: word[6]
        }
        studentList.append(student)
    })
    return studentList
}
