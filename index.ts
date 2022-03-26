import * as _dds_ from "discord.js";
import * as _j from "./main.json";
import * as _dev from "@aero/dev";

const _ = new _dds_.Client({ intents: [_dds_.Intents.FLAGS.GUILDS, _dds_.Intents.FLAGS.GUILD_MESSAGES] });


_.login(_j.token);

_.on('ready', () => _dev.run());

_.on('messageCreate', (msg) => {
  if (msg.content === '!play') _dev.play(msg, _);
  if (msg.content === '!help') _dev.help(msg, _);
  if (msg.content === '!ping') _dev.ping(msg, _);
  if (msg.content === '!loop') _dev.loop(msg, _);
  if (msg.content === '!stop') _dev.stop(msg, _);
})

