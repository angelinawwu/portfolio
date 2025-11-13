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

export default function FooterGraphic() {
  const preRef = useRef<HTMLPreElement>(null);
  const [fontSize, setFontSize] = useState(8);
  const [lineHeight, setLineHeight] = useState(8);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const updateSize = () => {
      if (preRef.current) {
        const width = window.innerWidth;
        
        // Breakpoint-based character width ratios (same as before)
        let charRatio: number;
        if (width < 768) {
          charRatio = 1.72; // Mobile
        } else if (width < 1024) {
          charRatio = 0.7; // Tablet
        } else {
          charRatio = 0.85; // Desktop
        }
        
        const lineHeightRatio = 0.65;
        
        // Calculate based on window width divided by character count
        // The ASCII art is roughly 120 characters wide
        const baseCharWidth = width / 120;
        
        // Apply the responsive ratio
        const charWidth = baseCharWidth * charRatio;
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
      className="text-right font-mono text-white opacity-100 overflow-visible m-0 p-0 whitespace-pre"
      style={{
        fontSize: `${fontSize}px`,
        lineHeight: `${lineHeight}px`,
      }}
    >
      {frame}
    </pre>
  );
}

