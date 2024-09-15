function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    // Calculate degrees for each hand
    const secondsDegrees = ((seconds / 60) * 360) - 90; // Start at 12 o'clock
    const minutesDegrees = ((minutes / 60) * 360) - 90; // Start at 12 o'clock
    const hoursDegrees = (((hours % 12) / 12) * 360) - 90 + ((minutes / 60) * 30); // Start at 12 o'clock and account for minutes

    // Update clock hands
    const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const hourHand = document.querySelector('.hour-hand');

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    // Update digital display
    const timeDisplay = document.getElementById('time');
    const dateDisplay = document.getElementById('date');
    const locationDisplay = document.getElementById('location');

    const formattedTime = now.toLocaleTimeString();
    const formattedDate = now.toLocaleDateString();
    const location = Intl.DateTimeFormat().resolvedOptions().timeZone;

    timeDisplay.textContent = formattedTime;
    dateDisplay.textContent = formattedDate;
    locationDisplay.textContent = `Time Zone: ${location}`;
}

// Update clock every second
setInterval(updateClock, 1000);

// Initial call to set the clock immediately
updateClock();
