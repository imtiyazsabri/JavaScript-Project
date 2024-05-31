const counters = document.querySelectorAll(".counter")

counters.forEach(
    (counter) => {
        const val = counter.getAttribute('data')
        let count = 0;

        function increment() {
            if (count < val) {
                count++;
                counter.innerHTML = count;
                setInterval(increment, 1);
            } else {
                counter.innerHTML = count;
            }
        }
        increment();
    }
)

