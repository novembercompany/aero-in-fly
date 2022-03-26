import { MessageEmbed, Message, Client } from "discord.js";

interface Dev {
    run: () => void;
    play: () => void;
    stop: () => void;
    loop: () => void;
    help: () => void;
    ping: () => void;
}

const run = () => {};

const play = (msg: Message, client: Client) => {};

const stop = (msg: Message, client: Client) => {};

const loop = (msg: Message, client: Client) => {};

const help = (msg: Message, client: Client) => {};

const ping = (msg: Message, client: Client) => {
    msg.channel.send("🏓 **Pong**, `"+client.ws.ping+"ms`")
};

export { run, ping, stop, loop, help, play, Dev }