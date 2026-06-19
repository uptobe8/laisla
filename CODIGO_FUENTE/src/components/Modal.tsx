import type { ReactNode } from 'react';
import { X } from 'lucide-react';

type Props = {
  title: string;
  eyebrow?: string;
  children: ReactNode;
  onClose: () => void;
  wide?: boolean;
};

export function Modal({ title, eyebrow, children, onClose, wide = false }: Props) {
  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label={title}>
      <section className={`modal-card ${wide ? 'modal-wide' : ''}`}>
        <header className="modal-header">
          <div>
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            <h2>{title}</h2>
          </div>
          <button className="icon-button" onClick={onClose} aria-label="Cerrar"><X size={21} /></button>
        </header>
        <div className="modal-content">{children}</div>
      </section>
    </div>
  );
}
