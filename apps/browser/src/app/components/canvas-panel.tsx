import { useEffect, useRef } from 'react';
import styles from './canvas-panel.module.css';

export const CanvasPanel = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // TO-DO: 캔버스 사이즈 문제 해결하기

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        canvas.width = entry.contentRect.width;
        canvas.height = entry.contentRect.height;
      }
    });

    resizeObserver.observe(canvas);

    return () => {
      resizeObserver.disconnect();
    };
  }, [canvasRef]);

  return (
    <div className={styles['wrapper']}>
      <canvas className={styles['canvas']} ref={canvasRef} />
    </div>
  );
};
