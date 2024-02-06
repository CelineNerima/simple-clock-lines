function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12 || 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Calculate angles for hour, minute, and second hand positions
    const hourAngle = (hours % 12) * 30 + minutes * 0.5;
    const minuteAngle = minutes * 6;
    const secondAngle = seconds * 6;

    // Rotate lines based on calculated angles
    $("#hourLine").css("transform", `rotate(${hourAngle}deg)`)
        .children(".clock-number").html(hours)
        .css("transform", `rotate(${-hourAngle}deg)`);
    
    $("#minuteLine").css("transform", `rotate(${minuteAngle}deg)`)
        .children(".clock-number").html(minutes)
        .css("transform", `rotate(${-minuteAngle}deg)`);

    $("#secondLine").css("transform", `rotate(${secondAngle}deg)`)
        .children(".clock-number").html(seconds)
        .css("transform", `rotate(${-secondAngle}deg)`);
}

// Update clock after each second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();
