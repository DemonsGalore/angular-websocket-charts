import { WebSocket } from 'ws';

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (socket) => {
    console.log('connection');

    const randomizer = Math.floor(Math.random() * 100 + 1);

    setInterval(() => {
        // const data = [10000];
        
        // for (let index = 1; index < 15000; index++) {

        //     const random = Math.floor(Math.random() * 100);

        //     if (Math.random() < 0.5) {
        //         data.push(data[index - 1] + random * 1.1);
        //     }   else {
        //         data.push(data[index - 1] - random);
        //     }
        // }

        const data = [];

        for (let index = 1; index < 1200; index++) {
            const random = Math.floor(Math.random() * 100 * randomizer);
            data.push(random);
        }

        socket.send(JSON.stringify(data));

        // socket.send(Math.random());
        console.log('send', data);
    }, 250);


    socket.on('message', (message) => {
        console.log('message', message);

        

        // for (let index = 0; index < 100; index++) {
        //     socket.send(Math.random());
        // }

        // for (let i = 0; i <= 100; i++) {
        //     setTimeout(() => {
        //         socket.send(Math.random());
        //     }, 500);
        // }

        // setInterval(() => {
        //     socket.send(Math.random());
        //     console.log('send');
            
        // }, 250);



        // socket.send('Roger that! ' + message);
    })
});
