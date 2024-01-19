<p align="center">
<picture>
    <source srcset="https://uploads-ssl.webflow.com/63b5a9958fccedcf67d716ac/64662df3a5a568fd99e3600c_Squid_Pose_1_White-transparent-slim%201.png" media="(prefers-color-scheme: dark)">
    <img src="https://uploads-ssl.webflow.com/63b5a9958fccedcf67d716ac/64662df3a5a568fd99e3600c_Squid_Pose_1_White-transparent-slim%201.png" alt="Subsquid Logo">
</picture>
</p>

[![docs.rs](https://docs.rs/leptos/badge.svg)](https://docs.subsquid.io/)
[![Discord](https://img.shields.io/discord/1031524867910148188?color=%237289DA&label=discord)](https://discord.gg/subsquid)

[Website](https://subsquid.io) | [Docs](https://docs.subsquid.io/) | [Discord](https://discord.gg/subsquid)

[Subsquid Network Docs](https://docs.subsquid.io/subsquid-network/)

# Network Test One: Uniform Load

Some tests of Subsquid Network Phase Two testnet require that all workers regularly serve some queries. You can help the team create this type of uniform load by running this squid.

Note: you'll need to have at least 100 tSQD to complete this quest. Obtain them by doing other quests first.

### I. Install dependencies: Node.js, Docker, Git.

<details>
<summary>On Windows</summary>

1. Enable [Hyper-V](https://learn.microsoft.com/en-us/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v).
2. Install [Docker for Windows](https://docs.docker.com/desktop/install/windows-install/).
3. Install NodeJS LTS using the [official installer](https://nodejs.org/en/download).
4. Install [Git for Windows](https://git-scm.com/download/win).

In all installs it is OK to leave all the options at their default values. You will need a terminal to complete this tutorial - [WSL](https://learn.microsoft.com/en-us/windows/wsl/install) bash is the preferred option.

</details>
<details>
<summary>On Mac</summary>

1. Install [Docker for Mac](https://docs.docker.com/desktop/install/mac-install/).
2. Install Git using the [installer](https://sourceforge.net/projects/git-osx-installer/) or by [other means](https://git-scm.com/download/mac).
3. Install NodeJS LTS using the [official installer](https://nodejs.org/en/download).

We recommend configuring NodeJS to install global packages to a folder owned by an unprivileged account. Create the folder by running
```bash
mkdir ~/global-node-packages
```
then configure NodeJS to use it
```bash
npm config set prefix ~/global-node-packages
```
Make sure that the folder `~/global-node-packages/bin` is in `PATH`. That allows running globally installed NodeJS executables from any terminal. Here is a one-liner that detects your shell and takes care of setting `PATH`:
```
CURSHELL=`ps -hp $$ | awk '{print $5}'`; case `basename $CURSHELL` in 'bash') DEST="$HOME/.bash_profile";; 'zsh') DEST="$HOME/.zshenv";; esac; echo 'export PATH="${HOME}/global-node-packages/bin:$PATH"' >> "$DEST"
```
Alternatively you can add the following line to `~/.zshenv` (if you are using zsh) or `~/.bash_profile` (if you are using bash) manually:
```
export PATH="${HOME}/global-node-packages/bin:$PATH"
```

Re-open the terminal to apply the changes.

</details>
<details>
<summary>On Linux</summary>

Install [NodeJS (v16 or newer)](https://nodejs.org/en/download/package-manager), Git and Docker using your distro's package manager.

We recommend configuring NodeJS to install global packages to a folder owned by an unprivileged account. Create the folder by running
```bash
mkdir ~/global-node-packages
```
then configure NodeJS to use it
```bash
npm config set prefix ~/global-node-packages
```
Make sure that any executables globally installed by NodeJS are in `PATH`. That allows running them from any terminal. Open the `~/.bashrc` file in a text editor and add the following line at the end:
```
export PATH="${HOME}/global-node-packages/bin:$PATH"
```
Re-open the terminal to apply the changes.

</details>

### II. Install Subsquid CLI

Open a terminal and run
```bash
npm install --global @subsquid/cli@latest
```
This adds the [`sqd` command](/squid-cli). Verify that the installation was successful by running
```bash
sqd --version
```
A healthy response should look similar to
```
@subsquid/cli/2.8.0 linux-x64 node-v20.5.1
```

### III. Run the squid

1. Open a terminal and run the following commands to retrieve the squid, enter its folder and install dependencies:
   ```bash
   sqd init network-test-one-uniform-load-squid -t https://github.com/subsquid-quests/network-test-one-uniform-load-squid
   ```
   ```bash
   cd network-test-one-uniform-load-squid
   ```
   ```bash
   npm ci
   ```

2. Press "Get Key" button in the quest card to obtain the `networkTestOneUniformLoad.key` key file. Save it to the `./query-gateway/keys` subfolder of the squid folder. The file will be used to identify your local query gateway when staking tSQD to allocate bandwidth and as it operates.

3. Stake some tSQD on the ID of your future gateway by running
   ```bash
   sqd stake
   ```
   The command will prompt you for the private key of the wallet where you have your tSQDs. The key will be used to sign the staking transaction. [Here's an instruction on how to get your private key on Metamask](https://support.metamask.io/hc/en-us/articles/360015289632-How-to-export-an-account-s-private-key).

4. Start the query gateway with
   ```bash
   WALLET_PRIVATE_KEY=XXXX... sqd up
   ```
   The key will be used for signing the CU allocation transactions.

5. Build the squid code
   ```bash
   sqd build
   ```

6. Start your squid with
   ```bash
   sqd run .
   ```
   The command should output lines like these:
   ```
   [eth-processor] {"level":2,"time":1705681499120,"ns":"sqd:commands","msg":"PROCESS:ETH"}
   [moonbeam-processor] {"level":2,"time":1705681499148,"ns":"sqd:commands","msg":"PROCESS:MOONBEAM"}
   [base-processor] {"level":2,"time":1705681499155,"ns":"sqd:commands","msg":"PROCESS:BASE"}
   [bsc-processor] {"level":2,"time":1705681499163,"ns":"sqd:commands","msg":"PROCESS:BSC"}
   [eth-processor] 01:24:59 INFO  sqd:processor processing blocks from 955722
   [base-processor] 01:24:59 INFO  sqd:processor processing blocks from 1208926
   [moonbeam-processor] 01:24:59 INFO  sqd:processor processing blocks from 166845
   [bsc-processor] 01:24:59 INFO  sqd:processor processing blocks from 16996735
   [eth-processor] 01:24:59 INFO  sqd:processor using archive data source
   [eth-processor] 01:24:59 INFO  sqd:processor prometheus metrics are served at port 34253
   [base-processor] 01:24:59 INFO  sqd:processor using archive data source
   [base-processor] 01:24:59 INFO  sqd:processor prometheus metrics are served at port 40205
   [moonbeam-processor] 01:24:59 INFO  sqd:processor using archive data source
   [moonbeam-processor] 01:24:59 INFO  sqd:processor prometheus metrics are served at port 33691
   [bsc-processor] 01:24:59 INFO  sqd:processor using archive data source
   [bsc-processor] 01:24:59 INFO  sqd:processor prometheus metrics are served at port 41199
   [moonbeam-processor] 01:25:00 INFO  sqd:processor:mapping Got 0 burn txs and 0 USDT transfers
   [moonbeam-processor] 01:25:00 INFO  sqd:processor 171971 / 5325985, rate: 3823 blocks/sec, mapping: 2729 blocks/sec, 1364 items/sec, eta: 23m
   [base-processor] 01:25:00 INFO  sqd:processor:mapping Got 0 burn txs and 0 USDT transfers
   [base-processor] 01:25:00 INFO  sqd:processor 1477379 / 9442733, rate: 175758 blocks/sec, mapping: 8032 blocks/sec, 1339 items/sec, eta: 45s
   [base-processor] 01:25:02 INFO  sqd:processor:mapping Got 1 burn txs and 0 USDT transfers
   ```

   The squid should download enough data in 3-4 hours. When it's done, stop it with Ctrl-C, then stop and remove the query gateway containers with
   ```bash
   sqd down
   ```
   You will get a warning about the missing `WALLET_PRIVATE_KEY` variable. That's normal.

# Quest Info

| Category         | Skill Level                          | Time required (minutes) | Max Participants | Reward                              | Status |
| ---------------- | ------------------------------------ | ----------------------- | ---------------- | ----------------------------------- | ------ |
| Squid Deployment | $\textcolor{green}{\textsf{Simple}}$ | ~250                    | -                | $\textcolor{red}{\textsf{75tSQD}}$  | open   |

# Acceptance critera

Sync this squid using the key from the quest card. The syncing progress is tracked by the amount of data the squid has retrieved from [Subsquid Network](https://docs.subsquid.io/subsquid-network).

# About this squid

This [squid](https://docs.subsquid.io/) retrieves native token burns on ETH, BSC, Base and Moonbeam. It also grabs Transfer events from popular stablecoins on the same networks. It does not keep any data, as it's sole purpose is to stress test the network.

Data ingester ("processor") code is defined for all networks in `src/testConfig.ts`. The executable `src/main.ts` chooses the settings to use based on its sole command line argument. The scripts file `commands.json` contains commands for running each processor (`process:eth`, `process:bsc`, `process:base` and `process:moonbeam`). You can also use `sqd run` to run all the services at once; the list of services is kept in the [squid manifest](https://docs.subsquid.io/cloud/reference/manifest/) at `squid.yaml`.

The squid uses Phase Two [Subsquid Network](https://docs.subsquid.io/subsquid-network) as its primary data source.
