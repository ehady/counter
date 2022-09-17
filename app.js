let count = 0;

/* select value and buttons */
const value = document.querySelector('#value'); //id name is value
const btns = document.querySelectorAll('.btn'); 

btns.forEach(function(btn) {
    btn.addEventListener('click',function(e){ //we'll check which button the user presses
        const styles = e.currentTarget.classList; 
        if(styles.contains('decrease')){ //if the button has the class of "decrease"
           count--;
    }
    else if(styles.contains('increase')){
        count++;
    }
    else{
        count = 0;
    }
    if(count > 0 ) {
        value.style.color = "green";
    }
    if(count < 0 ) {
        value.style.color = "red";
    }
    if(count === 0 ) { 
        value.style.color = "#222";
    }
    value.textContent = count;
});
});
/* for each button we add event listener 
and then we are using the event object and getting the current target and the class

 */