function studentGrade(grades){
    if (grades > 79 && grades <= 100 ) {
    return 'A';
    }
    else if (grades >= 60 && grades <= 79 ) {
    return 'B';
    }
    else if(grades >= 49 && grades <= 59 ) {
    return 'C';
    }
    else if(grades >= 40 && grades <= 49 ) {
    return 'D'
    }
    else if (grades > 0 && grades < 40 )  {
    return 'E'
    }

}
console.log(studentGrade(88))
