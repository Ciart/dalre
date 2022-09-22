import { useEffect, useRef } from 'react';
import styles from './canvas-panel.module.css';

export const CanvasPanel = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // TO-DO: 캔버스 사이즈 문제 해결하기

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const canvas = canvasRef.current;

    if (!wrapper || !canvas) {
      return;
    }

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        canvas.width = Math.ceil(entry.contentRect.width);
        canvas.height = Math.ceil(entry.contentRect.height);

        console.log(entry.contentRect.width, entry.contentRect.height);

        const ctx = canvas.getContext('2d')!;

        ctx.fillStyle = '#333333';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    });

    resizeObserver.observe(wrapper);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className={styles['wrapper']} ref={wrapperRef}>
      <canvas className={styles['canvas']} ref={canvasRef} />
    </div>
  );
};
