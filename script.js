const studentsCounter = new countUp.CountUp('studentsCounter', 1500);
const staffCounter = new countUp.CountUp('staffCounter', 100);
const busesCounter = new countUp.CountUp('busesCounter', 20);

if (document.getElementById('studentsCounter')) {
    studentsCounter.start();
    staffCounter.start();
    busesCounter.start();
}


const admissionForm = document.getElementById('admissionForm');
if (admissionForm) {
    admissionForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const dob = new Date(document.getElementById('dob').value);
        const classToApply = document.getElementById('class').value;
        const age = new Date().getFullYear() - dob.getFullYear();

        const ageCriteria = {
            'LKG': 3,
            'UKG': 4,
            'I': 5,
            'II': 6,
            'III': 7,
            'IV': 8,
            'V': 9,
            'VI': 10,
            'VII': 11,
            'VIII': 12,
            'IX': 13,
            'X': 14
        };

        if (age < ageCriteria[classToApply]) {
            document.getElementById('formResult').innerHTML = '<div class="alert alert-danger" role="alert">Age criteria not matched!</div>';
            return;
        }

        const formData = new FormData(admissionForm);
        const object = {};
        formData.forEach((value, key) => {
            object[key] = value
        });
        const json = JSON.stringify(object);
        document.getElementById('formResult').innerHTML = "Please wait...";

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
            .then(async (response) => {
                let json = await response.json();
                if (response.status == 200) {
                    document.getElementById('formResult').innerHTML = '<div class="alert alert-success" role="alert">Form submitted successfully!</div>';
                } else {
                    console.log(response);
                    document.getElementById('formResult').innerHTML = `<div class="alert alert-danger" role="alert">${json.message}</div>`;
                }
            })
            .catch(error => {
                console.log(error);
                document.getElementById('formResult').innerHTML = `<div class="alert alert-danger" role="alert">Something went wrong!</div>`;
            })
            .then(function () {
                admissionForm.reset();
                setTimeout(() => {
                    document.getElementById('formResult').innerHTML = '';
                }, 3000);
            });
    });
}

particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const object = {};
        formData.forEach((value, key) => {
            object[key] = value
        });
        const json = JSON.stringify(object);
        document.getElementById('formResult').innerHTML = "Please wait...";

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
            .then(async (response) => {
                let json = await response.json();
                if (response.status == 200) {
                    document.getElementById('formResult').innerHTML = '<div class="alert alert-success" role="alert">Form submitted successfully!</div>';
                } else {
                    console.log(response);
                    document.getElementById('formResult').innerHTML = `<div class="alert alert-danger" role="alert">${json.message}</div>`;
                }
            })
            .catch(error => {
                console.log(error);
                document.getElementById('formResult').innerHTML = `<div class="alert alert-danger" role="alert">Something went wrong!</div>`;
            })
            .then(function () {
                contactForm.reset();
                setTimeout(() => {
                    document.getElementById('formResult').innerHTML = '';
                }, 3000);
            });
    });
}
