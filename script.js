const projects = document.querySelectorAll(".project") // All project elements
projects.forEach(project => {
    project.addEventListener('click', () => {
        if(project.id == "platformer"){
            // console.log("platformer")
            window.location.href = 'webGL-2d/index.html'
        }
        else if(project.id == "soccer"){
            // console.log("soccer")
            window.location.href = 'webGL-football/index.html'
        }
        else if(project.id == "carpentry"){
            // console.log("soccer")
            window.location.href = 'https://knotnitin.github.io/carpentry-calculator/'
        }
    })
})