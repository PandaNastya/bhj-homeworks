const rotators = document.querySelectorAll(".rotator__case");

const timer = setInterval(() => {
    for (let i = 0; i < rotators.length; i++) {
        const rotator = rotators[i];
        if (rotator.classList.contains('rotator__case_active')) {
            rotator.classList.remove('rotator__case_active')
            if (rotators[i+1]) {
                rotators[i+1].classList.add('rotator__case_active');
            } else {
                rotators[0].classList.add('rotator__case_active');
            }
            break;
        }
    }
}, 1000);
