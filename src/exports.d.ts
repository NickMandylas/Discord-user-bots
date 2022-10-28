declare module "discord-user-bots" {
  export type Message = {
    content: string;
    guild_id: string;
    author: {
      username: string;
    };
  };

  export type User = {
    username: string;
  };

  export interface ClientEvents {
    discord_disconnect: () => void;
    gateway: () => void;
    heartbeat_sent: () => void;
    heartbeat_received: () => void;
    ready: () => void;
    voice_server_update: (message: Message) => void;
    user_update: (message: Message) => void;
    application_command_create: (message: Message) => void;
    application_command_update: (message: Message) => void;
    application_command_delete: (message: Message) => void;
    interaction_create: (message: Message) => void;
    guild_create: (message: Message) => void;
    guild_delete: (message: Message) => void;
    guild_role_create: (message: Message) => void;
    guild_role_update: (message: Message) => void;
    guild_role_delete: (message: Message) => void;
    thread_create: (message: Message) => void;
    thread_update: (message: Message) => void;
    thread_delete: (message: Message) => void;
    thread_list_sync: (message: Message) => void;
    thread_member_update: (message: Message) => void;
    thread_members_update: (message: Message) => void;
    channel_create: (message: Message) => void;
    channel_update: (message: Message) => void;
    channel_delete: (message: Message) => void;
    channel_pins_update: (message: Message) => void;
    guild_member_add: (message: Message) => void;
    guild_member_update: (message: Message) => void;
    guild_member_remove: (message: Message) => void;
    guild_ban_add: (message: Message) => void;
    guild_ban_remove: (message: Message) => void;
    guild_emojis_update: (message: Message) => void;
    guild_stickers_update: (message: Message) => void;
    guild_integrations_update: (message: Message) => void;
    guild_webhooks_update: (message: Message) => void;
    invite_create: (message: Message) => void;
    invite_delete: (message: Message) => void;
    voice_state_update: (message: Message) => void;
    presence_update: (message: Message) => void;
    message_create: (message: Message) => void;
    message_update: (message: Message) => void;
    message_delete: (message: Message) => void;
    message_delete_bulk: (message: Message) => void;
    message_reaction_add: (message: Message) => void;
    message_reaction_remove: (message: Message) => void;
    message_reaction_remove_all: (message: Message) => void;
    message_reaction_remove_emoji: (message: Message) => void;
    typing_start: (message: Message) => void;
  }

  export class Client {
    constructor(apiKey: string);
    on: ClientEvents;

    readonly user: User;
  }
}
