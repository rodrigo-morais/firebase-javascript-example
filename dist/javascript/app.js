define(['exports', 'javascript/config'], function (exports, _javascriptConfig) {
    'use strict';

    var _interopRequire = function (obj) { return obj && obj.__esModule ? obj['default'] : obj; };

    var _config = _interopRequire(_javascriptConfig);

    var myDataRef = new Firebase(_config.url);

    var displayChatMessage = function displayChatMessage(name, text) {
        $('<div/>').text(text).prepend($('<em/>').text(name + ': ')).appendTo($('#messagesDiv'));
        $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
    };

    $('#messageInput').keypress(function (e) {
        if (e.keyCode == 13) {
            var name = $('#nameInput').val();
            var text = $('#messageInput').val();
            myDataRef.push({ name: name, text: text });
            $('#messageInput').val('');
        }
    });

    myDataRef.on('child_added', function (snapshot) {
        var message = snapshot.val();
        displayChatMessage(message.name, message.text);
    });
});
//# sourceMappingURL=app.js.map