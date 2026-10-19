import React, { useState } from 'react';
import { Copy, Check, Terminal } from 'lucide-react';
import { cn } from '../../utils/cn';

interface CodeBlockProps {
  cppCode?: string;
  pythonCode?: string;
  defaultLanguage?: 'C++' | 'Python';
  title?: string;
  className?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  cppCode,
  pythonCode,
  defaultLanguage = 'C++',
  title,
  className,
}) => {
  const [lang, setLang] = useState<'C++' | 'Python'>(defaultLanguage);
  const [copied, setCopied] = useState(false);

  const activeCode = lang === 'C++' ? cppCode || pythonCode : pythonCode || cppCode;

  const handleCopy = () => {
    if (!activeCode) return;
    navigator.clipboard.writeText(activeCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        'rounded-xl border border-surface-border bg-slate-900/95 dark:bg-[#0c101a] overflow-hidden text-xs font-mono shadow-glass-ambient',
        className
      )}
    >
      {/* Code Header with Apple-like control aesthetic */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-surface-border bg-slate-950/40 dark:bg-slate-900/40 backdrop-blur-md">
        <div className="flex items-center gap-3">
          {/* Subtle OS dots */}
          <div className="hidden sm:flex items-center gap-1.5 opacity-60">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
          </div>

          {title && (
            <span className="text-slate-300 font-sans font-medium text-xs flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-primary" />
              {title}
            </span>
          )}

          {cppCode && pythonCode && (
            <div className="flex items-center bg-black/30 p-0.5 rounded-lg border border-white/10">
              <button
                onClick={() => setLang('C++')}
                className={cn(
                  'px-2.5 py-0.5 rounded-md text-[11px] font-sans font-medium transition-all',
                  lang === 'C++'
                    ? 'bg-primary text-white shadow-sm font-semibold'
                    : 'text-slate-400 hover:text-white'
                )}
              >
                C++
              </button>
              <button
                onClick={() => setLang('Python')}
                className={cn(
                  'px-2.5 py-0.5 rounded-md text-[11px] font-sans font-medium transition-all',
                  lang === 'Python'
                    ? 'bg-primary text-white shadow-sm font-semibold'
                    : 'text-slate-400 hover:text-white'
                )}
              >
                Python
              </button>
            </div>
          )}
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          title="Copy code to clipboard"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-sans text-[11px]">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span className="font-sans text-[11px]">Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Body */}
      <pre className="p-4 overflow-x-auto text-slate-100 leading-relaxed select-text font-mono">
        <code>{activeCode || '// No canonical code provided'}</code>
      </pre>
    </div>
  );
};
