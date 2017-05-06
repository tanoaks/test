var socket = io();

            socket.on('welcome', function(data) {
                addMessage(data.message);

                // Respond with a message including this clients' id sent from the server
                socket.emit('i am client', {data: 'foo!', id: data.id});
            });
            socket.on('time', function(data) {
                console.log(data.time);
            });
            socket.on('error', console.error.bind(console));
            socket.on('message', console.log.bind(console));

            