<script>
    let quotes = [
        "The only limit to our realization of tomorrow is our doubts of today.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "Believe you can and you're halfway there."
    ];

    let quoteIndex = 0;
    setInterval(() => {
        document.querySelector('.quotes blockquote').textContent = quotes[quoteIndex];
        quoteIndex = (quoteIndex + 1) % quotes.length;
    }, 5000);
</script>
