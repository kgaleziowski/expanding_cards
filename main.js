const panels = [...document.getElementsByClassName('panel')];
const heroHeader = document.getElementById('hero-header');

const FULL_OPACITY = 1;
const SEMI_OPACITY = 0.5;

panels.forEach(panel => {
    panel.addEventListener('click', () => {

        const dataHero = panel.getAttribute('data-hero');
        
        const activePanels = document.getElementsByClassName('active');

        if(activePanels.length > 0) {

            const currentlyActivePanel = document.getElementsByClassName('active')[0];
        
            if(currentlyActivePanel != panel) {
                panel.classList.add('active');
            }
            currentlyActivePanel.classList.remove('active');
        }
        else {
            panel.classList.add('active');
        }

        if(heroHeader.textContent == dataHero) {

            heroHeader.style.opacity == 0 ? heroHeader.style.opacity = 1 : heroHeader.style.opacity = 0;
            return;
        }

        if(heroHeader.style.opacity == FULL_OPACITY)
            heroHeader.style.opacity = SEMI_OPACITY;
        else
            heroHeader.style.opacity = FULL_OPACITY;

        heroHeader.textContent = dataHero;
    })
});