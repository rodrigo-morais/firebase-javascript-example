import config from 'javascript/config';

let myDataRef = new Firebase(config.url);

let displayChatMessage = (name, text) => {
    $('<div/>').text(text).prepend($('<em/>').text(name + ': ')).appendTo($('#messagesDiv'));
    $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
};

$('#messageInput').keypress((e) => {
    if (e.keyCode == 13) {
        var name = $('#nameInput').val();
        var text = $('#messageInput').val();
        myDataRef.push({ name: name, text: text });
      $('#messageInput').val('');
    }
});

myDataRef.on('child_added', (snapshot) => {
    var message = snapshot.val();
    displayChatMessage(message.name, message.text);
});