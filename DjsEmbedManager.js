const { EmbedBuilder } = require("discord.js");

class DjsEmbeds {
    constructor(client) {
        this.client = client;
    }

    async success({ interaction, options, ephemeral }) {
        if (!interaction || !options) throw new Error(`One or more required properties are missing to run the "success" method.`);
        if (!options.message) throw new Error(`You must supply a message for the "success" method`);

        const embed = new EmbedBuilder()
            .setColor('Green')
            .setDescription(':white_check_mark: ' + options.message)
        
        if (options.author && typeof options.author === 'boolean') embed.setAuthor({ name: interaction.user.username, iconURL: interaction.user.displayAvatarURL({ format: 'png' })})
        if (options.footer && typeof options.footer === 'object') embed.setFooter(options.footer)
        if (options.title && typeof options.title === 'string') embed.setTitle(options.title)
        if (options.thumbnail && typeof options.title === 'string') embed.setThumbnail(options.thumbnail)
        if (options.image && typeof options.image === 'string') embed.setImage(options.image)

        if (interaction.deferred) return interaction.editReply({ embeds: [ embed] })
        return interaction.reply({ embeds: [ embed], ephemeral: ephemeral })
    }

    async error({ interaction, options, ephemeral }) {
        if (!interaction || !options) throw new Error(`One or more required properties are missing to run the "error" method.`);
        if (!options.message) throw new Error(`You must supply an error message for the "error" method`);

        const embed = new EmbedBuilder()
            .setColor('Red')
            .setDescription(':x: ' + options.message)
        
        if (options.author && typeof options.author === 'boolean') embed.setAuthor({ name: interaction.user.username, iconURL: interaction.user.displayAvatarURL({ format: 'png' })})
        if (options.footer && typeof options.footer === 'object') embed.setFooter(options.footer)
        if (options.title && typeof options.title === 'string') embed.setTitle(options.title)
        if (options.thumbnail && typeof options.title === 'string') embed.setThumbnail(options.thumbnail)
        if (options.image && typeof options.image === 'string') embed.setImage(options.image)

        if (interaction.deferred) return interaction.editReply({ embeds: [ embed] })
        return interaction.reply({ embeds: [ embed], ephemeral: ephemeral })
    }

    async default({ interaction, options, ephemeral }) {
        if (!interaction || !options) throw new Error(`One or more required properties are missing to run the "default" method.`);
        if (!options.message) throw new Error(`You must supply a message for the "default" method`);

        const embed = new EmbedBuilder()
            .setColor(options.color[0].toUpperCase() + options.color.slice(1).toLowerCase())
            .setDescription(options.message)
        
        if (options.author && typeof options.author === 'boolean') embed.setAuthor({ name: interaction.user.username, iconURL: interaction.user.displayAvatarURL({ format: 'png' })})
        if (options.footer && typeof options.footer === 'object') embed.setFooter(options.footer)
        if (options.title && typeof options.title === 'string') embed.setTitle(options.title)
        if (options.thumbnail && typeof options.title === 'string') embed.setThumbnail(options.thumbnail)
        if (options.image && typeof options.image === 'string') embed.setImage(options.image)

        if (interaction.deferred) return interaction.editReply({ embeds: [ embed] })
        return interaction.reply({ embeds: [ embed], ephemeral: ephemeral })
    }
}

module.exports = DjsEmbeds;