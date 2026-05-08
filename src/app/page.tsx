"use client";

import { StatusBar } from "@/components/StatusBar";
import { Footer } from "@/components/Footer";
import { ErrorMemeCard } from "@/components/ErrorMemeCard";
import { HeroLanding } from "@/components/HeroLanding";

import React, { useState } from 'react';
import { dumFunSDK } from '@/lib/dumfun-sdk';
import { ErrorHandler } from '@/lib/error-handler';

export default function Home() {
  const [isSwapping, setIsSwapping] = useState(false);
  const [swapFailed, setSwapFailed] = useState(false);
  const [showMeme, setShowMeme] = useState(false);
  const [tokenInfo, setTokenInfo] = useState({ ticker: "$REKT_SLIPPAGE", address: "Ducope9xN...kL7p" });
  const [errorMessage, setErrorMessage] = useState("");

  const handleSwap = () => {
    setIsSwapping(true);
    setSwapFailed(false);
    setShowMeme(false);
    setErrorMessage("");

    // Simulate swap failure after 1.5 seconds
    setTimeout(async () => {
      setIsSwapping(false);
      setSwapFailed(true);
      
      const { message, reason } = ErrorHandler.handle("Swap failed: Slippage tolerance exceeded");
      setErrorMessage(message);

      const newToken = await dumFunSDK.createToken(reason);
      setTokenInfo(newToken);
      setShowMeme(true);
    }, 1500);
  };

  return (
    <>
      <StatusBar />
      <main className="min-h-screen relative overflow-hidden bg-slate-950">
        
        <HeroLanding />

        {/* Demo Section */}
        <section id="demo-section" className="py-24 px-4 md:px-8 flex flex-col items-center justify-center relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">See It In Action</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Try a swap with high slippage to see how Ducope intercepts the transaction and creates a new token instantly.</p>
          </div>

          {/* Swap Interface (Dummy) */}
          <div className="w-full max-w-md bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 shadow-2xl relative">
            <div className="absolute -inset-1 bg-linear-to-r from-yellow-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-50 -z-10" />
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
          {isSwapping ? 'Swapping...' : swapFailed ? errorMessage || 'Swap Failed' : 'Swap'}
        </button>
      </div>
      </section>

      {/* The Ducope Meme Toast / Modal */}
      {showMeme && (
        <ErrorMemeCard 
          tokenInfo={tokenInfo} 
          onClose={() => { setSwapFailed(false); setShowMeme(false); }} 
        />
      )}
    </main>
      <Footer />
    </>
  );
}
