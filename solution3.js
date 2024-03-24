function calculateYearlyPaye (grossSalary) {

    if (grossSalary <= 960000){
        return payee = ((grossSalary - 600000) * .325)
    }
}
    if (grossSalary >960000) {
        return payee = ((grossSalary - 960000) * .35)
    }

function calculateNHIF(grossSalary){
    if (grossSalary < 5999 ){
        return deduction = 150
    }
    if (grossSalary <= 7999){
        return deduction = 300
    }
    if (grossSalary <= 11999){
        return deduction = 400
    }
    if (grossSalary <= 19999){
        return deduction = 600
    }
    if (grossSalary <= 24999){
        return deduction = 750
    }
    if (grossSalary <= 29999){
        return deduction = 850
    }
    if (grossSalary <= 34999){
        return deduction = 900
    }
    if (grossSalary <= 39999){
        return deduction = 950
    }
    if (grossSalary <= 44999){
        return deduction = 1000
    }
    if (grossSalary <= 49999){
        return deduction = 1100
    }
    if (grossSalary <= 59999){
        return deduction = 1200
    }
    if (grossSalary <= 69999){
        return deduction = 1300
    }
    if (grossSalary <= 79999){
        return deduction = 1400
    }
    if (grossSalary <= 89999){
        return deduction = 1500
    }
    if (grossSalary <= 99999){
        return deduction = 1600
    }
    if (grossSalary > 100000){
        return deduction = 1700
    }

function calculateNSSF(grossSalary){
    return NSSF = (grossSalary * .06)
}
function calculateHousingLevy(grossSalary){
    return housingLevy = (grossSalary * .015)
}
function calculateNetSalary(grossSalary){
    const fullDeductions = calculateMonthlyPaye(grossSalary) + calculateNHIF(grossSalary) +calculateHousingLevy(grossSalary)
    return netSalary = grossSalary - fullDeductions
}
}
 console.log("grossSalary") + console.log("grossSalary")
 console.log("Payee") + console.log(calculateMonthlyPaye(grossSalary))
 console.log("NHIF Deductions") + console.log(calculateNHIF(grossSalary))
 console.log("NSSF Deductions") + console.log(calculateNSSF(grossSalary))
 console.log("Housing Levy") + console.log(calculateHousingLevy(grossSalary))
 console.log("NetSalary") + console.log(calculateNetSalary(grossSalary))