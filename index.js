import dotenv from 'dotenv'
dotenv.config()

import { 
    Client,
    ButtonBuilder,
    ButtonStyle,
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle
} from 'discord.js'

const client = new Client({
    intents: [
        GetwayIntentBits.Guilds,
        GetwayIntentBits.GuildMessages,
        GetwayIntentBits.GuildMembers,
        GetwayIntentBits.DirectMessages,
    ],
});

client.login(process.env.DISCORD_TOKEN);



const btn = new ButtonBuilder()
        .setCustomId('hiMom')
        .setLabel('Say Hi to My Bot?')
        .setStyle(ButtonStyle.primary);


client.on('messageCreate', async (message) => {
    console.log(message)

    if (!message?.author.bot) {
        message.author.send(
            {
                content: 'Push my btns!',
                components: [btn]
            }
        );
    }
});


client.on('interactionCenter', async interaction => {
    
    if (interaction.customId === 'hi bot') {
    
        await interaction.reply({
            content: 'Bot says hi back!',
            ephemeral: true

    });
}
})