'use client';

import { useEffect, useRef, useState } from 'react';

const frames = [`
              
                  +++*                   +*               \` ++                                                  
             *+**+**+*. *+         .***+++*++            ***++++*++           .  ++++               ;+ +*       
            *****+********         +********++           ****+++**+ .         *+++****.*           ;+;++****    
         +***********+****        ++********++          *****+++**+;**       ****+++*+**           **++++****   
         *********+*++****        ++*********;+         ******++*++***       ****++++***+          **+++******  
         ******++*+*++****       \`;+*********;+         ******++*++**;       *****+++****         +*+++*******  
         \`******++*+++***;       +;**********;;        .******++++***        *****++*****         ***+********  
          *******++++****.       ++**********++        *******+++****       .*****++*****         **++********  
          ********+++****.        +*******+**++        ******+++****+       *******+*****        +*+++********  
          ********+++****;        +;******++*++        *******+++***;       ******+******        +*+++********  
          *********;+****;        ++**********+        ********+++*+        ******+******        ++++*********  
           ********++++**.        ++*****+++*++        ********+++*+        ******++*****       +++++*********  
           ******+*++++++         ++****+++++++        ********+++++        ******++*****       +++++*********  
           +****+++++++++         \`++*++++++++;        +***+*+;+++++        ******+*+***;       ;++++*+******.  
            ****+++++++++          ++++++++++;;        +*+++++;++++         +*++**+++***        +++++*++*****   
            \`**++++;;+++  +         ;++++++++;          +++++;;++++         +++++*;+++++         ++;+++++****   
             ++++++;;+;   +         ;;+++;;;;            ;+++;+++;           +++++;++++.         ;+;+++++++*    
               ;;;;;;     +           .;;;.;              .;..;;;             ;;+;;+++;           ;;;+++++++    
                  +;     ++             ;;                 +;                  \`;;;;;               .;;;;;;     
            ;      +     ;+              +                 ++                    ;                  ;;          
            +      +    \`;.              +    .    ;       ++                    +      ;           ++          
            *      +    ;+               +    ;    +       +                     +      +           ++          
            *;     *.   ;+               +   +.    +.      +                     +     .+           ++      +   
            ++     *+  ;;+               +   .     +;      +                    .+    ;;            +       *   
             +;    *+  ;;+               +  +.      ;+     +                    ;+    ;+            +      .;   
             *;    *+  ;;+               *. .+      +;     +                    ++   .;+            +     .+    
             *;    *+  ;;+               *;+.;      +;;   ;+                    ++  \`.++           .+     ;+    
             *;;   ++  ;;+               *;.;;      +;;   ++                    +*  .;+\`           +*    ;;*    
             *;;   ;+ .;;+               *+.;;      ++;;  ++                    ++  .;+            ++    .+     
             *;;    + ;;;+               *+.+;      ++;;  *+                    +* ..;+            ++   .;+     
             *;;\`   + ;;;+            +  *+.+.      ++;;  *+                    +* ..;+            ++   .;+     
             *;;;   * .;;+           .+. *+;+\`      ;+;;; *+     +      .       ++..;++            +;  .;++     
             *+;;   * .;;+           *++.*+;+       \`+;.; *+    .*      ;+      +...;++            +   .;+*     
             **;;   * .;++           *+++*;;+        +;.; *+   ;*;     \`;.;     +\`..;+.            +   .;+;     
             \`*;;;  *\`;;++           *++++;;+        +;.; *+  ;++      ;+.;.    +...;;             +  ..;+      
              *;.;  *.;;++           *++++;;+\`       +;..;*+ ;+++      ;+.;;    +...;;            \`+  ..;+      
              *+;.  *.;;++           *++++;++;       +;..;*+ ++++      ;+;.;+   +..;;+            ;+ ..;;+      
              *+;.. *.;;++           *+;+++++;       +;..;++;+++       ++;.;;   +..;;+            ++ ...++      
               +;.. *.;++            *+;++++;;       +;...+;++++       ++;.;;+  +..;;;            ++ ..;++      
               *+.. *..++            ++;++++;;       ;;...++++++       ++;..;+ .+..;;             ++...;+       
               ++..\`*.;+;            ++;;;++;;       .+...+++++        ++;..;+ ;+..;+             ++...++       
                ++..*..;;            ++;+;;+.;        +;..+++++        ++;..;;\`;+.;;.             ++..;++       
                ++..*..;\`            ++;;;;;.         ;;.;+++++        ++;..;;+;+..+              ++..;+        
                *+..+.;;             ++;;;;;;         ;;.;;++++        ++;..;;+;+..+              ++..++        `];

