let calcy = () => {
    let wd = document.getElementById('wd').value;
    let maths = document.getElementById('maths').value;
    let comp = document.getElementById('comp').value;
    let phy = document.getElementById('phy').value;

    let grades = ''

    let totalMarks = parseFloat(wd) + parseFloat(maths) + parseFloat(comp) + parseFloat(phy)
    // console.log(totalMarks);

    let percentage = (totalMarks / 400) * 100
    // console.log(percentage);

    if (percentage <= 100 && percentage >= 80) { grades = 'A' }
    else if (percentage <= 79 && percentage >= 60) { grades = 'B' }
    else if (percentage <= 59 && percentage >= 33) { grades = 'C' }
    else { grades = 'F' }


    if (percentage >= 33) {
        let showData = document.getElementById("showData").innerHTML = `out of 400 your total marks are ${totalMarks} and percentage is ${percentage}%  <br/> Your grade is ${grades} and you are pass.`
    }
    else {
        let showData = document.getElementById("showData").innerHTML = `out of 400 your total marks are ${totalMarks} and percentage is ${percentage}%  <br/> Your grade is ${grades} and you are Fail.`
    }

}