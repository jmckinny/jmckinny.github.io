window.onload = function () {

    Particles.init({
        selector: '.background',
        connectParticles: true,
        color: "#777777",
        responsive: [
            {
                breakpoint: 2800,
                options: {
                    maxParticles: 300,
                    connectParticles: true
                }
            },
            {
                breakpoint: 1500,
                options: {
                    maxParticles: 250,
                    connectParticles: true
                }
            },
            {
                breakpoint: 900,
                options: {
                    maxParticles: 175,
                    connectParticles: true
                }
            },
            {
                breakpoint: 768,
                options: {
                    maxParticles: 150,
                    connectParticles: true
                }
            }, {
                breakpoint: 425,
                options: {
                    maxParticles: 75,
                    connectParticles: true
                }
            }, {
                breakpoint: 350,
                options: {
                    maxParticles: 0
                    // disables particles.js
                }
            }
        ]
    });
}