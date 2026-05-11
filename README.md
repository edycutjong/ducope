<div align="center">
  <h1>Ducope 🚀</h1>
  <p><em>Empowering Web3 traders to turn failed swaps into new meme coins instantly.</em></p>
  <img src="docs/readme-hero.png" alt="Ducope Hero" width="100%">
  
  <br/>
  
  [![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen.svg?style=for-the-badge)](https://ducope.edycu.dev)
  [![Pitch Video](https://img.shields.io/badge/Pitch-Video-red.svg?style=for-the-badge)](https://youtu.be/m6wcbRwVBmQ)
  [![Pitch Deck](https://img.shields.io/badge/Pitch-Deck-f59e0b.svg?style=for-the-badge)](https://ducope.edycu.dev/pitch)
  [![Superteam Frontier](https://img.shields.io/badge/Superteam-Frontier_Hackathon-1E40AF?style=for-the-badge&logo=solana&logoColor=white)](https://superteam.fun/earn/listing/dumdotfun)

  <br/>

  ![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white)
  ![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
  ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
  ![Solana](https://img.shields.io/badge/Solana-14F195?style=flat&logo=solana&logoColor=black)
  ![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat&logo=framer&logoColor=white)
  [![Ducope CI](https://github.com/edycutjong/ducope/actions/workflows/ci.yml/badge.svg)](https://github.com/edycutjong/ducope/actions/workflows/ci.yml)
</div>

---

## 📸 See it in Action
*(Demo GIF and UI screenshots can be found in the `docs/assets` directory)*

<div align="center">
  <img src="public/og-image.png" alt="App Demo" width="100%">
</div>

## 💡 The Problem & Solution
In the chaotic world of meme coin trading, failed transactions due to high slippage or MEV bots are a frustrating reality. 
**Ducope** solves this by turning this pain point into a feature. It is an error-state meme token minter—if your swap fails, you instantly become the founder of a new token.

**Key Features:**
- ⚡ **High Performance:** Instant detection of failed swaps and automated contract deployment.
- 🔒 **Secure by Design:** Verifiable on-chain actions and robust smart contract security.
- 🎨 **Intuitive UX:** Beautiful, user-centric interface built for scale.

## 🏗️ Architecture & Tech Stack

### Tech Stack
| Component | Technology | Description |
|-----------|------------|-------------|
| **Frontend** | Next.js 16, React 19 | App Router, SSR, Server Components |
| **Styling** | Tailwind CSS v4, Framer Motion | High-performance responsive UI & animations |
| **Language** | TypeScript | Strict type safety across the stack |
| **Blockchain** | Solana | Fast, low-cost meme token minting |
| **Testing** | Vitest | Comprehensive unit and component testing |

For a detailed breakdown of our system architecture and data flow, please refer to the [Architecture Document](docs/ARCHITECTURE.md).

## 🏆 Sponsor Tracks Targeted
* **Web3 SDK Integration**: We used standard Web3 Tooling to handle wallet connection and transaction lifecycle. The implementation can be found in our core app logic.
* **Frontend Infrastructure**: We deployed our high-performance edge application using Vercel. 

## 🚀 Run it Locally (For Judges)

1. **Clone the repo:** `git clone https://github.com/edycutjong/ducope.git`
2. **Install dependencies:** `npm install`
3. **Set up environment variables:** Rename `.env.example` to `.env.local` and add your keys.
4. **Run the app:** `npm run dev`

> **Note for Judges:** 
> You can skip importing a real wallet! Use our built-in test credentials to test the flow instantly:
> **Test Account:** `judge@hackathon.com` | **Password:** `hackathon2026`
> Alternatively, connect any burner wallet on a supported Testnet.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
