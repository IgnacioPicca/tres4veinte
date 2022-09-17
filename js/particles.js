
// All options can be found here: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
// The slim version doesn't have the following plugins:
// Absorbers, Emitters, PolygonMask, Interactivity Trail
const options = {
    background: {
        color: "#000", // the canvas background color
    },
    interactivity: {
        events: {
            onClick: {
                // this handles the mouse click event
                enable: false,
                mode: "push", // this adds particles
            },
            onHover: {
                // this handles the mouse hover event
                enable: true,
                mode: "repulse", // this make particles move away from the mouse
            },
        },
        modes: {
            push: {
                quantity: 6, // number of particles to add
            },
            repulse: {
                distance: 100, // the distance of the particles from the mouse
            },
        },
    },
    particles: {
        links: {
            enable: true, // this enables links between particles
            opacity: 0.3,
            distance: 150,
        },
        move: {
            enable: true, // this makes particles move
            speed: { min: 1, max: 2 }, // this is the speed of the particles
        },
        opacity: {
            value: { min: 0.1, max: 0.3 }, // this sets the opacity of the particles
        },
        size: {
            value: { min: 1, max: 3 }, // this sets the size of the particles
        },
    },
};

// tsParticles.load has two parameters, the first one is the id of the container, the second one is an object with the options
tsParticles.load("tsparticles", options);
