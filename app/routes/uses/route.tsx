import React from "react";
import Editor from "./editor.png";

const UsesPage = () => {
  return (
    <div>
      <div>
        <h1 className="text-black dark:text-white">Uses</h1>
        <h3 className="text-black dark:text-white">
          My Hardware and Software Setup
        </h3>
        <p className="text-black dark:text-white">What I use everyday</p>
        <h3>Tech</h3>
        <ul>
          <li>React.js</li>
          <li>
            <b>Remix</b>- Framework of choice for buidling web apps
          </li>
          <li>
            <b>React Native</b>- Framework of choice for buildling mobile
            applications
          </li>
          <li>
            <b>Vue.js</b>- We use it for at mammoth.io
          </li>
          <li>Vitest - Testing framework</li>
          <li>Tailwind CSS - Utility first CSS framework</li>
        </ul>
        <h3>Coding setup</h3>
        <img src={Editor} alt="editor" className="rounded text-center" />
        <ul>
          <li>Wezterm - Cross platform feature rich terminal</li>
          <li>
            NVIM - Hackable Personal Development Environment.
            <a
              href="https://github.com/YajanaRao/kickstart.nvim"
              className="mx-2"
            >
              My config
            </a>
          </li>
          <li>
            <a href="https://github.com/YajanaRao/everforest">
              Evergreen - Colorscheme
            </a>
          </li>
          <li>Jetbrains and Maplo font</li>
          <li>Lazygit</li>
          <li>fzf</li>
        </ul>
        <h3>Desktop Apps</h3>
        <ul>
          <li>Spotify</li>
          <li>Zen / Arc / Brave / Edge Browser</li>
          <p>
            I love zen but debugging is better in chromium based browsers also
            some applications does not support Firefox so looking for a chromium
            alternative
          </p>
          <li>Bitwarden</li>
        </ul>
      </div>
    </div>
  );
};

export default UsesPage;
