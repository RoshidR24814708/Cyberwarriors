const manualButtons = document.querySelectorAll('.manual-btn');

		// Add click event listeners to manual navigation buttons
		manualButtons.forEach(btn => {
		btn.addEventListener('click', () => {
			// Update the checked property of the corresponding radio input
			const radioId = btn.getAttribute('data-slide');
			document.getElementById(radioId).checked = true;
		});
		});

		// Function to simulate automatic navigation
		function autoNavigate() {
		// Get the currently checked radio input
		const checkedRadio = document.querySelector('input[name="radio-btn"]:checked');

		// Get the next radio input or the first one if the last one is checked
		const nextRadio = checkedRadio.nextElementSibling || document.getElementById('radio1');

		// Update the checked property of the next radio input
		nextRadio.checked = true;

		// Trigger a click event on the next radio input to transition to the next slide
		nextRadio.click();
		}

		// Call the autoNavigate function every 5 seconds (5000 milliseconds)
		setInterval(autoNavigate, 5000);

		window.addEventListener('load', function() {
		document.getElementById('radio1').checked = true;
		document.getElementById('radio1').click();
		});

		// Add event listener to reset slideshow after last slide has finished
		const slides = document.querySelector('.slide');
		slides.addEventListener('transitionend', function() {
		const lastRadio = document.getElementById('radio5');
		if (lastRadio.checked) {
			// If last slide is finished, delay reset to the first slide by 5 seconds (5000 milliseconds)
			setTimeout(() => {
			document.getElementById('radio1').checked = true;
			document.getElementById('radio1').click();
			}, 5000);
		}
		});