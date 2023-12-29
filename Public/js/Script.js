let isMorseMode = false;

    $(document).ready(function () {
        $('#conversionForm').submit(function (e) {
            e.preventDefault(); // prevent form submission

            const formData = $(this).serialize();

            // Use isMorseMode to determine the conversion direction
            const url = isMorseMode ? '/convertToText' : '/convert';

            // Send AJAX request
            $.ajax({
                type: 'POST',
                url: url,
                data: formData,
                dataType: 'json',
                success: function (response) {
                    // Update the result container with the converted text or Morse code
                    console.log(response.result);
                    // $('.result-container textarea').val(response.result);
                    $('.result-container h3.output').text(response.result);
                    $('.result-container').show();
                },
                error: function (error) {
                    console.log('Error:', error);
                }
            });
        });

        // Toggle conversion mode when the checkbox is clicked
        $('#toggleConversion').click(function () {
            isMorseMode = !isMorseMode;

            // Update the input placeholder based on the mode
            const placeholderText = isMorseMode ? 'Enter Morse code' : 'Enter text';
            $('#text').attr('placeholder', placeholderText);

            // Clear the input and result when toggling
            $('#text').val('');
            $('.result-container textarea').val('');
            $('.result-container').hide();
        });
    });

    function copyToClipboard() {
        const outputElement = document.querySelector('.result-container h3.output');

    const range = document.createRange();
    range.selectNode(outputElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    document.execCommand('copy');
    alert('Copied to clipboard!');
    }