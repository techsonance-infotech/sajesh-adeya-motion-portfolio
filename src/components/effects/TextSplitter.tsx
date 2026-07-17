import React from 'react';

interface TextSplitterProps {
  text: string;
  className?: string;
  wordClassName?: string;
  charClassName?: string;
  by?: 'word' | 'char' | 'both';
}

export function TextSplitter({
  text,
  className = '',
  wordClassName = 'inline-block',
  charClassName = 'inline-block',
  by = 'both',
}: TextSplitterProps) {
  if (by === 'word') {
    return (
      <span className={className}>
        {text.split(' ').map((word, wordIdx) => (
          <span key={wordIdx} className={wordClassName}>
            {word}
            {wordIdx < text.split(' ').length - 1 && '\u00A0'}
          </span>
        ))}
      </span>
    );
  }

  if (by === 'char') {
    return (
      <span className={className}>
        {text.split('').map((char, charIdx) => (
          <span key={charIdx} className={charClassName}>
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>
    );
  }

  // by === 'both' (words containing characters, allows masking individual letters within words)
  const words = text.split(' ');
  return (
    <span className={className}>
      {words.map((word, wordIdx) => (
        <span key={wordIdx} className={`${wordClassName} whitespace-nowrap inline-flex overflow-hidden`}>
          {word.split('').map((char, charIdx) => (
            <span key={charIdx} className={charClassName}>
              {char}
            </span>
          ))}
          {wordIdx < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}
