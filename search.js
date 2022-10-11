function out(list, query, parameter) {
    let result = []
    const startTime = new Date().getTime()
    switch(query) {
        case 'classesBySurname': {
            for (list.front(); list.currPos() < list.length(); list.next()) {
                if(parameter === list.getElement().Surname){
                    result += `${list.getElement().Classroom}\n`
                }
            }
            
            break
        }
        case 'busBySurname': {
            for (list.front(); list.currPos() < list.length(); list.next()) {
                if(parameter === list.getElement().Surname){
                    result += `${list.getElement().Bus}\n`
                }
            }
            
            break
        }
        case 'studentsByTeacher': {
            for (list.front(); list.currPos() < list.length(); list.next()) {
                if(parameter === list.getElement().TSurname){
                    result += `${list.getElement().Surname} ${list.getElement().Name} ${list.getElement().Classroom}\n`
                }
            }
            
            break
        }
        case 'studentsByBus': {
            for (list.front(); list.currPos() < list.length(); list.next()) {
                if(parseInt(parameter, 10) === list.getElement().Bus){
                    result += `${list.getElement().Surname} ${list.getElement().Name} ${list.getElement().Classroom}\n`
                }
            }
            
            break
        }
        case 'studentsByClassroom': {
            for (list.front(); list.currPos() < list.length(); list.next()) {
                if(parseInt(parameter, 10) === list.getElement().Classroom){
                    result += `${list.getElement().Surname} ${list.getElement().Name} ${list.getElement().Classroom}\n`
                }
            }
            
            break
        }
        
    }
    searchTime = new Date().getTime() - startTime;
    return(`Done in ${(searchTime * 1e-3).toFixed(3) + 'sec'} \n\n${result}`)

}
 // for(list.front(); list.currPos() < list.length(); list.next()){
    //     result += `${list.getElement().Name}\n`
    // }
    // break