// Fit text to container function
function fitTextToContainer(text: string, fontFace: string, containerWidth: number): number {
  const getPixelRatio = () => {
    const ctx = document.createElement("canvas").getContext("2d");
    if (!ctx) return 1;
    const dpr = window.devicePixelRatio || 1;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ctxAny = ctx as any;
    const bsr = ctxAny.webkitBackingStorePixelRatio ||
                ctxAny.mozBackingStorePixelRatio ||
                ctxAny.msBackingStorePixelRatio ||
                ctxAny.oBackingStorePixelRatio ||
                ctxAny.backingStorePixelRatio || 1;
    return dpr / bsr;
  };

  const PIXEL_RATIO = getPixelRatio();

  const createHiDPICanvas = (w: number, h: number) => {
    const canvas = document.createElement("canvas");
    canvas.width = w * PIXEL_RATIO;
    canvas.height = h * PIXEL_RATIO;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    canvas.getContext("2d")?.setTransform(PIXEL_RATIO, 0, 0, PIXEL_RATIO, 0, 0);
    return canvas;
  };

  const canvas = createHiDPICanvas(containerWidth, 0);
  const context = canvas.getContext('2d');
  if (!context) return 8;

  const split = (text: string) => text.split('\n');
  
  const getLongestLine = (lines: string[]) => {
    let longest = -1;
    let i: number | undefined;

    lines.forEach((line, ii) => {
      const lineWidth = context.measureText(line).width;
      if (lineWidth > longest) {
        i = ii;
        if (!line.includes('exempt-from-text-fit-calculation')) {
          longest = lineWidth;
        }
      }
    });

    return typeof i === 'number' ? lines[i] : null;
  };

  const getFittedFontSize = (text: string, fontFace: string) => {
    const fits = () => context.measureText(text).width <= canvas.width;
    const font = (size: number, face: string) => size + "px " + face;

    let fontSize = 200;
    do {
      fontSize--;
      context.font = font(fontSize, fontFace);
    } while (!fits());

    fontSize /= (PIXEL_RATIO / 2.2);
    return fontSize;
  };

  const longestLine = getLongestLine(split(text));
  if (!longestLine) return 8;
  
  return getFittedFontSize(longestLine, fontFace);
}

export default function FooterGraphic() {
  const preRef = useRef<HTMLPreElement>(null);
  const [fontSize, setFontSize] = useState(8);
  const [lineHeight, setLineHeight] = useState(8);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const updateSize = () => {
      if (preRef.current && frames && frames.length > 0) {
        const normalizedFrame = frames[0]?.replace(/^\n+/, '') ?? '';
        const width = window.innerWidth;
        
        // Simple 3 breakpoints
        let charRatio: number;
        if (width < 768) {
          charRatio = 0.36; // Mobile
        } else if (width < 1024) {
          charRatio = 0.5; // Tablet
        } else {
          charRatio = 0.6; // Desktop
        }
        
        const lineHeightRatio = 0.65;
        const lines = normalizedFrame.split('\n');
        const secondLine = lines[1] || lines[0] || '';
        
        const charWidth = fitTextToContainer(
          secondLine,
          'monospace',
          preRef.current.clientWidth
        ) * charRatio;
        const charHeight = lineHeightRatio * charWidth;
        setFontSize(charWidth);
        setLineHeight(charHeight);
      }
    };

    const debouncedUpdateSize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateSize, 150);
    };

    updateSize();
    window.addEventListener('resize', debouncedUpdateSize);
    return () => {
      window.removeEventListener('resize', debouncedUpdateSize);
      clearTimeout(timeoutId);
    };
  }, []);

  if (!frames || frames.length === 0) {
    return null;
  }

  const frame = frames[0]?.replace(/^\n+/, '') ?? '';

  return (
    <pre
      ref={preRef}
      className="text-right font-mono text-white opacity-100 pointer-events-none overflow-visible m-0 p-0 whitespace-pre"
      style={{
        fontSize: `${fontSize}px`,
        lineHeight: `${lineHeight}px`,
      }}
    >
      {frame}
    </pre>
  );
}

