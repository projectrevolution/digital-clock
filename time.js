const clock = document.querySelector('.clock');

const tick = () => {
    
    const now = new Date();
    const h = now.getHours();
    const min = now.getMinutes();
    const seconds = now.getSeconds();

    const html = `
        <span>${h}</span> :
        <span>${min}</span> :
        <span>${seconds}</span>
    `;
    clock.innerHTML = html;
}

setInterval(tick, 1000);