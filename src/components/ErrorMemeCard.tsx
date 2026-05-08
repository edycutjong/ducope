import React from 'react';

interface ErrorMemeCardProps {
  tokenInfo: { ticker: string, address: string };
  onClose: () => void;
}

export const ErrorMemeCard: React.FC<ErrorMemeCardProps> = ({ tokenInfo, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-slate-900 border-2 border-yellow-500 rounded-3xl p-8 max-w-md w-full shadow-[0_0_50px_rgba(234,179,8,0.2)] text-center relative animate-in slide-in-from-bottom-10 duration-500">
        <button 
          onClick={onClose}
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
  );
};
