import React, {FC, ReactElement, useEffect} from "react";

interface IModal {
    isVisible: boolean,
    title: string,
    content: ReactElement,
    footer: ReactElement,
    onClose: () => void
}


const Modal: FC<IModal> = ({isVisible = false, title, content, footer, onClose}) => {

    const keydownHandler = (e: KeyboardEvent) => {
        switch (e.key) {
            case 'Escape':
                onClose();
                break;
            default:
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', keydownHandler);
        return () => document.removeEventListener('keydown', keydownHandler);
    });

    return !isVisible ? null : (
        <div className="modal" onClick={onClose}>
            <div className="modal-dialog" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h3 className="modal-title">{title}</h3>
                    <span className="modal-close" onClick={onClose}>
            &times;
          </span>
                </div>
                <div className="modal-body">
                    <div className="modal-content">{content}</div>
                </div>
                {footer && <div className="modal-footer">{footer}</div>}
            </div>
        </div>
    );
};

export default Modal