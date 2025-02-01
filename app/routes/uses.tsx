import React from "react";

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
          <li>React</li>
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
        </ul>
        <h3>Coding setup</h3>
        <ul>
          <li>Wezterm</li>
          <li>
            <a href="https://github.com/YajanaRao/kickstart.nvim">NVIM</a>
          </li>
          <li>
            <a href="https://github.com/YajanaRao/everforest">Evergreen </a>
          </li>
          <li>Jetbrains and Maplo font</li>
        </ul>
      </div>
    </div>
  );
};

export default UsesPage;
