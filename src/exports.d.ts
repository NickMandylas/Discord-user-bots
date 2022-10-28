declare module "discord-user-bots" {
  export type UserStatus = "online" | "idle" | "dnd" | "invisible";

  export interface UserCustomStatus {
    text?: string;
    emoji?: string;
    expireAt?: string;
  }

  export type User = {
    username: string;
  };

  export type Message = any;

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

    // Custom Events
    embed_sent: (message: Message) => void;
    message_edit: (message: Message) => void;
  }

  export interface ClientOptions {
    api?: string;
    wsurl?: string;
    os?: string;
    bd?: string;
    language?: string;
    typinginterval?: string;
  }

  export type MessageAttachmentOptions = {
    path: string;
    name: string;
    description: string;
  };

  export interface MessageOptions {
    content: string;
    reply?: string;
    tts?: boolean;
    embeds: [];
    allowed_mentions?: {
      allowUsers: boolean;
      allowRoles: boolean;
      allowEveryone: boolean;
      allowRepliedUsers: boolean;
    };
    components: [];
    stickers: [];
    attachments?: [string | MessageAttachmentOptions];
  }

  export interface InviteOptions {
    validate?: boolean;
    max_age: number;
    max_users: number;
    targer_user_id: string;
    target_type: string;
    temporary: boolean;
  }

  export class Client {
    readonly user_settings: any;
    readonly user: User;
    readonly tutorial: any;
    readonly session_id: string;
    readonly notes: any;
    readonly guild_join_requests: any;
    readonly user_guild_settings: any;
    readonly relationships: any;
    readonly read_state: any;
    readonly private_channels: any;
    readonly presences: any;
    readonly guilds: any;
    readonly guild_experiments: any;
    readonly geo_ordered_rtc_regions: any;
    readonly friend_suggestion_count: any;
    readonly experiments: any;
    readonly country_code: any;
    readonly consents: any;
    readonly connected_accounts: any;
    readonly analytics_token: string;
    readonly _trace: any;

    constructor(token: string, clientOptions?: ClientOptions);

    fetch_messages: (amount: number, channelId: string, offset: string) => any;
    get_guild: (guildId: string) => any;
    join_guild: (guildId: string) => any;
    get_invite_info: (link: string) => any;
    leave_guild: (guildId: string) => any;
    delete_guild: (guildId: string) => any;
    send: (channelId: string, message: MessageOptions) => any;
    edit: (messageId: string, channelId: string, message: string) => any;
    delete_message: (messageId: string, channelId: string) => any;
    type: (channelId: string) => any;
    stop_typing: () => any;
    group: (userIds: string[]) => any;
    leave_group: (groupId: string) => any;
    remove_person_from_group: (userId: string, groupId: string) => any;
    rename_group: (name: string, groupId: string) => any;
    create_server: (name: string, templateId?: string) => any;
    create_thread_from_message: (
      messageId: string,
      channelId: string,
      name: string,
      archivalTime?: number
    ) => any;
    create_thread: (
      channelId: string,
      name: string,
      archivalTime?: number
    ) => any;
    delete_thread: (threadId: string) => any;
    add_reaction: (messageId: string, channelId: string, emoji: string) => any;
    remove_reaction: (
      messageId: string,
      channelId: string,
      emoji: string
    ) => any;
    change_status: (status: UserStatus) => any;
    set_custom_status: (status: UserCustomStatus) => any;
    create_invite: (channelId: string, inviteOptions: InviteOptions) => any;
    parse_invite_link: (link: string) => any;
    set_config: (clientOptions: ClientOptions) => any;

    on: ClientEvents;
  }
}
