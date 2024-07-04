function updateTimeAndDay() {
    const currentTimeUTCElement = document.querySelector('[data-testid="currentTimeUTC"]');
    const currentDayElement = document.querySelector('[data-testid="currentDay"]');

    const now = new Date();
    const localTime = now.toLocaleTimeString('en-US', { hour12: true });
    const dayOfWeek = now.toLocaleString('en-US', { weekday: 'long' });

    currentTimeUTCElement.textContent = localTime;
    currentDayElement.textContent = `${dayOfWeek}`;
}

setInterval(updateTimeAndDay, 1000);
updateTimeAndDay();