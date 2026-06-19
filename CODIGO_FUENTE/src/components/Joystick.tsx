import { useRef } from 'react';

type Props = { disabled?: boolean };

export function Joystick({ disabled = false }: Props) {
  const baseRef = useRef<HTMLDivElement>(null);
  const stickRef = useRef<HTMLDivElement>(null);

  const emit = (x: number, z: number) => {
    window.dispatchEvent(new CustomEvent('isla:move', { detail: { x, z } }));
  };

  const update = (clientX: number, clientY: number) => {
    const base = baseRef.current;
    const stick = stickRef.current;
    if (!base || !stick || disabled) return;
    const rect = base.getBoundingClientRect();
    const x = clientX - (rect.left + rect.width / 2);
    const y = clientY - (rect.top + rect.height / 2);
    const distance = Math.hypot(x, y);
    const max = rect.width * 0.31;
    const limited = Math.min(distance, max);
    const normalX = distance > 0 ? x / distance : 0;
    const normalY = distance > 0 ? y / distance : 0;
    stick.style.transform = `translate(${normalX * limited}px, ${normalY * limited}px)`;
    emit(normalX * (limited / max), normalY * (limited / max));
  };

  const release = () => {
    if (stickRef.current) stickRef.current.style.transform = 'translate(0, 0)';
    emit(0, 0);
  };

  return (
    <div
      ref={baseRef}
      className="game-control joystick-base"
      onPointerDown={(event) => {
        event.currentTarget.setPointerCapture(event.pointerId);
        update(event.clientX, event.clientY);
      }}
      onPointerMove={(event) => {
        if (event.currentTarget.hasPointerCapture(event.pointerId)) update(event.clientX, event.clientY);
      }}
      onPointerUp={release}
      onPointerCancel={release}
      aria-label="Joystick de movimiento"
    >
      <div className="joystick-ring" />
      <div ref={stickRef} className="joystick-stick" />
    </div>
  );
}
