import * as _dds_ from "discord.js";
import * as _j from "./main.json";
import * as _dev from "./packages/dev";

const _ = new _dds_.Client({ intents: [_dds_.Intents.FLAGS.GUILDS, _dds_.Intents.FLAGS.GUILD_MESSAGES] });


_.login(_j.token)

_.on('ready', () => _dev.run())

