let askQuestion =(question, yes,no) =>{
    if(confirm(question)) yes();
    else no();
    
    }
    
    let result =askQuestion("Do you agree",() => {
        alert("you agreed")
    }, 
    ()=>{alert("You canceled the execution.")
});
    
    