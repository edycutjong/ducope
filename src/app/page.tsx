"use client";

import { StatusBar } from "@/components/StatusBar";
import { Footer } from "@/components/Footer";

import React, { useState } from 'react';
import { dumFunService } from '@/lib/dumfun';

export default function Home() {
  const [isSwapping, setIsSwapping] = useState(false);
  const [swapFailed, setSwapFailed] = useState(false);
  const [showMeme, setShowMeme] = useState(false);
  const [tokenInfo, setTokenInfo] = useState({ ticker: "$REKT_SLIPPAGE", address: "Ducope9xN...kL7p" });

  const handleSwap = () => {
    setIsSwapping(true);
    setSwapFailed(false);
    setShowMeme(false);

    // Simulate swap failure after 1.5 seconds
    setTimeout(async () => {
      setIsSwapping(false);
      setSwapFailed(true);
      
      const newToken = await dumFunService.deployCopeToken("slippage");
      setTokenInfo(newToken);
      setShowMeme(true);
    }, 1500);
  };

  return (
    <>
      <StatusBar />
    <main className="min-h-screen p-4 md:p-8 flex flex-col items-center justify-center relative overflow-hidden bg-slate-950">
      {/* Swap Interface (Dummy) */}
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl z-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-white">Swap</h2>
          <span className="text-slate-400">⚙️</span>
        </div>
        
        <div className="space-y-2 mb-6">
          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
            <div className="text-sm text-slate-500 mb-2">You pay</div>
            <div className="flex justify-between items-center">
              <input 
                type="text" 
                className="bg-transparent text-3xl text-white outline-none w-2/3" 
                defaultValue="10.0" 
              />
              <div className="bg-slate-800 px-3 py-1 rounded-full flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-purple-500"></div>
                <span>SOL</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center -my-3 relative z-10">
            <button className="bg-slate-800 border-4 border-slate-900 p-2 rounded-xl text-slate-400 hover:text-white transition-colors">
              ↓
            </button>
          </div>

          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
            <div className="text-sm text-slate-500 mb-2">You receive</div>
            <div className="flex justify-between items-center">
              <input 
                type="text" 
                className="bg-transparent text-3xl text-white outline-none w-2/3" 
                defaultValue="14,250.0" 
              />
              <div className="bg-slate-800 px-3 py-1 rounded-full flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-500"></div>
                <span>USDC</span>
              </div>
            </div>
          </div>
        </div>

        <button 
          onClick={handleSwap}
          disabled={isSwapping}
          className={`w-full py-4 rounded-2xl font-bold text-lg transition-all ${
            swapFailed 
              ? 'bg-red-500/20 text-red-500 border border-red-500/50' 
              : 'bg-yellow-500 hover:bg-yellow-400 text-slate-950'
          }`}
        >
          {isSwapping ? 'Swapping...' : swapFailed ? 'Swap Failed: Slippage Exceeded' : 'Swap'}
        </button>
      </div>

      {/* The Ducope Meme Toast / Modal */}
      {showMeme && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-slate-900 border-2 border-yellow-500 rounded-3xl p-8 max-w-md w-full shadow-[0_0_50px_rgba(234,179,8,0.2)] text-center relative animate-in slide-in-from-bottom-10 duration-500">
            <button 
              onClick={() => { setSwapFailed(false); setShowMeme(false); }}
              className="absolute top-4 right-4 text-slate-500 hover:text-white"
            >
              ✕
            </button>
            <div className="text-6xl mb-4">🤡</div>
            <h2 className="text-2xl font-black text-white mb-2 uppercase italic tracking-wider">
              Swap failed? Let's cope.
            </h2>
            <p className="text-slate-400 mb-6 font-mono text-sm">
              We just deployed a meme token on <span className="text-yellow-500">Dum.fun</span> for your pain.
            </p>
            
            <div className="bg-slate-950 rounded-2xl p-4 border border-slate-800 text-left mb-6 font-mono">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-red-500 rounded flex items-center justify-center text-xl">📉</div>
                <div>
                  <div className="text-white font-bold">{tokenInfo.ticker}</div>
                  <div className="text-xs text-slate-500">Market Cap: $0.00</div>
                </div>
              </div>
              <div className="text-xs text-slate-400 mt-3 break-all">
                CA: {tokenInfo.address}
              </div>
            </div>

            <button className="w-full bg-yellow-500 text-slate-950 font-black py-3 rounded-xl hover:bg-yellow-400 transition-colors uppercase tracking-widest">
              View on Dum.fun
            </button>
          </div>
        </div>
      )}
    </main>
      <Footer />
    </>
  );
}
