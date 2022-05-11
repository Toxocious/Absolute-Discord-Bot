import { SlashCommandBuilder } from '@discordjs/builders';
import { MessageEmbed } from 'discord.js';

import { CommandInterface } from '../types/command';

const TEST: CommandInterface = {
  name: 'test',
  description: 'Generic test command. Does nothing.',

  data: new SlashCommandBuilder()
    .setName('test')
    .setDescription('Generic test command. Does nothing.'),

  run: async (interaction) => {
    try {
      await interaction.deferReply();

      const COMMAND_EMBED = new MessageEmbed()
        .setTitle('Absolute Bot | Test Command')
        .setDescription('Generic test command. Does nothing.')
        .setColor('#4a618f')
        .setTimestamp();

      await interaction.editReply({ embeds: [COMMAND_EMBED] });
      return;
    } catch (err) {
      console.warn('[Command | Test] An error occurred:', err);
    }
  },
};

export default TEST;
