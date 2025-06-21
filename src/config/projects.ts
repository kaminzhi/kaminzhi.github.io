export interface Project {
  title: string;
  desc: string;
  tech: string[];
  link: string;
  image: string;
  author: {
    avatar: string;
    name: string;
  };
  languages?: {
    name: string;
    percentage: number;
    color?: string;
  }[];
}

export const projects: Project[] = [
  {
    title: "Sakura",
    desc: "a discord bot base on discord.py",
    tech: ["Python", "DiscordBot"],
    link: "https://github.com/kaminzhi/Sakura",
    image: "https://github.com/kaminzhi/Sakura/blob/newmain/image.jpg?raw=true",
    author: {
      avatar: "https://avatars.githubusercontent.com/u/72861268?v=4",
      name: "kamin_zhi",
    },
    languages: [
      { name: "Python", percentage: 99.9, color: "#3572A5" },
      { name: "Dockerfile", percentage: 0.1, color: "#384D54" },
    ],
  },
  {
    title: "Minecraft-Server-status",
    desc: "A Minecraft Server Status Write in Rust",
    tech: ["Rust"],
    link: "https://github.com/kaminzhi/minecraft-server-status",
    image:
      "https://www.esports.net/wp-content/uploads/2024/11/minecraft-server-status.webp",
    author: {
      avatar: "https://avatars.githubusercontent.com/u/72861268?v=4",
      name: "kamin_zhi",
    },
    languages: [
      { name: "Rust", percentage: 93.4, color: "#dea584" },
      { name: "Dockerfile", percentage: 6.6, color: "#384d54" },
    ],
  },
  {
    title: "kaminzhi.github.io",
    desc: "My Website",
    tech: ["Next.js", "TypeScript"],
    link: "https://github.com/kaminzhi/kaminzhi.github.io",
    image:
      "https://images.ctfassets.net/23aumh6u8s0i/6pjUKboBuFLvCKkE3esaFA/5f2101d6d2add5c615db5e98a553fc44/nextjs.jpeg",
    author: {
      avatar: "https://avatars.githubusercontent.com/u/72861268?v=4",
      name: "kamin_zhi",
    },
    languages: [
      { name: "TypeScript", percentage: 96.2, color: "#3178c6" },
      { name: "JavaScript", percentage: 3.0, color: "#f1e05a" },
      { name: "CSS", percentage: 0.8, color: "#563d7c" },
    ],
  },
  {
    title: "Dotfile",
    desc: "My Dev Config",
    tech: ["shell", "lua", "tmux", "neovim", "fish"],
    link: "https://github.com/kaminzhi/dotfile",
    image:
      "https://github.com/kaminzhi/dotfile/raw/main/.images/screenshot.png",
    author: {
      avatar: "https://avatars.githubusercontent.com/u/72861268?v=4",
      name: "kamin_zhi",
    },
    languages: [
      { name: "Shell", percentage: 82.3, color: "#89e051" },
      { name: "Lua", percentage: 17.7, color: "#000080" },
    ],
  },
];

