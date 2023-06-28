
const dots = document.querySelectorAll('.dot')

for(elem in dots){
    dot = dots[elem]
    dot.addEventListener('click', function(e){
        if (this.classList.contains('dot')){
            this.classList.remove('dot')
            this.classList.add('notdot')

        }else{
            this.classList.remove('notdot')
            this.classList.add('dot')
        }

    })
}