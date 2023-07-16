let typed= new Typed('.auto-input',{
    strings: ['Front-End Developer!', 'Freelancer!','Competitive Programmer!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 200,
    loop: true,
});


let sections = document.querySelectorAll('section');
let navLinks= document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop;
        let height=sec.offsetHeight;
        let id= sec.getAttribute('id');

        if(top >= offset && top < offset+height){
            navLinks.forEach(links=> {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });
};