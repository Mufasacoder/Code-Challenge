
function calculateYearlyPaye (grossSalary) {
   
    if (grossSalary <= 960000){
        return payee = grossSalary - 600000 * 0.45
    }

    else if (grossSalary >960000) {
        return payee = grossSalary - 960000 * 0.55
    }
}
function calculateNHIF(grossSalary){
    if (grossSalary < 5999 ){
      return grossSalary -  150
    }
    else if (grossSalary <= 7999){
        return grossSalary - 300
    }
    else if (grossSalary <= 11999){
        return grossSalary - 400
    }
    else if (grossSalary <= 19999){
        return grossSalary - 600
    }
   else if (grossSalary <= 24999){
        return grossSalary - 750
    }
    else if (grossSalary <= 29999){
        return grossSalary - 850
    }
    else if (grossSalary <= 34999){
        return grossSalary - 900
    }
    else if (grossSalary <= 39999){
        return grossSalary - 950
    }
    else if (grossSalary <= 44999){
        return grossSalary - 1000
    }
    else if (grossSalary <= 49999){
        return grossSalary - 1100
    }
    else if (grossSalary <= 59999){
        return grossSalary - 1200
    }
    else if (grossSalary <= 69999){
        return grossSalary - 1300
    }
    else if (grossSalary <= 79999){
        return grossSalary - 1400
    }
    else if (grossSalary <= 89999){
        return grossSalary - 1500
    }
    else if (grossSalary <= 99999){
        return grossSalary - 1600
    }
    else if (grossSalary > 100000){
        return grossSalary - 1700
    }
}
function calculateNSSF(grossSalary){
    NSSF = grossSalary * 0.06
    console.log(NSSF)
    return NSSF;
}
function calculateHousingLevy(grossSalary){
   housingLevy = grossSalary * 0.015
   console.log(housingLevy)
   return  housingLevy;
}

const calculateNetSalary = (grossSalary) =>{
    const fullDeductions = calculateYearlyPaye(grossSalary) + calculateNHIF(grossSalary) + calculateHousingLevy(grossSalary) + calculateNSSF(grossSalary)
    console.log(grossSalary)
    console.log("full",fullDeductions)
    // return  grossSalary - fullDeductions
}



calculateNetSalary(70000)