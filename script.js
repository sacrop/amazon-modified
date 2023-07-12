const validateEmail = (email) => {
    return email.match(/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/);
};
const validate = () => {
const $result = $('#result');
const email = $('#email').val();
$result.text('');
if (validateEmail(email)) {
    // $result.text(email + ' is valid :)');
    $result.text( 'valid :)');
    $result.css('color', 'green');
} else {
    // $result.text(email + ' is not valid :(');
    $result.text(' invalid :(');
    $result.css('color', 'red');
}
return false;
}
$('#email').on('input', validate);

